/**
 * @file todo 页面
 * @author zhaoyadong
 */
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

const Todo = () => {
    // 采用下面的写法，someExpensiveComputation函数只会在初始化渲染中被调用，后续渲染时会被忽略
    // const initialState = someExpensiveComputation(props); 
    // const [state, setState] = useState(initialState);
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    // 就是相当于全局作用域，一处被修改，其他地方全更新
    const inputRef = useRef(null);
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    // 相当于 componentDidMount 和 componentDidUpdate，第二个参数不加
    // 和useState一样，可以多次使用
    useEffect(() => {
        document.title = `您还有${list.length}件事情待处理`;
    });

    // useEffect只在第一次使用componentDidMount，方法：在第二个参数加上[]
    useEffect(() => {
        const event = '今天第一件事，制定计划';
        setList([event]);
    }, []);

    // useEffect 在willUnMount生命周期里做的事情，可以在effect的return里面实现
    useEffect(() => {
        const users = 'martin';
        return () => {
            console.log('我是在willUnMount时执行的', users);
        }
    }, []);

    // 指定某个变量更新了，useEffect才执行，方法：在第二个参数加上[变量名]
    useEffect(() => {
        console.log(list.includes(inputValue));
    }, [inputValue, list]);

    // 使用useRef全局变量
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('timer...count:', countRef.current);
            setCount(++countRef.current);
        }, 10000);
        return () => {
            console.log('clearInterval');
            clearInterval(timer);
        }
    }, []);

    // DOM渲染前执行
    useLayoutEffect(() => {
        console.log('useLayoutEffect::', inputValue);
    }, []);

    const onInputChange = (e) => {
        // console.log(e, e.target.value);
        // setInputValue(e.target.value);
        setInputValue(inputRef.current.value);
    };

    const onAddClick = () => {
        list.push(inputValue);
        setList(list);
        setInputValue('');
    };

    const onDeleteClick = (item) => {
        const newList = list.filter(task => task !== item);
        setList(newList);
    };

    return (
        <div style={{ margin: '10px', width: '600px' }}>
            <h1>React Hook TodoList({list.length})</h1>
            <div>
                <input type="text" value={inputValue} onChange={onInputChange} ref={inputRef}/>
                <button onClick={onAddClick}>添加</button>
            </div>
            <div>
                {
                    list.map((item, index) => (
                        <div key={index}>
                            <span>[{++index}] - </span>
                            <span style={inputValue === item ? {color: '#d63031'} : {}}>{item}</span>
                            <span style={{padding: '0 10px', color: '#0052CD', cursor: 'pointer'}} onClick={() => onDeleteClick(item)}>删除</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

export default Todo;