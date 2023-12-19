chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  if (data.url === "https://pcampus.edu.np/login-successful/") {
    chrome.runtime.sendMessage({ closeTab: "yes" });
  }

  if (data.url.includes("https://10.100.1.1:8090/")) {
    chrome.storage.local.get(null, async (result) => {
      let { uname, pword } = await getLocalData();
      if (uname !== undefined && pword !== undefined) {
        username.value = uname;
        password.value = pword;
      }
      loginbutton.click();
    });
  }
});

getLocalData = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(null, (userData) => {
      resolve(userData);
    });
  });
};