import React, { VFC } from "react";
import "./index.less";

const NotFound: VFC = () => (
    <div className="root">
        <h1>
            <div className="greeting">
            NotFound</div>
        </h1>
        <p>
            修改 <code>src/modules/Welcome/index.tsx</code> 并保存,开始测试
        </p>
        <p>
            在开始开发前，请确保你阅读了
            ，如有任何问题，可通过如流搜索 1508631 加入群聊。
        </p>
    </div>
);

export default NotFound;
