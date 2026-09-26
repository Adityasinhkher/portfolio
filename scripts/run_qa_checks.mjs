import { spawn } from 'child_process';

async function runQA() {
  const chrome = spawn(
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    [
      '--headless=new',
      '--remote-debugging-port=9223',
      '--disable-gpu',
      '--no-first-run',
      '--no-default-browser-check',
      'about:blank'
    ]
  );

  await new Promise((r) => setTimeout(r, 1200));

  const viewports = [
    { width: 1440, height: 900, name: '1440x900' },
    { width: 1280, height: 800, name: '1280x800' },
    { width: 1024, height: 768, name: '1024x768' },
    { width: 768, height: 1024, name: '768x1024' },
    { width: 430, height: 932, name: '430x932' },
    { width: 390, height: 844, name: '390x844' },
  ];

  const results = {
    consoleErrors: [],
    overflows: [],
    sectionsPresent: {},
    imagesVerified: [],
    brokenImages: [],
    portOccurrences: [],
    entityLeaks: [],
    duplicateContact: false,
  };

  try {
    const listRes = await fetch('http://localhost:9223/json');
    const pages = await listRes.json();
    const wsUrl = pages[0].webSocketDebuggerUrl;

    const ws = new WebSocket(wsUrl);
    let id = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.method === 'Runtime.consoleAPICalled') {
        if (data.params.type === 'error') {
          results.consoleErrors.push(data.params.args.map((a) => a.value || a.description).join(' '));
        }
      }
      if (data.id && callbacks.has(data.id)) {
        callbacks.get(data.id)(data.result);
        callbacks.delete(data.id);
      }
    };

    const send = (method, params = {}) => {
      return new Promise((resolve) => {
        const msgId = id++;
        callbacks.set(msgId, resolve);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    };

    await new Promise((r) => (ws.onopen = r));

    await send('Page.enable');
    await send('Runtime.enable');

    await send('Page.navigate', { url: 'http://localhost:1000' });
    await new Promise((r) => setTimeout(r, 1500));

    // Check all sections exist
    const sectionsCheck = await send('Runtime.evaluate', {
      expression: `JSON.stringify({
        hero: !!document.getElementById('hero'),
        work: !!document.getElementById('work'),
        agency: !!document.getElementById('agency-partnership'),
        designtocode: !!document.getElementById('design-to-code'),
        capabilities: !!document.getElementById('capabilities'),
        process: !!document.getElementById('process'),
        about: !!document.getElementById('about'),
        contact: !!document.getElementById('contact'),
        footer: !!document.querySelector('footer'),
      })`,
    });
    results.sectionsPresent = JSON.parse(sectionsCheck.result.value);

    // Check all images
    const imagesCheck = await send('Runtime.evaluate', {
      expression: `JSON.stringify(
        Array.from(document.querySelectorAll('img')).map(img => ({
          src: img.src,
          alt: img.alt,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
          complete: img.complete
        }))
      )`,
    });
    const images = JSON.parse(imagesCheck.result.value);
    results.imagesVerified = images;
    results.brokenImages = images.filter((img) => !img.complete || img.naturalWidth === 0);

    // Check for visible port numbers or entity leaks in body text
    const textCheck = await send('Runtime.evaluate', {
      expression: `JSON.stringify({
        hasPort5174: /PORT\\s*5174|:5174/i.test(document.body.innerText),
        hasPort3000: /PORT\\s*3000|:3000/i.test(document.body.innerText),
        hasPort5176: /PORT\\s*5176|:5176/i.test(document.body.innerText),
        hasPort5177: /PORT\\s*5177|:5177/i.test(document.body.innerText),
        hasPort5178: /PORT\\s*5178|:5178/i.test(document.body.innerText),
        hasPort5188: /PORT\\s*5188|:5188/i.test(document.body.innerText),
        hasBullEntity: /&bull;|bull;/i.test(document.body.innerHTML),
        hasTerminalIconText: />_/i.test(document.body.innerText),
        desktopNavContactCount: document.querySelectorAll('nav a[href="#contact"]').length
      })`,
    });
    const textAnalysis = JSON.parse(textCheck.result.value);
    results.portAnalysis = textAnalysis;

    // Check overflow on all 6 viewports
    for (const vp of viewports) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.width < 768,
      });
      await new Promise((r) => setTimeout(r, 400));

      const overflowCheck = await send('Runtime.evaluate', {
        expression: `JSON.stringify({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
        })`,
      });
      const overflowData = JSON.parse(overflowCheck.result.value);
      if (overflowData.hasOverflow) {
        results.overflows.push({
          viewport: vp.name,
          diff: overflowData.scrollWidth - overflowData.clientWidth,
        });
      }
    }

    // Check reduced motion support in styles
    const reducedMotionCheck = await send('Runtime.evaluate', {
      expression: `window.matchMedia('(prefers-reduced-motion: reduce)').media`,
    });
    results.reducedMotionMedia = reducedMotionCheck.result.value;

    ws.close();
  } catch (err) {
    results.error = err.message;
  } finally {
    chrome.kill();
  }

  console.log(JSON.stringify(results, null, 2));
}

runQA();
