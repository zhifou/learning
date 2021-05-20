import React, {memo, useState, useEffect, useCallback} from 'react'

const Children = memo((props) => {
    console.log('子组件更新', Math.random())
    useEffect(() => {
        props.getInfo('子组件')
    }, [])
    return <div>我是子组件</div>
})

const UseCallback = ({id}) => {
    const [number, setNumber] = useState(1);
    const getInfo = useCallback(
        (sonName) => {
            console.log(sonName)
        },
        [id],
    )
    return <div>
        <button onClick={() => setNumber(number + 1)}>增加</button>
        <Children getInfo={getInfo} />
    </div>
}

export default UseCallback;