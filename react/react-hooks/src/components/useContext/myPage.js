import React, {useContext} from 'react';
import {ContextProvider} from './context';
import MyComponents from './myComponents';

export default function MyPage() {
    return (
        <ContextProvider>
            <MyComponents />
        </ContextProvider>
    )
}