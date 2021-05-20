import React, {useContext} from 'react';
import {Context} from './context';

export default function MyComponents(props) {
    
    const {state, dispatch} = useContext(Context);
    console.log(state);
    const handleSearch = () => {
        dispatch({
            type: 'search',
            params: {
                a: 1
            }
        });
    }

    const handleUpdate = () => {
        dispatch({
            type: 'update',
            payload: {
                b: 2
            }
        });
    }

    return (
        <>
            <button onClick={handleSearch}>search</button>
            <div>{JSON.stringify(state.params)}</div>
            <button onClick={handleUpdate}>update</button>
            <div>{JSON.stringify(state.b)}</div>
        </>
    )
}