chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.tabs.sendMessage(tabId, { url: tab.url });
  }
});

chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  if (data.closeTab === "yes") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.remove(tabs[0].id);
    });
  }
  if (data.redirect === "yes") {
    chrome.tabs.create({ url: "https://10.100.1.1:8090/" });
  }
});
