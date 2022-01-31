import classes from "./Navbar.module.css";
import penny from "../images/penny.png";
import {useContext } from "react";
import {Context } from "../Store";


function Navbar () {
    const cont = useContext(Context)

    function pennyClick()  {
        cont.setHasPenny(true)
        cont.setText('You found a penny!')
        cont.setNote(true)
    }
    return(
        <div className={classes.navbar}>
            {cont.hasPenny? null :
            <img src={penny} alt="penny" className={classes.penny} onClick={() => {pennyClick()}}/>}
            <div className={classes.phone}>
            <p>Call Mom: (202)555-0112</p>
            </div>
        </div>
    )
}

export default Navbar;