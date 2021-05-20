import React from 'react';

export default function useKeydown(key, handler) {
    React.useEffect(() => {
        const cb = (e) => e.key === key && handler(e)
        document.body.addEventListener("keydown", cb)
        return () => {
            document.body.removeEventListener("keydown", cb)
        }
    }, [key, handler])
};