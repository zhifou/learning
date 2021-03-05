import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

class Son extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Fragment>
                <div>{this.props.cid}</div>
                <div>{this.props.title}</div>
            </Fragment>
        );
    }
}

Son.propTypes = {
    cid: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    removeTodo: PropTypes.func.isRequired
}

Son.defaultProps = {
    cid: 0,
    title: '',
    removeTodo: () => {}
}

export default Son;