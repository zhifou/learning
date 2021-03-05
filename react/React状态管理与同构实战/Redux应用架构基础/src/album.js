/**
 * @file album页
 */
/* eslint-disable */
import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props.match.params);
        return (
            <div className="App">
                <div>这个是album页，这个是带参数的详情</div>
            </div>
        );
    }
}

export default App;
