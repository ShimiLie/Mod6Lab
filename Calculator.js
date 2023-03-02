import React from "react";

import {useState} from 'react';

const Calculate = () => {
    const [result, setResult] = useState("");

    const clear = () => {
        setResult("");
    }
    const handleClick = (e) => {
        setResult(result.concat(e.target.name))
    }
 
    const calculate = () => {
        setResult(eval(result).toString())
    }


    return (
        <>
        <h2>Simple Calculator</h2>
            <div class="container">
                <form>
                    <input type="text" value={result}/>
                </form>
                <div class="operKeypad">
                    <button onClick={clear}>Clear</button>
                    <button name="+" onClick={handleClick}>+</button>
                    <button name="-" onClick={handleClick}>-</button>
                    <button name="*" onClick={handleClick}>*</button>
                    <button name="÷" onClick={handleClick}>÷</button>
                    <button  onClick={calculate}>=</button>
                </div>
                <div class="numKeypad">
                    
                    <button name="0" onClick={handleClick}>0</button>
                    <button name="9" onClick={handleClick}>9</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="6"  onClick={handleClick}>6</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="4" onClick={handleClick}>4</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="1" onClick={handleClick}>1</button>
                </div>
            </div>
        </>
    )
}

export default Calculate;


