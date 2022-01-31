import drawerClosed from "../images/drawerClosed.png";
import classes from "./Drawer.module.css";
import { useContext } from "react";
import { Context } from "../Store";
import drawerOpen from "../images/drawerOpen.png";
import battery from "../images/battery.png";
import paper from "../images/crumpledPaper.png";

function Drawer () {

    const cont = useContext(Context);
    function handleBat() {
        cont.setCall(false);
        cont.setHasBattery(true);
        cont.setText("You found a Battery!");
        cont.setNote(true);

    }
    return(
        <div className={classes.all}>
        <img src={cont.drawerOpen? drawerOpen : drawerClosed } alt="drawer" className={classes.drawer} onClick={() => cont.setDrawerOpen(!cont.drawerOpen)}/>
        {cont.drawerOpen && !cont.paper? <img src={paper} alt="paper" className={classes.paper} onClick={() => cont.setPaper(true)}/> : null}
        {cont.drawerOpen && cont.call && !cont.hasBattery? <img src={battery} alt="battary"  onClick={handleBat} className={classes.bat}/> : null}
        </div>
    )
}

export default Drawer;