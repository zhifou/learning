import React from 'react';

export default function useBeforeUnload(handler) {
    React.useEffect(() => {
        console.log('dfdsfdsfdsfdsfdfds')
        const cb = (e) => {
            fetch('http://127.0.0.1:8080/test');
        };
        window.addEventListener('onbeforeunload', cb);
        return () => {
            window.removeEventListener("onbeforeunload", cb)
        }
    }, []);
};