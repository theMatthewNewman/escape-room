import classes from "./Curtain.module.css";
import {useContext } from 'react';
import {Context } from "../Store";
import { AnimateKeyframes } from 'react-simple-animate';

function Curtain() {
    const cont = useContext(Context);
    function trigger() {
        cont.setUp(true);
        setTimeout(() => cont.setNoCurtain(true), 1000)
    }
    return(
        <>
        {cont.noCurtain? null : 
        <div className={classes.curtain}>
        <AnimateKeyframes
        start={cont.up}
        duration={1}
        fillMode="forwards"
        keyframes={[
            {0: "opacity: 1"},
            {100: "opacity: 0"},
        ]}
        >
            <div className={classes.back}>
            <button onClick={() => {trigger()}}>Can you unlock the puzzle?</button>
            </div>
        
        </AnimateKeyframes>
        </div>}
        </>
    )
}
export default Curtain;