/**
 * @file App页面
 * @author zhaoyadong
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Todo from './components/todo';
import Father from './components/father';
import WindowSize from './components/windowSize';
import Reducer from './components/context';
import Callback from './components/callback';

const App = () => {
    return (
        <Router>
        <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
            Todo
          </Link>
          <Link to="/father" style={{ padding: 5 }}>
            Father
          </Link>
          <Link to="/windowsize" style={{ padding: 5 }}>
            WindowSize
          </Link>
          <Link to="/reducer" style={{ padding: 5 }}>
            Reducer
          </Link>
          <Link to="/callback" style={{ padding: 5 }}>
            Callback
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/father" element={<Father />} />
          <Route path="/windowsize" element={<WindowSize />} />
          <Route path="/reducer" element={<Reducer />} />
          <Route path="/callback" element={<Callback />} />
        </Routes>
      </Router>
    )
};

export default App;