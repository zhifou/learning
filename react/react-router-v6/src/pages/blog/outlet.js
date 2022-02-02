import React from "react";
import { Outlet } from "react-router-dom";

function BlogOutlet() {
    return (
        <div style={{ padding: 20 }}>
            <h1>我是Outlet，负责页面公共区域展示，下面是子组件显示内容：</h1>
            {/* 渲染任何匹配的子级 */}
            <Outlet />
        </div>
    );
}

export default BlogOutlet;
