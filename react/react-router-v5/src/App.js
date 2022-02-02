import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Layout from './layouts';
import AppLayout from './layouts/App';
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";

function App() {
  return (
    
    <Router>
      <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Redirect from="/*" to="/about" />
        </Switch>
      </Layout>
    </Router>
    
  );
}

export default App;
