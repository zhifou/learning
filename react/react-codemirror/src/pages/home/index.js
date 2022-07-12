import React from "react";
import { CodeMirror } from '../../components';

function Home() {

  const onCodeMirrorChange = (value) => {
    console.log(value);

  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <CodeMirror {...{
        lang: 'json',
        value: '{"a": 1}',
        onChange: onCodeMirrorChange,
      }}/>
    </div>
  );
}

export default Home;
