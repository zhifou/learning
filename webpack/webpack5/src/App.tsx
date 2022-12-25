import React from "react";
import console from "./utils/console";
import Logo from "./logo.png";
import LogoSmall from "./logo-small.png";
import LogoSmallSvg from "./logo-small.svg";
import DeleteOutlined from "./DeleteOutlined.svg";
import Vcg1 from "./vcg1.webp";
import Vcg2 from "./vcg2.webp";
// import appToml from "./app.toml";
import appYaml from "./app.yaml";
import json5Yaml from "./app.json5";
import loaderHtml from "./loader.html";
import loaderText from "./loader.txt";

import styles from "./App.module.less";

let appToml;
if (process.env.PLATFORM === "qa") {
    appToml = require("./app.toml");
} else {
    appToml = require("./app2.toml");
}

function App() {
    console.log(process.env.PLATFORM);
    console.log("toml::", appToml);
    console.log("yaml::", appYaml);
    console.log("json5::", json5Yaml);
    console.log(loaderHtml);
    console.log(loaderText);
    let a = { color: "blue" };
    console.red("这丰富的是", a);
    console.red("hello red", a);
    console.log(`%c${JSON.stringify(a)}`, "color: blue;", a);

    return (
        <div className={styles.App}>
            <div>
                <div>测试myLoader</div>
                <div>
                    <span>3333word - word - wordbreak</span>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: loaderHtml }}></div>
            <div id="pdfDom" style={{ padding: "40px" }}>
                <div>
                    <img
                        style={{ width: "120px" }}
                        src={"http://www.abcstatic.com/images/jpg/2.jpg"}
                    />
                </div>
                <div style={{ background: "#3e3872", fontSize: "16px" }}>
                    <img className={styles.logo} src={Logo} />
                    <img className={styles.logoSmall} src={LogoSmall} />
                    {/* <img className={styles.logo} src={LogoSmallSvg} /> */}
                    <LogoSmallSvg width={96} height={96} />
                    <DeleteOutlined
                        width={128}
                        height={128}
                        className={styles.logoSvg}
                    />
                </div>
                <div style={{ background: "#3e387f", fontSize: "16px" }}>
                    <img className={styles.logoBanner} src={Vcg1} />
                    <img className={styles.logoBanner} src={Vcg2} />
                </div>
            </div>
            <div>{JSON.stringify(appToml)}</div>
            <div>{JSON.stringify(appYaml)}</div>
            <div>{JSON.stringify(json5Yaml)}</div>
        </div>
    );
}

export default App;
