/**
 * @file index
 * @author zhaoyadong
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Todo from './todo';
import store from './store';

const App = (
    <Provider store={store}>
        <Todo />
    </Provider>
);

ReactDOM.render(
    App,
    document.getElementById('root')
);
