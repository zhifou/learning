/**
 * @file windowSize测试自定义hook
 */
import React from 'react';
import useWindowSize from '../plugins/useWindowSize';

const WindowSize = () => {
    const [width, height] = useWindowSize();

    return (
        <div>
            <h1>自定义Hook - useWindowSize</h1>
            <p>请控制浏览器窗口</p>
            当前页面size：{width} x {height}
        </div>
    );
};

export default WindowSize;