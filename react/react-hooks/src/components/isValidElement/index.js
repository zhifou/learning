/**
 * 这个方法可以用来检测是否为react element元素,接受待验证对象，返回true或者false。这个api可能对于业务组件的开发，作用不大，因为对于组件内部状态，都是已知的，我们根本就不需要去验证，是否是react element 元素。
但是，对于一起公共组件或是开源库，isValidElement就很有作用了。
 */
import React from 'react'

const Text = () => <div>hello,world</div>

class WrapComponent extends React.Component {
    constructor(props) {
        super(props)
        this.newChidren = this.props.children.filter(item => React.isValidElement(item))
    }
    render() {
        return this.newChidren
    }
}

function Index() {
    return <div style={{ marginTop: '50px' }} >
        <WrapComponent>
            <Text />
            <div> my name is alien </div>
            Let's learn react together!
        </WrapComponent>
    </div>
}


export default Index;