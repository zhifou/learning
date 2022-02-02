import React from 'react';

export default class Test extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log('--componentDidMount--')
    }
    render(){
        return <div>
            <img src={'http://www.abcstatic.com/images/png/head4_640x640.png'}  style={{width: '320px', height: '320px'}} />
        </div>
    }
}
