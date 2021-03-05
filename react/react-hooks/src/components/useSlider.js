import React, { useState } from "react";
import useSlider from "../plugins/useSlider";
import "./useSlider.css";

function Example(props) {
    const [hotAreaProps, thumbProps, sliderState] = useSlider({
        initRatio: props.ratio
    });

    const { ratio, reset, sliding, setRatio } = sliderState;

    return (
        <>
            <div className="val">{ratio}</div>
            <div className="slider">
                <div className="track" {...hotAreaProps} />
                <div className="has" style={{ width: `${ratio * 100}%` }}>
                    <div className="ctrl" {...thumbProps} />
                </div>
            </div>
        </>
    );
}

export default Example;
