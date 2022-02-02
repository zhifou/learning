import React, { useState } from "react";
import { RichEditor } from '../../components';
import './style.css';

function Home() {
  const [editorContent, setEditorContent] = useState('');
  const [editorView, setEditorView] = useState('');
  const onRichEditorChange = (value, html) => {
    setEditorContent(value);
    setEditorView(html);
    console.log('value::', value);
    console.log('html::', html);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>wangEditor测试</h2>
      <RichEditor {...{
        onChange: onRichEditorChange,
      }}/>
      <div style={{height: '40px', borderBottom: '1px solid #333'}}></div>
      <h2>wangEditor实时Content</h2>
      <div>{editorContent}</div>
      <div style={{height: '40px', borderBottom: '1px solid #333'}}></div>
      <h2>wangEditor实时View</h2>
      <div dangerouslySetInnerHTML={{ __html: editorView }}></div>
    </div>
  );
}

export default Home;
