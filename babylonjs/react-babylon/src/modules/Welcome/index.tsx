import {VFC} from 'react';
import Beer from './assets/beer.svg?react';
import c from './index.less';

const CookBookLink: VFC = () => {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://console.cloud.baidu-int.com/devops/icode/repos/baidu/ee-fe/javascript-react-cookbook"
        >
            <code>JavaScript-React 项目实践指南</code>
        </a>
    );
};

const Welcome: VFC = () => (
    <div className={c.root}>
        <h1>
            <Beer className={c.greeting} />
            恭喜你跑起来了
        </h1>
        <p>修改 <code>src/modules/Welcome/index.tsx</code> 并保存，这个页面会实时更新</p>
        <p>在开始开发前，请确保你阅读了 <CookBookLink />，如有任何问题，可通过如流搜索 1508631 加入群聊。</p>
    </div>
);

export default Welcome;
