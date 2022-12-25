import { Button } from "theme-ui";
import { useState } from "react";

export const Demo = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>{count}</p>
            <Button onClick={() => setCount((val) => ++val)}>+</Button>
        </>
    );
};
