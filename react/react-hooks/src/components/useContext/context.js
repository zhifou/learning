import React, { createContext, useReducer } from 'react';

export const Context = createContext();

// 相当于vue中的mutation，action包含type，相当于mutation-types，payload是要更新的最新的对象
// state是store中原来的对象
function reducer(state, action) {
    const { type, payload = {} } = action || {};
    console.log(action);
    switch(type) {
        case 'search':
            return {...state, params: action.params};
        case 'update':
            return Object.assign({}, state, payload);
        default:
            return state;
    } 
}

export function ContextProvider(props) {
    const [state, dispatch] = useReducer(reducer, props);

    return (
        <Context.Provider value={{state, dispatch}}>
            {props.children}
        </Context.Provider>
    )
}