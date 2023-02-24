import React, { Component } from "react";
import Store from "@/store/home";
import HomeChild from "@/container/home/homeChild";
import { observer, Provider } from "mobx-react";

interface IProps {}

class Home extends Component<IProps> {
    store = new Store();

    addCount = () => {
        this.store.increase();
    };

    render() {
        return (
            <Provider store={this.store}>
                <div>
                    <p>This is Home Page.</p>
                    count: {this.store.count}
                    <button onClick={this.addCount}>点击加1</button>
                    {/* @ts-ignore store 已通过 inject 方法注入 */}
                    <HomeChild />
                </div>
            </Provider>
        );
    }
}

export default observer(Home);
