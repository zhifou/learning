import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Store from "@/store/home";
import HomeChild from "@/container/home/HomeChild";
import { observer, Provider } from "mobx-react";

interface IProps {}

class Home extends Component<IProps> {
    store = new Store();

    addCount = () => {
        this.store.increase();
    };

    goD3 = () => {
        // this.navigate("/d3");
        <Navigate to="/d3" />;
    };

    render() {
        return (
            <Provider store={this.store}>
                <div>
                    <p>This is Home Page.</p>
                    count: {this.store.count}
                    <button onClick={this.addCount}>点击加1</button>
                    <button onClick={this.goD3}>进D3</button>
                    {/* @ts-ignore store 已通过 inject 方法注入 */}
                    <HomeChild />
                </div>
            </Provider>
        );
    }
}

export default observer(Home);
