import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Fiber from "./pages/fiber";

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
                <Link to="/fiber" style={{ padding: 5 }}>
                    Fiber
                </Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/fiber" element={<Fiber />} />
            </Routes>
        </Router>
    );
}

export default App;
