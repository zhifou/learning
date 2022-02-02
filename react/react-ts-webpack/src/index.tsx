import React from 'react';
import ReactDOM from 'react-dom';

import App from './modules/App';
// import '../styles';

function render() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

render();
