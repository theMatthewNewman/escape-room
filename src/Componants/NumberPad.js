import classes from "./NumberPad.module.css";
import {useContext } from "react";
import {Context } from "../Store";

function NumberPad () {
    var cont = useContext(Context)

    function handleNum(num) {
        if(!cont.phoneOn && cont.batteryIn && cont.wires===2){
        cont.setEnteredCode([...cont.enteredCode ,num]);
        }
        if(cont.phoneOn && cont.pennySpent){
            cont.setEntP([...cont.entP, num]);
        }
    }
    return (
        <div className={classes.base}>
            <div className={classes.plate}>
                <div>
                    <button onClick={() => {handleNum(7)}}>7</button>
                    <button onClick={() => {handleNum(8)}}>8</button>
                    <button onClick={() => {handleNum(9)}}>9</button>
                </div>
                <div>
                    <button onClick={() => {handleNum(4)}}>4</button>
                    <button onClick={() => {handleNum(5)}}>5</button>
                    <button onClick={() => {handleNum(6)}}>6</button>
                </div>
                <div>
                    <button onClick={() => {handleNum(1)}} >1</button>
                    <button onClick={() => {handleNum(2)}} >2</button>
                    <button onClick={() => {handleNum(3)}}>3</button>
                </div>
                <div className={classes.zero}>
                    <button onClick={() => {handleNum(0)}}>0</button>
                </div>
            </div>
        </div>
    )
}

export default NumberPad;