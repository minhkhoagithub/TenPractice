import React, { memo } from "react";

function MyComponent({ onIncrea }) {
    console.log("MyComponent Rendered!");
    return (
        <div>
            <h2>MyComponent</h2>
            <button onClick={onIncrea}>Increase</button>
        </div>
    );
}

export default memo(MyComponent);