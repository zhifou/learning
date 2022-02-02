/**
 * @file App UI
 */

import React from 'react';
import { Link } from "react-router-dom";


function Index(props) {

    return (
        <div className="layout">
            <nav style={{ margin: 10 }}>
                <Link to="/" style={{ padding: 5 }}>
                    Home
                </Link>
                <Link to="/about" style={{ padding: 5 }}>
                    About
                </Link>
                <Link to="/blog" style={{ padding: 5 }}>
                    Blog
                </Link>
                <Link to="/abc" style={{ padding: 5 }}>
                    Redirect
                </Link>
            </nav>
            {props.children}
        </div>
    );
}

export default Index;
