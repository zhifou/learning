import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/container/home";
import About from "@/container/about";
import Icon from "@/container/icon";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="about/*" element={<About />} />
                <Route path="icon/*" element={<Icon />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
