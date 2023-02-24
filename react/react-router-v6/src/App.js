import React from "react";
import BeforeEnter from "./beforeEnter";
import router from "./router";

function App() {
    return <BeforeEnter routers={router} />;
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import BeforeEnter from "./beforeEnter";
// import Home from "./pages/home";
// import About from "./pages/about";
// import NotFound from "./pages/404";
// import BlogIndex from "./pages/blog/index";
// import BlogList from "./pages/blog/list";
// import Blog from "./pages/blog/blog";
// import BlogOutlet from "./pages/blog/outlet";

// function App() {
//     return (
//         <Router>
//             <nav style={{ margin: 10 }}>
//                 <Link to="/" style={{ padding: 5 }}>
//                     Home
//                 </Link>
//                 <Link to="/about" style={{ padding: 5 }}>
//                     About
//                 </Link>
//                 <Link to="/blogs" style={{ padding: 5 }}>
//                     Blogs
//                 </Link>
//             </nav>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="about" element={<About />} />
//                 <Route path="blogs" element={<BlogOutlet />}>
//                     <Route path="list" element={<BlogList />}/>
//                     <Route path=":slug" element={<Blog />} />
//                     <Route path="" element={<BlogIndex />} />
//                 </Route>
//                 <Route path="*" element={<NotFound />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;
