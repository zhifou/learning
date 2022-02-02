import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../store";

function About() {
  const { appStore } = useStores(); 

  const onTitleClick = () => {
    appStore.setTitle('我是标题！' + Math.random());
    appStore.toggle();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>在React中使用React Router v6 的指南</p>
      <h2>我是blog标题{appStore.title}</h2>
      <button onClick={onTitleClick}>setTitle</button>
    </div>
  );
}

export default observer(About);
