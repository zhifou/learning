import React, { VFC, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import Home from "@/modules/Home";
// import About from "@/modules/About";
// import NotFound from "@/modules/NotFound";
import logo from "./logo.svg";
const Home = lazy(() => import("@/modules/Home"));
const About = lazy(() => import("@/modules/About"));
const NotFound = lazy(() => import("@/modules/NotFound"));

import "./App.css";

const App: VFC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>

            <BrowserRouter>
                <nav style={{ margin: 10 }}>
                    <Link to="/" style={{ padding: 5 }}>
                        Home
                    </Link>
                    <Link to="/about" style={{ padding: 5 }}>
                        About
                    </Link>
                    <Link to="/blogs" style={{ padding: 5 }}>
                        Blogs
                    </Link>
                </nav>
                <Suspense fallback={null}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="*" component={NotFound} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </div>
    );
};

export default App;
