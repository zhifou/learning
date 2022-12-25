import React from "react";
import ReactClient from "react-dom/client";
import App from "./modules/App";

const rootContainer = ReactClient.createRoot(
    document.getElementById("root") as HTMLElement
);
rootContainer.render(<App />);
