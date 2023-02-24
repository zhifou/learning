import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootContainer = ReactDOM.createRoot(document.getElementById("root"));
rootContainer.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
