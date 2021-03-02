import React, { useState, memo, useCallback } from 'react'

const Child = memo((props) => {
    console.log(props);

    return (
        <div>
            <input type="text" onChange={props.onChange} />
        </div>
    )
});

const Parent = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    // useCallback依赖count变化，如果使用[]，不依赖的话，就缓存了这个函数，
    // Child组件就不会在count变化，或者text变化时重新render了
    // 当使用了依赖[count]，text变化不会触发Child重新render，但是count变化会触发
    // Child重新render，这个就是useCallback+memo起到的子组件避免重新渲染
    const handleOnChange = useCallback((e) => {
        setText(e.target.value);
        console.log(e.target.value);
    }, [count]);

    return (
        <div>
            <div>count: {count}</div>
            <div>text: {text}</div>
            <button onClick={() => {
                setCount(count + 1)
            }}>+1</button>
            <Child onChange={handleOnChange} />
        </div>
    )
}

function App() {
    return <div><Parent /></div>
}

export default App