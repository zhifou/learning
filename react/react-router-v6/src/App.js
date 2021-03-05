import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import BlogIndex from "./pages/blog";
import BlogList from "./pages/blog/list";
import Blog from "./pages/blog/blog";

function App() {
  return (
    <Router>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<BlogIndex />}>
          <Route path="/" element={<BlogList />} />
          <Route path="/:slug" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
