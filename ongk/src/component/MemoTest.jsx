// const Myconponnent = ({title}) => {
    
//     return <div>{title}</div>;
// }
// const ParentComponent = () => {
//     return (
//         <Myconponnent title="Hello World" />
//     );
// }

//     export default ParentComponent;
import React, { useState, useCallback } from "react";
import MyComponent from "./Mycomponent";

export default function MemoTest() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount( count => count + 1);
    }, []);

    return (
        <div>
            <MyComponent onIncrea={handleClick} />
            <h2>Count: {count}</h2>
        </div>
    );
}