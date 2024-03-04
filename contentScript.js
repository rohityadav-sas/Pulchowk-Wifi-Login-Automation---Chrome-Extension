chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
  if (data.url.includes("https://10.100.1.1:8090/") && data.status === "complete") {
    (async () => {
      let { uname, pword } = await getLocalData();
      if (uname && pword) {
        username.value = uname;
        password.value = pword;
      }
      loginbutton.click();
      let loginFailed = document.getElementById('statusmessage');
      setTimeout(async () => {
        if (loginFailed.innerText.includes("maximum")) {
          let { uname2, pword2 } = await getLocalData();
          username.value = uname2;
          password.value = pword2;
          loginbutton.click();
        };
      }, 1000);
    })();
  }
  else if (data.status === "loading" || data.status === undefined) {
    if (loginbutton.innerText.includes("logout")) {
      chrome.runtime.sendMessage({ closeTab: 'yes' });
    }
  }
});

getLocalData = () => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(null, (userData) => {
      resolve(userData);
    });
  });
};