import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import NotFound from "./pages/404";

function App() {
    return (
        <Router>
            <nav style={{ margin: 10 }}>
                <Link to="/" style={{ padding: 5 }}>
                    Home
                </Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
