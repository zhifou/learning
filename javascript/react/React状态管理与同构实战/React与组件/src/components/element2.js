import React, { Component, Fragment } from 'react';
import EventBus from './event';

class Element2 extends Component {
    constructor() {
        super();
        // 发布消息
        setTimeout(() => {
            EventBus.publish('element2update');
        }, 2000);
    }

    render() {
        return (
            <Fragment></Fragment>
        );
    }
}

export default Element2;