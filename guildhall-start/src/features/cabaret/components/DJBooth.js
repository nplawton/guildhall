import React, { useState } from "react";

import '../styles/DJBooth.css';

import TopRack from "./DJBooth/TopRack";
import MasterCommandBar from "./DJBooth/MasterCommandBar";
import LeftWing from "./DJBooth/LeftWing";
import CenterControl from "./DJBooth/CenterControl";
import RightWing from "./DJBooth/RightWing";
import BoothBase from "../components/DJBooth/BoothBase";

import { getModeByCode, DEFAULT_MODE_CODE } from "../../../components/Navigation/modeConfig";



export default function DJBooth(props) {

    const [energyLevel, setEnergyLevel] = useState(100);
    const [isCuckooOpen, setIsCuckooOpen] = useState(false);
    const [activeMode, setActiveMode] = useState(DEFAULT_MODE_CODE);
    const [bpm, setBpm] = useState(120);

    const [lightPower, setLightPower] = useState(true);
    const [lightDimmer, setLightDimmer] = useState(100);
    const [lightSpeed, setLightSpeed] = useState(50);
    const [soundPower, setSoundPower] = useState(true);
    const [volume, setVolume] = useState(80);
    const [bass, setBass] = useState(50);
    const [treble, setTreble]=useState(50);

    const [activeDice, setActiveDice] = useState({
        D4: false,
        D6: false,
        D8: false,
        D10: false,
        D12: false,
        D20: false
    });

    const activeModeObj = getModeByCode(activeMode);
    const activeModeName = activeModeObj ? activeModeObj.name : "DORMANT";

    const handleModeSelect = (targetCode) => {
        const cabaretCode = (activeMode === targetCode) ? DEFAULT_MODE_CODE : targetCode;
        const mode = getModeByCode(cabaretCode);

        setActiveMode(mode ? mode.code : null);
        setBpm(mode ? mode.defaultBpm : 120);
    };

    const handleTriggerDice = (diceType) => {
        setActiveDice((prev) => ({
            ...prev,
            [diceType]: !prev[diceType]
        }));
    };
    
    return(

        <div className="dj-booth-stage-wrapper">

            <div className="dj-booth-frame-480">

                <TopRack 
                    activeMode={activeMode}
                    bpm={bpm}
                    lightPower={lightPower && energyLevel > 0}
                    soundPower={soundPower && energyLevel > 0}
                    onModeSelect={handleModeSelect}
                />

                <MasterCommandBar 
                    lightPower={lightPower}
                    onToggleLightPower={() => setLightPower(prev => !prev)}
                    lightDimmer={lightDimmer}
                    onChangeLightDimmer={(val) => setLightDimmer(val)}
                    isCuckooOpen={isCuckooOpen}
                    onToggleCuckoo={() => setIsCuckooOpen(prev => !prev)}
                    activeMode={activeMode}
                    activeModeName={activeModeName}
                    lightSpeed={lightSpeed}
                    bass={bass}
                    soundPower={soundPower}
                    onToggleSoundPower={() => setSoundPower(prev => !prev)}
                    volume={volume}
                    onChangeVolume={(val) => setVolume(val)}
                    treble={treble}
                    onChangeTreble={(val) => setTreble(val)}
                    onChangeBass={(val) => setBass(val)}
                />

                <div className="dj-booth-deck-row">

                    <LeftWing 
                            lightPower={lightPower}
                            onToggleLightPower={() => setLightPower(prev => !prev)}
                            lightDimmer={lightDimmer}
                            onChangeLightDimmer={(val) => setLightDimmer(val)}
                            activeDice={activeDice}
                            onTriggerDice={handleTriggerDice}
                            bpm={bpm}
                            soundPower={soundPower && energyLevel > 0}
                        />

                        <CenterControl 
                            bpm={bpm}
                            onChangeBpm={(val) => setBpm(val)}
                            lightSpeed={lightSpeed}
                            onChangeLightSpeed={(val) => setLightSpeed(val)}
                            bass={bass}
                            activeMode={activeMode}
                            setActiveMode={handleModeSelect}
                        />

                        <RightWing 
                            soundPower={soundPower && energyLevel > 0}
                            onToggleSoundPower={() => setSoundPower(prev => !prev)}
                            volume={volume}
                            onChangeVolume={(val) => setVolume(val)}
                            activeDice={activeDice}
                            ontriggerDice={handleTriggerDice}
                            bpm={bpm}
                        />

                </div>

                <BoothBase 
                    energyLevel={energyLevel}
                />

            </div>

        </div>


    );

}    