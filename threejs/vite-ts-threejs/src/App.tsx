import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/404";
import Machine from "./pages/machine";

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
                <Link to="/machine" style={{ padding: 5 }}>
                    Machine
                </Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="machine" element={<Machine />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
