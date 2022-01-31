import display from "../images/display.png";
import displayBack from "../images/displayBack.png";
import key from "../images/keyMouse.png";
import classes from "./Display.module.css";
import { AnimateKeyframes } from 'react-simple-animate';
import {Context} from "../Store";
import {useContext} from 'react';
import Switch from "../images/Switch.png";
import Switch2 from "../images/switch2.png";



function Display () {
    const cont = useContext(Context)
    if (cont.enteredCode.length > cont.secretCode.length){
        cont.setEnteredCode([])
    }
    function checkCorrectCode() {
        if(arraysEqual(cont.enteredCode, cont.secretCode)){
            cont.setDispOpen(true)
        }
        cont.setEnteredCode([])
    }
    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
      
        for (var i = 0; i < a.length; ++i) {
          if (a[i] !== b[i]) return false;
        }
        return true;
    }
    function handleKey() {
        cont.setKey(true)
        cont.setText("You found a Key!")
        cont.setNote(true)

    }
    function handleSwitch() {
        if (cont.phoneOn){
            cont.setPhoneOn(false);
            cont.setEntP([]);
        }else{
        cont.setPhoneOn(true);
        cont.setEnteredCode([])
        }

    }
    return(
        <div className={classes.all}>
            <div className={classes.image}>
            <img src={displayBack} alt="displayBack" />
            </div>
            <img src={cont.phoneOn? Switch2 : Switch} alt="a switch" className={classes.Switch} onClick={() => {handleSwitch()}}/>
            {cont.key? null : <div className={classes.image}>
                <img src={key} alt="displayBack" className={classes.key} onClick={() => {handleKey()}}/>
            </div>}
            <div className={classes.top} style={cont.dispOpen? {marginLeft: "200px"} : null}>
            <AnimateKeyframes
            play={cont.dispOpen}
            duration={1}
            keyframes={[
                { 0: 'transform: translateX(-200px)' }, // 0%
                { 100: 'transform: translateX(0px)' }, // 100%
              ]}>
                    <div className={classes.cover}>
                        <img src={display} alt="display" />
                        <h1>{cont.enteredCode.map(() => "*")}</h1>
                        <div className= {classes.btn1}>
                            <button onClick={() => {checkCorrectCode()}}>Enter</button>
                        </div>
                        <div className={classes.btn2}>
                            <button onClick={() => {cont.setEnteredCode([])}}>Clear</button>
                        </div>
                    </div>
            </AnimateKeyframes>
            </div>
        </div>
    )
}

export default Display;