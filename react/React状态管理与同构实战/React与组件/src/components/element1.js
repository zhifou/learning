import React, { Component, Fragment } from 'react';
import EventBus from './event';

class Element1 extends Component {
    constructor() {
        super();
        // 订阅消息
        EventBus.subscribe('element2update', () => {
            console.log('element2 update.');
        });
    }

    render() {
        return (
            <Fragment></Fragment>
        );
    }
}

export default Element1;