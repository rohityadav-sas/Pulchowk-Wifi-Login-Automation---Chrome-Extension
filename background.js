chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    chrome.tabs.sendMessage(tabId, { url: tab.url });
})

chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
    if (data.closeTab === 'yes') {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.remove(tabs[0].id);
        });
    }
    if (data.remove === 'yes') {
        setTimeout(() => {
            chrome.storage.local.remove("opened");
        }, 5000);
    }
})
