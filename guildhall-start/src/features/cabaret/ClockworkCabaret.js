import React, {useState} from "react";
import './styles/ClockworkCabaretMain.css'

import BackWall from "./components/BackWall";
import ClockworkFloor from "./components/ClockworkFloor";
import DJBooth from "./components/DJBooth";

export default function ClockworkCabaret() {
    
    const [hours, setHours] = useState(10);
    const [minutes, setMinutes] = useState(10);
    const [floorMode, setFloorMode] = useState('ambient');
    
    const [tempo, setTempo] = useState(12);
    const [bpm, setBpm] = useState(120);

    const [lightPower, setLightPower] = useState(true);
    const [lightDimmer, setLightDimmer] = useState(100);
    const [lightSpeed, setLightSpeed] = useState(50);

    const [activeDice, setActiveDice] = useState({
        D4: false, //Spotlight
        D6: false, // Dsico Strobe
        D8: false, // Wildcard
        D10: false,
        D12: false,
        D20: false
    });

    const isSpotlightActive = lightPower && !!activeDice.D4;

    const handleIncrementHours = () => {
        setHours(prev => (prev % 12) + 1);
    }

    const handleIncrementMinutes = () => {
        setMinutes(prev => (prev + 1) % 60);
    }

    const handleTriggerDice = (diceType) => {
        setActiveDice((prev) => ({
            ...prev,
            [diceType]: !prev[diceType]
        }));
    };
    
    return (
        <div className={`cabaret-room-stage ${isSpotlightActive ? 'spotlight-ambient-dim' : ''}`}>
            
            <BackWall  
                gearSpeed={tempo}
                activeDice={activeDice}
                lightPower={lightPower}
            />

            <ClockworkFloor 
                hours={hours}
                minutes={minutes}
                mode={floorMode}
                lightPower={lightPower}
                lightDimmer={lightDimmer}
                lightSpeed={lightSpeed}
                activeDice={activeDice}
                bpm={bpm}
            />

            <DJBooth 
                hours={hours}
                minutes={minutes}
                onIncrementHours={handleIncrementHours}
                onIncrementMinutes={handleIncrementMinutes}
                mode={floorMode}
                setMode={setFloorMode}
                lightPower={lightPower}
                setLightPower={setLightPower}
                lightDimmer={lightDimmer}
                setLightDimmer={setLightDimmer}
                lightSpeed={lightSpeed}
                setLightSpeed={setLightSpeed}
                activeDice={activeDice}
                onTriggerDice={handleTriggerDice}
                bpm={bpm}
                setBpm={setBpm}
            />

        </div>
    );
}