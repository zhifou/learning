import React, { FC } from "react";
import { sum } from "utils/index";
import styles from "./App.module.scss";

console.log("sum", sum(10, 2));
console.log("styles", styles);

interface Props {
    name: string;
}

const App: FC<Props> = (props) => {
    const { name } = props;
    return <div className={styles.textRed}>{name}-zhaodong</div>;
};

export default App;
