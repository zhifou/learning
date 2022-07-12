import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/container/home/Index";
import About from "@/container/about/Index";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
