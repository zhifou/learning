chrome.runtime.onInstalled.addListener(() => {
    console.log('后台脚本运行成功');
    chrome.storage.sync.set({ history: [] });
});