import React, { useEffect } from 'react';
// import useBeforeUnload from '../../plugins/useBeforeUnload';

const UseBeforeUnload = props => {
    // useBeforeUnload(() => {
    //     console.log('进行了OnBeforeUnload操作');
    // });
    const cb = (e) => {
        fetch('http://127.0.0.1:8080/test');
    };

    useEffect(() => {
        console.log('useBeforeUnload:::::');

        window.addEventListener('onbeforeunload', cb);
        
        return () => {
            window.removeEventListener("onbeforeunload", cb)
        }
    }, []);

    return (
        <div>useBeforeUnload</div>
    );
};

export default React.memo(UseBeforeUnload);