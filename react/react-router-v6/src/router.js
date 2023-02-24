import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";
import NotFound from "./pages/404";
import BlogIndex from "./pages/blog/index";
import BlogList from "./pages/blog/list";
import Blog from "./pages/blog/blog";
import BlogOutlet from "./pages/blog/outlet";

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    {
        path: "/",
        element: <Home />,
        auth: false,
    },
    {
        path: "/login",
        element: <Login />,
        auth: false,
    },
    {
        path: "/about",
        element: <About />,
        auth: true,
    },
    {
        path: "/blogs",
        element: <BlogOutlet />,
        auth: true,
        children: [{
            path: "list",
            element: <BlogList />,
            auth: true,
        }, {
            path: ":slug",
            element: <Blog />,
            auth: true,
        }, {
            path: "",
            element: <BlogIndex />,
            auth: true,
        }]
    },
    {
        path: "/404",
        element: <NotFound />,
    },
];
