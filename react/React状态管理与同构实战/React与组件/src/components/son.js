import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

class Son extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: '222222',
            title: '33333'
        }
    }

    // 这个静态方法，每次props变化或者是state变化都会执行，所以实际开发中谨慎使用
    static getDerivedStateFromProps(props) {
        console.log('getDerivedStateFromProps--', props);
        return props;
    }

    render() {
        console.log('render--', this.state);
        return (
            <Fragment>
                <div>{this.state.cid}</div>
                <div>{this.state.title}</div>
            </Fragment>
        );
    }

    componentDidMount() {
        fetch('http://www.babubaba.com/img/avatar.jpg').then((options) => {
            console.log('fetch image then -', options);
        });
    }

    // DOM更新之前调用，这个方法的返回值，将作为参数传递给componentDidUpdate方法的第三个参数
    getSnapshotBeforeUpdate() {
        this.setState({
            name: '54321'
        });
        return {a: 123};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps, prevState, snapshot);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount--');
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