//Hello.tsx
import React, { FC } from "react";

export interface IProps {
    name?: string;
}
//函数式组件
const Hello: FC<IProps> = (props) => {
    return <h1>hello {props.name}</h1>;
};

export default Hello;
