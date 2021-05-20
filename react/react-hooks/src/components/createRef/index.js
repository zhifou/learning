/**
 * createRef可以创建一个 ref 元素，附加在react元素上。
 */
import React from 'react'

class Index extends React.Component{
    constructor(props){
        super(props)
        this.node = React.createRef()
    }
    componentDidMount(){
        console.log(this.node)
    }
    render(){
        return <div ref={this.node} > my name is alien </div>
    }
}

export default Index;