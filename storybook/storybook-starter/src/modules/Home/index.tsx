import React, { FC } from "react";
import BaseInfo from "src/components/BasicInfo";

import "./index.css";

const Home: FC = () => {
    const onClick = () => {
        console.log("icon::", Math.random());
    };

    return (
        <div className="main">
            <div className="right-panel"></div>
            <div className="left-panel"></div>
            <header>
                <div className="header">
                    <div className="header-logo">logo</div>
                    <div className="header-recently">个人文件</div>
                    <div className="header-name">名称</div>
                    <div className="header-scale">缩放比</div>
                    <div className="header-operator">操作区</div>
                    <div className="header-share">分享区</div>
                </div>
            </header>
            <div>
                <BaseInfo />
            </div>
        </div>
    );
};

export default Home;
