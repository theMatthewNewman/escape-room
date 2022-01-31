import {Context} from "../Store";
import {useContext } from "react";
import classes from "./Inventory.module.css";
import penny from "../images/penny.png";
import key from "../images/keyMouse.png";
import bat from "../images/battery.png";
import letter from "../images/letter.png";

function Inventory () {
    const cont= useContext(Context)
    return (
        <>
        {!cont.inventory? <button onClick={() => {cont.setInventory(true)}} className={classes.but}>View inventory</button> : 
        <><div className={classes.inv}>
            {cont.hasPenny? <img className={classes.imag} src={penny} alt="penny"/> : null}
            {cont.hasBattery? <img className={classes.imag} src={bat} alt="battery"/> : null}
            {cont.key? <img className={classes.imag} src={key} alt="Key"/> : null}
            {cont.paper? <img className={classes.imag} src={letter} alt="letter"/> : null}
            </div>
            <button onClick={() => {cont.setInventory(false)}} className={classes.but}>Close inventory</button></>}
        </>
    )
}

export default Inventory;