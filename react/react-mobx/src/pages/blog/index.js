import React from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../store";

function BlogIndex(props) {
    //使用自定义useStore获取全局store
    // const { id, title, setTitle, toggle } = useStore("todoStore");
    const { appStore } = useStores(); // 获取store
    console.log('props::', props);

    const onTitleClick = () => {
      appStore.setTitle('我是标题！' + Math.random());
      appStore.toggle();
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>我是blog首页{appStore.finished ? 'true' : 'false'}</h2>
            <h2>我是blog标题{appStore.title}</h2>
            <button onClick={onTitleClick}>setTitle</button>
        </div>
    );
}

export default observer(BlogIndex);
