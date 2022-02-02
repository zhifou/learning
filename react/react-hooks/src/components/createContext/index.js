import React from 'react';

const MyContext = React.createContext();

function ComponentB() {
    /* 用 Consumer 订阅， 来自 Provider 中 value 的改变 */
    return <MyContext.Consumer>
        {(value) => <ComponentA {...value} />}
    </MyContext.Consumer>
}

function ComponentA(props) {
    const {name, message} = props;
    return <div>
        <div>姓名：{name}</div>
        <div>对大家说：{message}</div>
    </div>
}

const Index = (props) => {
    const [value, ] = React.useState({
        name: 'martin',
        message: 'hello martin, let us learning react'
    });
    return <div>
        <MyContext.Provider value={value}>
            <ComponentB />
        </MyContext.Provider>
    </div>
}

export default Index;