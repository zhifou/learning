import React from 'react';
import {useLocalStorage} from 'zhooks';

function LocalStorage() {
    const [storedValue, setValue, remove] = useLocalStorage('my-localstorage', {}, 20000);

    return (
        <div className="">
            <button type="button" onClick={() => setValue({key: Math.random()})}>更新缓存</button>
            <button type="button" onClick={() => {}}>获取当前缓存</button>
            <span>缓存：{JSON.stringify(storedValue)}</span>
            <button type="button" onClick={() => remove()}>删除缓存</button>
        </div>
    );
}

export default LocalStorage;