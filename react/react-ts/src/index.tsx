import * as React from "react";
import { render } from "react-dom";
import { AppContextInterface, AppContextProvider } from "./AppContext";
import { PostInfo } from "./PostInfo";

const sampleAppContext: AppContextInterface = {
    name: "Using React Context in a Typescript App",
    author: "thehappybug",
    url: "http://www.example.com",
};

const Post = () => (
    <div>
        <h2>Post info</h2>
        <PostInfo />
    </div>
);

export const App = () => (
    <AppContextProvider value={sampleAppContext}>
        <Post />
    </AppContextProvider>
);

render(<App />, document.getElementById("root"));
