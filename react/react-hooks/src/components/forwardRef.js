import React, { useState, useRef, forwardRef } from 'react';

function Child(props, ref) {
    const func = () => {
        console.log('我是子组件的方法');
    }
    return (
        <input type="text" ref={ref} />
    );
}

const RefChild = forwardRef(Child);

function Parent() {
    let [number, setNumber] = useState(0);
    const inputRef = useRef();
    const childRef = null;

    function getFocus() {
        inputRef.current.focus();
        inputRef.current.value = '我是焦点';
        console.log(inputRef.current);
        console.log(childRef);
    }

    function onRef(ref) {
        childRef = ref;
    }

    return (
        <>
            <RefChild ref={inputRef} onRef={onRef}/>
            <button onClick={() => setNumber(number + 1)}>+</button>
            <span>{number}</span>
            <button onClick={getFocus}>获得焦点</button>
        </>
    )
}

export default Parent;