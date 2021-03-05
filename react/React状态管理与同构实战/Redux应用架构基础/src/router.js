import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Channel from './channel';
import List from './list';
import Detail from './detail';
import Album from './album';

function AppRouter() {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/">列表</Link></li>
                <li><Link to="/detail/">详情页</Link></li>
            </ul>
            <Switch>
                <Route path="/" exact component={Channel} />
                <Route path="/list/" component={List} />
                <Route path="/detail/" component={Detail} >
                    <Route path="/detail/" exact component={Detail} />
                    <Route path="/detail/:id" exact component={Album} />
                </Route>
            </Switch>
        </Router>
    );
}
export default AppRouter;