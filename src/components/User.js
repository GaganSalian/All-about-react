import { useState } from "react";



const User=({name})=>{
    const [count]=useState(0);
    const [count2]=useState(0);

    return <div className="User-id">
    <h1>count={count}</h1>
    <h2>count={count2}</h2>

    <h2>Name:{name}</h2>
    <h3>Location:Udupi</h3>
    <h4>contact:33333</h4>
    </div>
}

export default User;