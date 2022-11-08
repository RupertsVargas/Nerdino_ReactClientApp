import React, { useState } from 'react';



function operations(val){
// console.log("HOLA");
}

function Counter() {
    const [currentCount, setCurrentCount] = useState(0);
    // var value = () =>{
    //     console.log(currentCount);
    // }
    // alert();
    // console.log(localStorage.getItem("items"))
    return (
        <div>
            <h1>Simple Counter</h1>
            <p aria-live="polite">Current count: <strong>{currentCount}</strong></p>
            <div style={{display:"flex", alignItems: "center",justifyContent: "space-evenly",flexWrap: "wrap",flexWirection: "row"}}>
                <button className="btn btn-primary" onClick={() =>{ if(currentCount>9){return false} setCurrentCount(currentCount + 1)}}>Increment</button>
                <button className="btn btn-primary" onClick={() =>{ if(currentCount<1){return false} setCurrentCount(currentCount - 1)}}>Decrement</button>
                <button className="btn btn-secondary" onClick={() =>{ setCurrentCount(0)}}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;
