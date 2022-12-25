chrome.storage.sync.get("history", ({ history }) => {
    // console.log("history--->", history);
    history.unshift({
        title: document.title,
        url: location.href,
        time: new Date().toLocaleString(),
    });
    chrome.storage.sync.set({
        history,
    });
});
