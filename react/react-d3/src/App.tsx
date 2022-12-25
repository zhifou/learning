import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/container/home/Index";
import About from "@/container/about/Index";
import D3 from "@/container/home/D3";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="d3" element={<D3 />} />
            </Routes>
        </div>
    );
}

export default App;
