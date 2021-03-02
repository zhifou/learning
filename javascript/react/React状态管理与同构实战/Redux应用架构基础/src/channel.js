/**
 * @file 详情页
 */
/* eslint-disable */
import React, { Component } from 'react';
import Parent from './components/parent';
import Ancestor from './components/ancestor';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [{
                cid: 1,
                title: 'this is item 1'
            }, {
                cid: 2,
                title: 'this is item 2'
            }, {
                cid: 3,
                title: 'this is item 3'
            }, {
                cid: 4,
                title: 'this is item 4'
            }, {
                cid: 5,
                title: 'this is item 5'
            }]
        }
    }

    render() {

        return (
            <div className="App">
                <div>这个是频道页</div>
                <Parent todoList={this.state.todos}></Parent>
                <Ancestor todoList={this.state.todos}></Ancestor>
            </div>
        );
    }
}

export default App;
