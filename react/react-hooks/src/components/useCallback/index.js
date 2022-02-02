import React, {memo, useState, useEffect, useCallback} from 'react'

const Children = memo((props) => {
    console.log('子组件更新', Math.random())
    useEffect(() => {
        props.onClick('子组件')
    }, [])
    return <div>我是子组件<button onClick={props.onClick}>点击</button></div>
})

const UseCallback = (props) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState(1);
    const onChildClick = useCallback(
        (sonName) => {
            console.log(sonName, Math.random())
        },
        [],
    )
    return <div>
        <button onClick={() => setNumber(number + 1)}>增加</button>
        <button onClick={() => setName(Math.random())}>修改name</button>
        <span>{number}</span>
        <Children onClick={onChildClick} name={name} />
    </div>
}

export default UseCallback;