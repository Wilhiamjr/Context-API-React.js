import React from "react";
import { useCount } from "./context/count";

export default function Conter() {
    const { count, setCount } = useCount()
    return (
        <div>
            <span>Contador: {count} </span>
            <br /><br/>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>


    )
}