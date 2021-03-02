/**
 * @file 列表页
 */
/* eslint-disable */
import React, { Component } from 'react';
import { store } from './store/index';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        store.dispatch(this.fetchFloorPrice());
    }

    fetchFloorPrice() {
        return function (dispatch) {
            fetch('https://flight.baidu.com/flight/floor_price?d_city=SHA&a_city=BJS')
            .then(res => res.json())
            .then(response => {
                console.log(response);
                dispatch({
                    type: 'GET_PAGE_LIST',
                    data: response
                })
            });
        };

    }

    render() {

        return (
            <div className="App">
                <div>这个是列表页</div>
            </div>
        );
    }
}

export default App;
