import classes from "./Notify.module.css";
import {Context } from "../Store";
import {useContext } from "react";

function Notify(props) {

    const cont = useContext(Context);

    if (cont.note) {
        setTimeout(() => {cont.setNote(false)}, 1000)
    }
    return(
        <>
        {cont.note? <div className= {classes.note}>
            <p>{cont.text}</p>
        </div> : null}
        
        </>

    )
}

export default Notify;