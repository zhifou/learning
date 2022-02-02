import React, { useState, useRef, forwardRef } from 'react';

function Child(props, ref) {
    return (
        <input type="text" ref={ref} />
    );
}

const RefChild = forwardRef(Child);

function Parent() {
    let [number, setNumber] = useState(0);
    const inputRef = useRef();

    function getFocus() {
        inputRef.current.focus();
        inputRef.current.value = '我是焦点';
    }

    return (
        <>
            <RefChild ref={inputRef} />
            <button onClick={() => setNumber(number + 1)}>+</button>
            <span>{number}</span>
            <button onClick={getFocus}>获得焦点</button>
        </>
    )
}

export default Parent;