import React, { useState, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/stream-parser";
import { yaml } from "@codemirror/legacy-modes/mode/yaml";

const CodeMirrorWrap = (props) => {
    const { language, height, value, onChange } = props;

    useEffect(() => {
  
    }, []);

    return (
        <>
            <CodeMirror
                value={value}
                height={height}
                extensions={[StreamLanguage.define(yaml)]}
                onChange={(value, viewUpdate) => {
                    console.log("value:", value);
                    onChange(value);
                }}
            />
        </>
    );
};

CodeMirrorWrap.propTypes = {
    // 语言
    language: PropTypes.string.isRequired,
    // 内容
    value: PropTypes.string,
    // 容器高
    height: PropTypes.string,
    // 内容变化触发的事件
    onChange: PropTypes.func,
};

CodeMirrorWrap.defaultProps = {
    language: "",
    value: '',
    height: '200px',
    onChange: null,
};

export default CodeMirrorWrap;
