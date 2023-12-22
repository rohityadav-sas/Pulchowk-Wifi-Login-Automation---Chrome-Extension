chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  if (data.url.includes("successful")) {
    chrome.runtime.sendMessage({ closeTab: "yes" });
  }

  if (data.url.includes("https://10.100.1.1:8090/")) {
    (async () => {
      let { uname, pword } = await getLocalData();
      if (uname && pword) {
        username.value = uname;
        password.value = pword;
      }
      loginbutton.click();
    })();
  }
});

getLocalData = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(null, (userData) => {
      resolve(userData);
    });
  });
};