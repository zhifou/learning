import React from "react";

function App() {
    return (
        <div className="App">
            <div id="pdfDom" style={{ padding: "40px" }}>
                <div>
                    <img style={{ width: "120px" }} src={'http://www.abcstatic.com/images/jpg/2.jpg'} />
                </div>
                <div style={{ background: "#3e3872", fontSize: "16px" }}>
                    这是我的照片
                </div>
            </div>
            <button>PDF 导出</button>
        </div>
    );
}

export default App;
