import React, { Component } from "react";
import Store from "@/store/home";
import { inject, observer } from "mobx-react";

interface IProps {
    store: Store;
}

class HomeChild extends Component<IProps> {
    render() {
        return (
            <div>
                <p>This is Home Child</p>
                count in Home Child: {this.props.store.count}
            </div>
        );
    }
}

export default inject("store")(observer(HomeChild));
