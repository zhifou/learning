import React, {useState, useEffect, useRef} from 'react';

export default function useLoading() {
    const [isLoading, setState] = useState(false);
    const mount = useRef(false);
    useEffect(() => {
        mount.current = true;
        return () => {
            mount.current = false;
        }
    }, [])
    const load = (aPromise) => {
        setState(true);
        return aPromise.finally(() => {
            if (mount.current) {
                setState(false);
            }
        });
    };
    return [isLoading, load];
}