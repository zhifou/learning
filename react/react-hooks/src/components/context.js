import React, { useReducer, useContext, useEffect } from 'react';
import useLoading from '../plugins/useLoading';

const reducer = (state = 0, {type, payload}) => {
    switch (type) {
        case 'add':
            return state + payload;
        case 'delete':
            return state - payload;
        default: 
            return state;
    }
}

const Context = React.createContext(null);

const Child = () => {
    const [count, dispatch] = useContext(Context);
    const [isLoading, load] = useLoading(false);
    const addClick = (type) => {
        load(
            fetch('https://www.fastmock.site/mock/e93841f61cf251b1ed956c373a7de8d0/case/getRandomNumber')
        )
        .then(res => res.json())
        .then(res => {
            console.log(res.data);
            dispatch({type, payload: res.data});
        });
    };


    useEffect(() => {
        console.log(isLoading);
    }, [isLoading])


    return (
        <div>
            <div>child ... {count}</div>
            <button onClick={() => addClick('add')}>child add</button>
            <div>{count}</div>
            <button onClick={() => addClick('delete')}>child delete</button>
        </div>
    )
}

const Hook = () => {
    const [count, dispatch] = useReducer(reducer, 10);
    return (
        <Context.Provider value={[count, dispatch]}>
            <div className="404">
            father ... {count}
            <Child />
            <button onClick={() => dispatch({type: 'add'})}>add</button>
            <button onClick={() => dispatch({type: 'delete'})}>delete</button>
            </div>
        </Context.Provider>
    );
};

export default Hook;