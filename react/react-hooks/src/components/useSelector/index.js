import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, selectCount} from './reducer';

const Component = props => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return <div>
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
        <span>{count}</span>
        <div>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </div>;
};

export default Component;