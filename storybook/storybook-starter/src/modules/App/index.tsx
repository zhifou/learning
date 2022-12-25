import React from "react";
import Home from "../Home";

import "./index.css";

function App() {
    return (
        <div className="app">
            <header className="pink section">Header</header>
            <div className="left-side blue section">Left Sidebar</div>
            <main className="section coral"> Main Content</main>
            <div className="right-side yellow section">Right Sidebar</div>
            <footer className="green section">Footer</footer>
        </div>
    );
}

export default App;
