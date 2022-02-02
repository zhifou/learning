import React from 'react';

const isDOMavailable = !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
);

const useSSR = () => {
    const [inBrowser, setInBrowser] = React.useState(isDOMavailable);

    React.useEffect(() => {
        setInBrowser(isDOMavailable);
        return () => {
            setInBrowser(false);
        };
    }, []);

    const useSSRObject = React.useMemo(
        () => ({
            isBrowser: inBrowser,
            isServer: !inBrowser,
            canUseWorkers: typeof Worker !== "undefined",
            canUseEventListeners: inBrowser && !!window.addEventListener,
            canUseViewport: inBrowser && !!window.screen,
        }),
        [inBrowser]
    );

    return React.useMemo(
        () => Object.assign(Object.values(useSSRObject), useSSRObject),
        [inBrowser]
    );
};

export default useSSR;