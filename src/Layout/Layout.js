import Backplate from "../Componants/Backplate";
import Curtain from "../Componants/Curtain";
import Display from "../Componants/Display";
import Drawer from "../Componants/Drawer";
import Inventory from "../Componants/Inventory";
import Lock from "../Componants/Lock";
import Navbar from "../Componants/Navbar";
import Notify from "../Componants/Notify";
import NumberPad from "../Componants/NumberPad";
import Phone from "../Componants/Phone";
import Victory from "../Componants/Victory";
import classes from "./Layout.module.css"

function Layout() {
    return(
        <div className={classes.all}>
        <div className={classes.lock}>
        <Lock />
        </div>

        <div className={classes.drawer}>
        <Drawer />
        </div>

        <div className={classes.phone}>
        <Phone />
        </div>

        <div className={classes.number}>
        <NumberPad />
        </div>

        <div className={classes.display}>
        <Backplate />
        <Display />
        </div>

        
        <Navbar />
        <Inventory />
        <Notify />
        <Curtain />
        <Victory />
        </div>
    )
};

export default Layout;