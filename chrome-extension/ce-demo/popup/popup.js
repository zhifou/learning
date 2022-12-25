chrome.storage.sync.get("history", ({ history }) => {
    const contentHTML =
        history.length === 0
            ? "暂无浏览记录～"
            : history
                  .map((record) => {
                      return `
            <div class="item-box">
                <div class="item-box_time">${record.time}</div>
                <a class="item-box_text" href="${record.url}">${record.title}</a>
            </div>
        `;
        }).join("");
    document.querySelector("#container").innerHTML = contentHTML;
});
