import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Channel from "./channel";
import List from "./list";
import Detail from "./detail";

function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/">列表</Link></li>
                <li><Link to="/detail/">详情页</Link></li>
            </ul>
            <Route path="/" exact component={Channel} />
            <Route path="/list/" component={List} />
            <Route path="/detail/" component={Detail} />
        </Router>
    );
}
export default AppRouter;