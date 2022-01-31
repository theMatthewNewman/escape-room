import React, {useState} from 'react';


export const Context = React.createContext();

function Store({children}){
    const [shake, setShake] = useState();
    const [key, setKey] = useState(false);
    const [dispOpen, setDispOpen] = useState(false);
    const [enteredCode, setEnteredCode] = useState([]);
    const [secretCode, setSecretCode] = useState([2,0,1,9]);
    const [locked, setLocked] = useState(true);
    const [up, setUp] = useState(false);
    const [noCurtain, setNoCurtain] = useState(false);
    const [hasPenny, setHasPenny] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [text, setText] = useState("change setText");
    const [note, setNote] = useState(false);
    const [pennySpent, setPennySpent] = useState(false);
    const [phoneOn, setPhoneOn] = useState(false);
    const [phoneNum, setPhoneNum] = useState([2,0,2,5,5,5,0,1,1,2]);
    const [entP, setEntP] = useState([]);
    const [batteryIn, setBatteryIn] = useState(false);
    const [call, setCall] = useState(false);
    const [unscrew, setUnscrew] = useState(false);
    const [unscrew2, setUnscrew2] = useState(false);
    const [hasBattery, setHasBattery] = useState(false);
    const [victory, setVictory] = useState(false);
    const [wires, setWires] = useState(1);
    const [inventory, setInventory] = useState(false);
    const [paper, setPaper] = useState(false);
    

    var cont = {
        key: key,
        setKey: setKey,
        dispOpen: dispOpen,
        setDispOpen: setDispOpen,
        enteredCode: enteredCode,
        setEnteredCode: setEnteredCode,
        secretCode: secretCode,
        setSecretCode: setSecretCode,
        locked: locked,
        setLocked: setLocked,
        shake: shake,
        setShake: setShake,
        up: up,
        setUp: setUp,
        noCurtain: noCurtain,
        setNoCurtain: setNoCurtain,
        hasPenny: hasPenny,
        setHasPenny: setHasPenny,
        drawerOpen: drawerOpen,
        setDrawerOpen: setDrawerOpen,
        note: note,
        setNote: setNote,
        text: text,
        setText: setText,
        pennySpent: pennySpent,
        setPennySpent: setPennySpent,
        phoneOn: phoneOn,
        setPhoneOn: setPhoneOn,
        phoneNum: phoneNum,
        setPhoneNum: setPhoneNum,
        entP: entP,
        setEntP: setEntP,
        batteryIn: batteryIn,
        setBatteryIn: setBatteryIn,
        call: call,
        setCall: setCall,
        unscrew: unscrew,
        setUnscrew: setUnscrew,
        unscrew2: unscrew2,
        setUnscrew2: setUnscrew2,
        hasBattery: hasBattery,
        setHasBattery: setHasBattery,
        victory: victory,
        setVictory: setVictory,
        wires: wires,
        setWires: setWires,
        inventory: inventory,
        setInventory: setInventory,
        paper: paper,
        setPaper: setPaper,
    }

    return(
        <Context.Provider value={cont}>{children}</Context.Provider>
    )
}

export default Store;