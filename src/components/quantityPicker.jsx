import './quantityPicker.css'
import { useState } from "react";

function QuantityPicker(){

    function decrease(){
        console.log("decreasing");
    }
    function increase(){
        console.log("increasing");
    }


    return(
        <div className='quantityPicker'>
        <button onClick={increase}>+</button>
        <label>1</label>
        <button onClick={decrease}>-</button>
        </div>
    )

}

export default QuantityPicker;