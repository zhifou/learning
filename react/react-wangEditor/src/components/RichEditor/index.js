import React, { useState, useEffect } from "react";
import "@wangeditor/editor/dist/css/style.css";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { UPLOAD_IMAGE_CONFIG } from './config';

export default function MyEditor(props) {
    const { onChange } = props;
    const [editor, setEditor] = useState(null); // 存储 editor 实例
    const defaultContent = []; // 编辑器默认内容，空内容

    const ToolbarConfig = {}; // 菜单栏配置

    // 编辑器配置
    const editorConfig = {
        placeholder: "请输入内容...",
        onCreated: editor => {
            // 编辑器创建之后，记录 editor 实例，重要 ！！！ （有了 editor 实例，就可以执行 editor API）
            setEditor(editor);
        },
        onChange: editor => {
            console.log("changed::", editor.children);
            onChange(JSON.stringify(editor.children), editor.getHtml());
        },
        MENU_CONF: {
            uploadImage: {
                server: "http://127.0.0.1:4200/api/proxy/upload/postFile",
                ...UPLOAD_IMAGE_CONFIG,
                // 上传之前触发
                onBeforeUpload(files) {
                    console.log('选中的文件列表::', files);
                    // files 选中的文件列表，格式如 { key1: file1, key2: file2 }
                    return files;

                    // 返回值可选择：
                    // 1. 返回一个对象（files 或者 files 的一部分），则将上传返回结果中的文件
                    // 2. 返回 false ，终止上传
                },
                // 上传进度的回调函数
                onProgress(progress) {
                    // progress 是 0-100 的数字
                    console.log("progress", progress);
                },
                // 单个文件上传成功之后
                onSuccess(file, res) {
                    console.log(`${file.name} 上传成功`, res);
                },
                // 单个文件上传失败
                onFailed(file, res) {
                    console.log(`${file.name} 上传失败`, res);
                },
                // 上传错误，或者触发 timeout 超时
                onError(file, err, res) {
                    console.log(`${file.name} 上传出错`, err, res);
                },
            },
        },
    };

    // 组件销毁时，及时销毁 editor 实例，重要！！！
    useEffect(() => {
        return () => {
            if (editor == null) return;
            editor.destroy();
            setEditor(null);
        };
    }, [editor]);

    return (
        <div style={{ border: "1px solid #ccc", zIndex: 100 }}>
            {/* 渲染 toolbar */}
            <Toolbar
                editor={editor}
                defaultConfig={ToolbarConfig}
                style={{ borderBottom: "1px solid #ccc" }}
            />
            {/* 渲染 editor */}
            <Editor
                defaultConfig={editorConfig}
                defaultContent={defaultContent}
                style={{ height: "500px" }}
            />
        </div>
    );
}
