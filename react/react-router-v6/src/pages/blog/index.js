import React from "react";
import { Outlet } from "react-router-dom";

function BlogIndex() {
  return (
    <div style={{ padding: 20 }}>
      <h2>博客：</h2>
      <div>文章</div>
      {/* 渲染任何匹配的子级 */}
      <Outlet />
    </div>
  );
}

export default BlogIndex;
