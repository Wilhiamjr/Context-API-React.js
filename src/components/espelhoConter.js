import React from "react";
import { useCount } from "./context/count";

export default function Espelho (){
    const {count,setCount}=useCount();
    return(
        <div>
            <span>  Contador: {count} </span>
            <br/><br/>
            <button onClick={()=>setCount(0)}>Zerar Contador</button>
        </div>
        

    )
}