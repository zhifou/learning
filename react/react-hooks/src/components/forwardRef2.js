import React, { Component, forwardRef } from "react";

function Son(props) {
    const {grandRef} = props;
    return <div>
        <div>I am adam's.</div>
        <span ref={grandRef}>这个是要获取的元素</span>
    </div>
}

class Father extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Son grandRef={this.props.grandRef} />
        </div>
    }
}

const NewFather = forwardRef((props, ref) => <Father grandRef={ref} {...props} />);

export default class GrandFather extends Component {
    constructor(props) {
        super(props);
    }

    node=null;
    componentDidMount() {
        console.log(this.node);
    }
    render() {
        return <div>
            <NewFather ref={(node) => this.node = node} />
        </div>
    }
}