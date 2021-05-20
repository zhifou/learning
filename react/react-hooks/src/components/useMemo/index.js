/**
 * useMemo 
 * useMemo接受两个参数，第一个参数是一个函数，返回值用于产生保存值。 第二个参数是一个数组，作为dep依赖项，数组里面的依赖项发生变化，重新执行第一个函数，产生新的值。
应用场景： 
1 缓存一些值，避免重新执行上下文
2 减少不必要的dom循环
3 减少子组件渲染
 */
import React, {memo, useMemo, useState} from 'react'

// 1 缓存一些值，避免重新执行上下文
// const number = useMemo(() => {
//     /** ....大量的逻辑运算 **/
//     return number
// }, [props.number]) // 只有 props.number 改变的时候，重新计算number的值。

// 2 减少不必要的dom循环
/* 用 useMemo包裹的list可以限定当且仅当list改变的时候才更新此list，这样就可以避免selectList重新循环 */
// {useMemo(() => (
//     <div>{
//         selectList.map((i, v) => (
//             <span
//                 className={style.listSpan}
//                 key={v} >
//                 {i.patentName} 
//             </span>
//         ))}
//     </div>
// ), [selectList])}

// 3 减少子组件渲染
/* 只有当props中，list列表改变的时候，子组件才渲染 */
// const  goodListChild = useMemo(()=> <GoodList list={ props.list } /> ,[ props.list ])

const Child = memo((props) => {
    console.log('Child-render', Math.random())
    return <div>
        <div>名字：{props.name}</div>
        <div>年龄：{props.age}</div>
    </div>
})

const Father = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(18)
    const [sex, setSex] = useState('male')

    const ChildComp = useMemo(() => <Child {...{
        name,
        age
    }} />, [name])

    console.log('Father-render', Math.random())
    
    return <div>
        {/* <Child {...{
            name,
            age
        }} /> */}
        {ChildComp}
        <input type="button" value="changeName" onClick={() => setName(Math.random() + '')} />
        <input type="button" value="changeAge" onClick={() => setAge(age + 1)} />
        <input type="button" value="changeSex" onClick={() => setSex('male' + sex)} />
    <div>{sex}</div>
    </div>
}

export default Father