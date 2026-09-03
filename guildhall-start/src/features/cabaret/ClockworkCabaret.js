import React, {useState} from "react";
import './styles/ClockworkCabaretMain.css'

import BackWall from "./components/BackWall";
import ClockworkFloor from "./components/ClockworkFloor";
import DJBooth from "./components/DJBooth";

export default function ClockworkCabaret() {
    
    const [time, setTime] = useState({ hours: 10 , minutes: 10});
    const [floorMode, setFloorMode] = useState('ambient');
    const [tempo, setTempo] = useState(12);
    
    return (
        <div className="cabaret-room-stage">
            
            <BackWall  gearSpeed={tempo}/>

            <ClockworkFloor 
                hours={time.hours}
                minutes={time.minutes}
                mode={floorMode}
            />

            <DJBooth 
                time={time}
                setTime={setTime}
                mode={floorMode}
                setMode={setFloorMode}
            />

        </div>
    );
}