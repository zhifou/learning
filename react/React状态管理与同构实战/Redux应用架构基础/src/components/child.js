import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

class Child extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static contextTypes = {
        message: PropTypes.string
    };

    render() {
        return (
            <Fragment>
                <div>{this.context.message}</div>
            </Fragment>
        );
    }
}

export default Child;