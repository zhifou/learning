/**
 * 有时候我们希望在父组件中执行，子组件提供的某些方法，
 * 在类组件中我们可以通过ref获取子组件，然后执行子组件（子组件也为类组件）中的方法，
 * 但是在函数组件中，我们无法实现这一点。因为函数组件中没有this，我们无法获取到函数子组件中的方法。
 * 这时我们可以使用useImperativeHandle配合forwardRef使用。
 * useImperativeHandle这个Hooks会返回一个对象, 该对象会作为父组件 current属性的值
 */
import React, { useRef, forwardRef, useImperativeHandle } from 'react';

function Child(props, parentRef) {
    // 子组件内部自己创建 ref 
    let focusRef = useRef();
    let inputRef = useRef();
    useImperativeHandle(parentRef, () => {
      // 这个函数会返回一个对象
      // 该对象会作为父组件 current 属性的值
      // 通过这种方式，父组件可以使用操作子组件中的多个 ref
        return {
            focusRef,
            inputRef,
            name: '计数器',
            addNumber(num) {
                focusRef.current.value = num;
            },
            focus() {
                focusRef.current.focus();
            },
            changeText(text) {
                inputRef.current.value = text;
            }
        };
    });

    return (
        <>
            <input ref={focusRef} />
            <input ref={inputRef} />
        </>
    );
}

const RefChild = forwardRef(Child);

function Parent() {
    const parentRef = useRef();   //{current:''}
    function getFocus() {
        console.log(parentRef.current);
        parentRef.current.focus();
        // 因为子组件中没有定义这个属性，实现了保护，所以这里的代码无效
        parentRef.current.addNumber(666);
        parentRef.current.changeText('<script>alert(1)</script>');
        console.log(parentRef.current.name);
    }
    return (
        <>
            <RefChild ref={parentRef} />
            <button onClick={getFocus}>获得焦点</button>
        </>
    )
}

export default Parent;