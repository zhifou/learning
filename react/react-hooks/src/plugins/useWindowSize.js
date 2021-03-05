/**
 * @file 自定义hook组件
 * 使用方法：const [width, height] = useWindowSize();
 */
import { useEffect, useState, useCallback } from 'react';

const useWindowSize = () => {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    const onResize = useCallback(() => {
        const {clientWidth, clientHeight} = document.documentElement;
        setWidth(clientWidth);
        setHeight(clientHeight);
    }, []);

    useEffect(() => {
        const {clientWidth, clientHeight} = document.documentElement;
        setWidth(clientWidth);
        setHeight(clientHeight);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', onResize, false);

        return () => {
            window.removeEventListener('resize', onResize, false);
        }
    });

    return [width, height];
};

export default useWindowSize;