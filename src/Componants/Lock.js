import Lockit from "../images/Lockit.png";
import classes from "./Lock.module.css";
import {useContext} from 'react';
import Lockopen from "../images/Lock-open.png";
import { AnimateKeyframes } from 'react-simple-animate';
import {Context} from "../Store";


const Lock = () => {
    const cont = useContext(Context);

    function unLock() {
        if (cont.locked) {
            cont.setLocked(false);
            setTimeout(() => {cont.setVictory(true)}, 1000)
        }
        else {
            cont.setLocked(true);
        }
    }

    function lockClick() {
        if (cont.key) {
            unLock();
        }
        else {
            cont.setShake(!cont.shake)
        }
    }

    return(
        <div className={classes.Lock} >
            <AnimateKeyframes
        play={cont.shake}
        direction="normal"
        duration={.1}
        keyframes={[
          { 0: 'transform: rotateZ(0)' }, // 0%
          { 25: 'transform: rotateZ(10deg)' }, // 50%
          { 75: 'transform: rotateZ(-10deg)' }, // 100%
          { 100: 'transform: rotateZ(0)' }, // 0%
        ]}
      >
        <img src={cont.locked? Lockit : Lockopen} alt="a lock" className={classes.Lockit} onClick={() => lockClick()}/>
        </AnimateKeyframes>
        </div>
    )
}

export default Lock;