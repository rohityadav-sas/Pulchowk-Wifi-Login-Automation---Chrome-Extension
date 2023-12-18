chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
    if (data.url === 'https://pcampus.edu.np/login-successful/') {
        chrome.storage.local.remove('opened');
        chrome.runtime.sendMessage({ closeTab: 'yes' });
    }

    if (data.url.includes('https://10.100.1.1:8090/')) {
        chrome.storage.local.get(null, (result) => {
            if (!Object.keys(result).includes('opened')) {
                chrome.storage.local.set({ opened: false });
            }
        })
        chrome.storage.local.get(null, async (result) => {
            if (!result.opened) {
                let { uname, pword } = await getLocalData();
                if (uname !== undefined && pword !== undefined) {
                    username.value = uname;
                    password.value = pword;
                }
                loginbutton.click();
                chrome.storage.local.set({ opened: true });
            }
            chrome.runtime.sendMessage({ remove: 'yes' });
        })
    }
})

getLocalData = () => {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(null, (userData) => {
            resolve(userData);
        })
    })
}
