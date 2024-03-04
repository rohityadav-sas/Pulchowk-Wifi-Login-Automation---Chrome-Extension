chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "editInfo",
    title: "Edit Data",
    contexts: ["browser_action"]
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "editInfo") {
    chrome.tabs.create({ url: 'Option/option.html' })
  }
});

chrome.tabs.onUpdated.addListener(listener);

function listener(tabId, changeInfo, tab) {
  let status = changeInfo.status;
  chrome.tabs.sendMessage(tabId, { url: tab.url, status: status });
}

chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  if (data.closeTab === 'yes') {
    chrome.tabs.remove(sender.tab.id);
  }
  if (data.redirect && data.redirect === "yes") {
    login();
  }
  if (data.removePopup && data.removePopup === 'yes') {
    chrome.browserAction.setPopup({ popup: '' })
  }
});

chrome.storage.local.get(null, (result) => {
  if (!result.uname && !result.pword) {
    chrome.browserAction.setPopup({ popup: 'Popup/popup.html' });
  }
})

chrome.browserAction.onClicked.addListener((tab) => {
  login();
});

function login() {
  chrome.tabs.create({ url: "https://10.100.1.1:8090/" });
}
