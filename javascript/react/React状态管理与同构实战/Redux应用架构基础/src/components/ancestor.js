import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Child from './child';

class Ancestor extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static childContextTypes = {
        message: PropTypes.string
    };

    getChildContext() {
        return {message: 'packjs'};
    }

    render() {
        return (
            <Fragment>
                <div><Child></Child></div>
            </Fragment>
        );
    }
}

export default Ancestor;