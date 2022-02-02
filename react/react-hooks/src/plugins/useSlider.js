import { useState, useRef, useCallback, useEffect } from "react";

const fixRatio = ratio => Math.max(0, Math.min(1, ratio));

const useSlider = props => {
    const { initRatio = 0 } = props;

    const [ratio, setRatio] = useState(initRatio);

    const [lastPos, setLastPos] = useState();

    const [slideRange, setSlideRange] = useState();

    const [sliding, setSliding] = useState(false);

    const hotAreaRef = useRef(null);
    const thumbRef = useRef(null);

    const handleThumbMouseDown = useCallback(ev => {
        const hotArea = hotAreaRef.current;
        setLastPos(ev.pageX);
        setSlideRange(hotArea.clientWidth);
        setSliding(true);
    }, []);

    useEffect(() => {
        const onSliding = ev => {
            if (!sliding) {
                return;
            }
            const pos = ev.pageX;
            const delta = pos - lastPos;
            setRatio(r => fixRatio(r + delta / slideRange));
            setLastPos(pos);
        };
        const onSlideEnd = ev => {
            if (!sliding) {
                return;
            }
            const pos = ev.pageX;
            const delta = pos - lastPos;
            setRatio(r => fixRatio(r + delta / slideRange));
            setLastPos(pos);
            setSliding(false);
        };
        console.log("effect");
        document.addEventListener("mousemove", onSliding);
        document.addEventListener("mouseup", onSlideEnd);

        return () => {
            document.removeEventListener("mousemove", onSliding);
            document.removeEventListener("mouseup", onSlideEnd);
        };
    }, [lastPos, slideRange, sliding]);

    return [
        {
            ref: hotAreaRef
        },
        {
            ref: thumbRef,
            onMouseDown: handleThumbMouseDown
        },
        {
            ratio: ratio
        }
    ];
};

export default useSlider;
