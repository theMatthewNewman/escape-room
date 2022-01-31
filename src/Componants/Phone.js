import display from "../images/display.png";
import phone from "../images/phone.png";
import oneCent from "../images/oneCent.png";
import classes from "./Phone.module.css";
import {Context } from "../Store";
import {useContext } from "react";
import PhoneCall from "../images/PhoneCall.mp3";
import useSound from "use-sound";


// holds the switch, penny drop and phone

function Phone() {
    const cont = useContext(Context);
    const [call] = useSound(PhoneCall);

    if (cont.entP.length > cont.phoneNum.length){
        cont.setEntP([])
    }

    function handleCall() {
        if(arraysEqual(cont.entP, cont.phoneNum)){
            call();
            cont.setCall(true);
            
        }
        cont.setEntP([])
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

    function handlePenny() {
        if (cont.hasPenny) {
        cont.setHasPenny(false);
        cont.setPennySpent(true);
        cont.setText("You spent your penny!");
        cont.setNote(true);
        }

    }
    return(
        <div className={classes.all}>
            <img src={display} alt="phone display" className={classes.display}/>
            <h1 className={classes.numbers}>{cont.entP.map((num) => num)}</h1>
            <button className={classes.buttn} onClick={() => {handleCall()}}><img src={phone} alt="phone" className={classes.phone}/> </button>
            <img src={oneCent} alt="one cent slot" className={classes.cent} onClick={() => {handlePenny()}}/>
        </div>
    )
}
export default Phone;