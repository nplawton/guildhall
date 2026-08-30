import React, {useState} from "react";
import './styles/ClockworkCabaretMain.css'

import BackWall from "./components/BackWall";

export default function ClockworkCabaret() {
    
    const [time, setTime] = useState({ hours: 10 , minutes: 10});
    const [florMode, setFloorMode] = useState('ambient');
    const [tempo, setTempo] = useState(12);
    
    return (
        <div className="cabaret-room-stage">
            <BackWall />
        </div>
    );
}