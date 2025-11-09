var t = ((e) => (
  (e.sidebarLoaded = "sidebarLoaded"), (e.panelState = "panelState"), e
))(t || {});
setTimeout(() => {
  chrome.runtime.sendMessage({ type: t.sidebarLoaded, payload: !0 });
}, 500);
const i = () => {
  const e = document.createElement("iframe");
  e.setAttribute("hidden", "hidden"),
    e.setAttribute("id", "permissionsIFrame"),
    e.setAttribute("allow", "microphone"),
    (e.src = chrome.runtime.getURL("/pages/permission/index.html")),
    document.body.appendChild(e);
};
i();
export { i as injectMicrophonePermissionIframe };
