import {Context} from "../Store";
import {useContext } from "react";
import classes from "./Victory.module.css";



const Victory = () => {
    const cont = useContext(Context);

    return(
        <>
        {cont.victory? <div className={classes.back}><h1>You win!</h1></div> : null}

        </>
    )
}

export default Victory;