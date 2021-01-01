/**
 * @file father控件
 */
import React, { useState, useMemo, useCallback } from 'react';
import Child from './child';

const Father = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('rose');
    const [text, setText] = useState('')
    // useMemo暂存能力，暂存了上一次name结果，可以减少子控件的无效render，提高渲染性能
    // useMemo 是缓存值的，父控件上的count变化，不引起子控件的data变化，子控件不渲染
    const data = useMemo(() => {
        return {
            name
        };
    }, [name]);

    // useCallback暂存能力，暂存的是函数，也可以减少子控件的render，提高渲染性能
    // useCallback 是缓存函数的, 没有依赖，添加空的依赖，就是空数组！
    const onChange = useCallback((e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }, []);

    // const onChange = (e) => {
    //     console.log(e.target.value);
    //     setText(e.target.value);
    // };


    return (
        <div>
            <div>text : {text}</div>
            <div>You clicks {count}</div>
            <button onClick={() => setCount(count + 1)}>update count</button>
            <Child data={data} onChange={onChange} />
            <button onClick={() => setName(count + 1)}>update name</button>
        </div>
    );
};

export default Father;