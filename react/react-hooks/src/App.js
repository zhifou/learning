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
import Callback1 from './components/callback1';
import ForwardRef from './components/forwardRef';
import ForwardRef2 from './components/forwardRef2';
import ForwardRefHoc from './components/forwardRefHoc';
import UseImperativeHandle from './components/useImperativeHandle';
import UseSlider from './components/useSlider';
import UseLocalStorage from './components/useLocalStorage';
import UseContext from './components/useContext/myPage';
import LazyComponent from './components/lazy';
import CloneElement from './components/cloneElement';
import CreateContext from './components/createContext';
import CreateRef from './components/createRef';
import IsValidElement from './components/isValidElement';
import UseMemo from './components/useMemo';
import UseCallback from './components/useCallback';
import CreatePortal from './components/createPortal';
import FlushSync from './components/flushSync';
import UseSSR from './components/useSSR';
import UseSelector from './components/useSelector';

const App = () => {
  return (
    <Router>
      <nav style={{ margin: 10, display: 'flex', flexWrap: 'wrap' }}>
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
        <Link to="/callback-question" style={{ padding: 5 }}>
          Callback问题
          </Link>
        <Link to="/forwardRef" style={{ padding: 5 }}>
          ForwardRef
          </Link>
        <Link to="/forwardRef2" style={{ padding: 5 }}>
          ForwardRef2
          </Link>
        <Link to="/forwardRefHoc" style={{ padding: 5 }}>
          ForwardRefHoc
          </Link>
        <Link to="/useImperativeHandle" style={{ padding: 5 }}>
          UseImperativeHandle
          </Link>
        <Link to="/useSlider" style={{ padding: 5 }}>
          UseSlider
          </Link>
        <Link to="/useLocalStorage" style={{ padding: 5 }}>
          UseLocalStorage
          </Link>
        <Link to="/useContext" style={{ padding: 5 }}>
          UseContext
          </Link>
        <Link to="/lazy" style={{ padding: 5 }}>
          LazyComponent
          </Link>
        <Link to="/cloneElement" style={{ padding: 5 }}>
          CloneElement
          </Link>
        <Link to="/createContext" style={{ padding: 5 }}>
          CreateContext
          </Link>
        <Link to="/createRef" style={{ padding: 5 }}>
          CreateRef
          </Link>
        <Link to="/isValidElement" style={{ padding: 5 }}>
          IsValidElement
          </Link>
        <Link to="/useMemo" style={{ padding: 5 }}>
          UseMemo
          </Link>
        <Link to="/useCallback" style={{ padding: 5 }}>
          UseCallback
          </Link>
        <Link to="/createPortal" style={{ padding: 5 }}>
          CreatePortal
          </Link>
        <Link to="/flushSync" style={{ padding: 5 }}>
          FlushSync
          </Link>
        <Link to="/useSSR" style={{ padding: 5 }}>
          useSSR
        </Link>
        <Link to="/useSelector" style={{ padding: 5 }}>
          useSelector
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/father" element={<Father />} />
        <Route path="/windowsize" element={<WindowSize />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/callback-question" element={<Callback1 />} />
        <Route path="/forwardRefHoc" element={<ForwardRefHoc />} />
        <Route path="/forwardRef2" element={<ForwardRef2 />} />
        <Route path="/forwardRef" element={<ForwardRef />} />
        <Route path="/useImperativeHandle" element={<UseImperativeHandle />} />
        <Route path="/useSlider" element={<UseSlider />} />
        <Route path="/useLocalStorage" element={<UseLocalStorage />} />
        <Route path="/useContext" element={<UseContext />} />
        <Route path="/lazy" element={<LazyComponent />} />
        <Route path="/cloneElement" element={<CloneElement />} />
        <Route path="/createContext" element={<CreateContext />} />
        <Route path="/createRef" element={<CreateRef />} />
        <Route path="/isValidElement" element={<IsValidElement />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/createPortal" element={<CreatePortal />} />
        <Route path="/flushSync" element={<FlushSync />} />
        <Route path="/useSSR" element={<UseSSR />} />
        <Route path="/useSelector" element={<UseSelector />} />
      </Routes>
    </Router>
  )
};

export default App;