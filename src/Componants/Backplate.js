import backPlate from "../images/backPlate.png";
import backPlateBack from "../images/backPlateBack.png";
import classes from "./Backplate.module.css";
import screw from "../images/screw.png";
import {Context} from "../Store";
import {useContext } from "react";
import wires1 from "../images/wires1.png";
import wires2 from "../images/wires2.png";
import wires3 from "../images/wires3.png";



function Backplate() {
    const cont = useContext(Context);

    function handleScrew1 () {
        if (cont.hasPenny) {
            cont.setUnscrew(true);

        }
    }
    function handleScrew2 () {
        if (cont.hasPenny) {
            cont.setUnscrew2(true);

        }
    }
    function handleBatt() {
        if (cont.hasBattery){
            cont.setBatteryIn(true);
            cont.setHasBattery(false);
            cont.setText("You placed the battery");
            cont.setNote(true);
        }

    }
    return (
        <div className={classes.backplate}>
            {cont.unscrew && cont.unscrew2 && !cont.batteryIn? <img src={backPlateBack} onClick={() => {handleBatt()}} alt="back plate" className={classes.pic}/> :<img src={backPlate} alt="back plate" className={classes.pic}/>}

            {cont.wires === 1? <img src={wires1} alt="wires" className={classes.wires} onClick={() => {cont.setWires(2)}}/> :
            cont.wires === 2? <img src={wires2} alt="wires" className={classes.wires} onClick={() => {cont.setWires(3)}}/> :
            <img src={wires3} alt="wires" className={classes.wires} onClick={() => {cont.setWires(1)}}/>}

            {cont.unscrew? null : <img src={screw} alt="a screw"  className={classes.screw1} onClick={() => {handleScrew1()}}/>}



            {cont.unscrew2? null :<img src={screw} alt="a screw" className={classes.screw2} onClick={() => {handleScrew2()}}/>}

            
        </div>
    )
}

export default Backplate;