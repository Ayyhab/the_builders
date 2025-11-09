// === Imports ===
import { t as formatDate } from "./chunk-d2f10733.js";
import { t as logEvent, k as setLanguage } from "./chunk-874c5426.js";

// === Content Script Manager Class ===
class ContentScriptManager {
  constructor() {
    this.tabsWithLoadedSidebar = {};
    this.targetContentScriptFiles = [];
  }

  setTabContentScriptLoaded(tabId) {
    if (tabId) this.tabsWithLoadedSidebar[tabId] = true;
  }

  isTabContentScriptLoaded(tabId) {
    return tabId ? this.tabsWithLoadedSidebar[tabId] : false;
  }

  setContentScriptFiles(files) {
    if (files) {
      this.targetContentScriptFiles.push(...files);
    }
  }

  async injectContentScriptFilesToTab(tabId) {
    if (!tabId || this.targetContentScriptFiles.length === 0)
      return Promise.reject();

    await chrome.scripting.executeScript({
      target: { tabId },
      files: this.targetContentScriptFiles,
    });

    this.setTabContentScriptLoaded(tabId);
  }
}

// === Initialize Script Manager ===
const manager = new ContentScriptManager();

// Collect content script files from manifest
const manifest = chrome.runtime.getManifest();
const scriptGroups = manifest?.content_scripts ?? [];

for (const group of scriptGroups) {
  if (group.js) manager.setContentScriptFiles(group.js);
}

// === Inject Content Scripts on Tab Activation ===
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);

  if (
    tab.url &&
    tab.url.startsWith("http") &&
    !tab.url.includes("chromewebstore.google.com")
  ) {
    const tabId = activeInfo.tabId;
    if (!manager.isTabContentScriptLoaded(tabId)) {
      await manager.injectContentScriptFilesToTab(tabId);
    }
  }
});

// === Handle Messages from Content Scripts ===
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.type) {
    case "openSidePanel":
      openSidePanel();
      break;
    case "closeSidePanel":
      closeSidePanel();
      break;
    case "reloadSidePanel":
      window.location.reload();
      break;
  }
});

// === Side Panel Configuration ===
chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });

const openSidePanel = () => {
  chrome.windows.getCurrent((window) => {
    if (window?.id) chrome.sidePanel.open({ windowId: window.id });
  });
};

const closeSidePanel = () => {
  chrome.sidePanel.setOptions({ enabled: false });
  chrome.sidePanel.setOptions({ enabled: true });
};

// === Handle Extension State Messages ===
chrome.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case "setEnabled":
      chrome.storage.local.set({ isEnabled: message.payload });
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0]?.id;
        if (tabId)
          chrome.tabs.sendMessage(tabId, {
            type: "setEnabled",
            payload: message.payload,
          });
      });
      break;

    case "setIsHistoryEnabled":
      chrome.storage.local.set({ isHistoryEnabled: message.payload });
      break;

    case "setIsFontEnlarged":
      chrome.storage.local.set({ isFontEnlarged: message.payload });
      break;

    case "setLanguage":
      chrome.storage.local.set({ language: message.payload });
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0]?.id;
        if (tabId) setLanguage(message.payload);
      });
      break;

    case "saveToHistory":
      chrome.storage.local.get(["isHistoryEnabled", "history"]).then((data) => {
        if (data.isHistoryEnabled === false) return;
        const history = [
          ...(data.history ?? []),
          { text: message.payload, date: Date.now() },
        ];
        chrome.storage.local.set({ history });
      });
      break;

    case "removeHistoryItem":
      chrome.storage.local.get(["history"]).then((data) => {
        const history = (data.history ?? []).filter(
          (item) => message.payload !== item.date
        );
        chrome.storage.local.set({ history });
      });
      break;

    case "removeHistoryDay":
      chrome.storage.local.get(["history"]).then((data) => {
        const history = (data.history ?? []).filter(
          (item) => formatDate(message.payload) !== formatDate(item.date)
        );
        chrome.storage.local.set({ history });
      });
      break;
  }
});
