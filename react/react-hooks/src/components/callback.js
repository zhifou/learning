/**
 * @file form
 */
import React, { useState, useRef, useLayoutEffect, useCallback } from 'react';

function Form() {
    const [text, updateText] = useState('');
    const textRef = useRef();

    useLayoutEffect(() => {
        textRef.current = text; // 将 text 写入到 ref
        console.log('useLayoutEffect::', textRef);
    });

    const handleSubmit = useCallback(() => {
        const currentText = textRef.current; // 从 ref 中读取 text
        console.log('handleSubmit::', currentText);
    }, [textRef]); // handleSubmit 只会依赖 textRef 的变化。不会在 text 改变时更新

    // const handleSubmit = useCallback(() => {
    //     console.log(text);
    // }, [text]); // 每次 text 变化时 handleSubmit 都会变

    return (
        <>
            <input value={text} onChange={e => updateText(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    );
}

export default Form;