(function () {
  "use strict";

  const injectTime = performance.now();
  (async () => {
    const { onExecute } = await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/chunk-a44126cb.js")
    );
    onExecute?.({
      perf: { injectTime, loadTime: performance.now() - injectTime },
    });
  })().catch(console.error);
})();
