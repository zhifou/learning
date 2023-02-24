import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Fiber from "./pages/fiber";
import Three from "./pages/three";
import Storm from "./pages/storm";

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
                <Link to="/three" style={{ padding: 5 }}>
                    Threejs
                </Link>
                <Link to="/storm" style={{ padding: 5 }}>
                    Storm
                </Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/fiber" element={<Fiber />} />
                <Route path="/three" element={<Three />} />
                <Route path="/storm" element={<Storm />} />
            </Routes>
        </Router>
    );
}

export default App;
