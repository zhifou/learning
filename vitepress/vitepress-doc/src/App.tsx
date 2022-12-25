import Home from "./docs/index.mdx";
import { ThemeProvider } from "theme-ui";
import { makeTheme } from "@theme-ui/css/utils";
import Prism from "@theme-ui/prism";
import pre from "@theme-ui/prism/presets/dracula.json";

const theme = makeTheme({
    code: {
        fontFamily: "monospace",
        fontSize: 1,
    },
    pre: {
        p: 3,
        fontSize: 3,
        lineHeight: "body",
        ...pre,
    },
    colors: {
        text: "#383838",
        primary: "#a862ea",
    },
    styles: {
        body: {
            color: "text",
            fontSize: 15,
            lineHeight: "30px",
            wordBreak: "break-word",
        },
        h2: {
            fontSize: "1.2em",
            margin: "24px 0 12px",
            color: "primary",
        },
        ul: {
            pl: "2em",
        },
        li: {
            pl: "0.2em",
            "::marker": {
                color: "primary",
            },
        },
    },
});

const components = {
    pre: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    code: Prism,
};

function App() {
    return (
        <ThemeProvider theme={theme} components={components}>
            <div className="App">
                <Home />
            </div>
        </ThemeProvider>
    );
}

export default App;
