import React, { Component, useRef, useEffect } from 'react';

function HOC(Component) {
    class Wrap extends React.Component {
        render() {
            const { forwardedRef, ...otherProps } = this.props;
            return <Component ref={forwardedRef} {...otherProps} />
        }
    }
    return React.forwardRef((props, ref) => <Wrap forwardedRef={ref} {...props} />);
}

class Index extends Component {
    componentDidMount() {
        console.log(666);
    }

    render() {
        return <div>hello, HOC</div>
    }
}

const HocIndex = HOC(Index);

export default () => {
    const node = useRef(null);

    useEffect(() => {
        /* 就可以跨层级，捕获到 Index 组件的实例了 */
        console.log(node.current.componentDidMount);
    }, []);

    return <div><HocIndex ref={node} /></div>
}