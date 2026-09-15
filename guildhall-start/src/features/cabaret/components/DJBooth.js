import React, { useState } from "react";

import '../styles/DJBooth.css';

import TopRack from "./DJBooth/TopRack";
import MasterCommandBar from "./DJBooth/MasterCommandBar";
import LeftWing from "./DJBooth/LeftWing";
import CenterControl from "./DJBooth/CenterControl";
import RightWing from "./DJBooth/RightWing";
import BoothBase from "../components/DJBooth/BoothBase";

import { getModeByCode, DEFAULT_MODE_CODE } from "../../../components/Navigation/modeConfig";



export default function DJBooth({
    hours = 10,
    minutes = 10,
    onIncrementHours,
    onIncrementMinutes,
    mode,
    setMode,
    lightPower,
    setLightPower,
    lightDimmer,
    setLightDimmer,
    lightSpeed = 50,
    setLightSpeed,
    activeDice = {},
    onTriggerDice,
    bpm = 120,
    setBpm
}) {
    
    const [isCuckooOpen, setIsCuckooOpen] = useState(false);
    const [activeMode, setActiveMode] = useState(DEFAULT_MODE_CODE);

    
    const [soundPower, setSoundPower] = useState(true);
    const [volume, setVolume] = useState(80);
    const [isMuted, setIsMuted] = useState(false);
    const [prevVolume, setPrevVolume] = useState(80);
    const [bass, setBass] = useState(50);
    const [treble, setTreble] = useState(50);

    const [energyLevel, setEnergyLevel] = useState(100);

    const activeModeObj = getModeByCode(activeMode);
    const activeModeName = activeModeObj ? activeModeObj.name : "DORMANT";

    const handleModeSelect = (targetCode) => {
        const cabaretCode = (activeMode === targetCode) ? DEFAULT_MODE_CODE : targetCode;
        const mode = getModeByCode(cabaretCode);

        setActiveMode(mode ? mode.code : null);
        setBpm(mode ? mode.defaultBpm : 120);
    };

    const handleToggleLightPower = () => {
        if (setLightPower) {
            setLightPower(prev => !prev);
        }
    };

    const handleLightDimmerChange = (val) => {
        if (setLightDimmer) {
            setLightDimmer(val);
        }
    };

    const handleToggleMute = () => {
        if(isMuted) {
            setVolume(prevVolume > 0 ? prevVolume : 80);
            setIsMuted(false);
        } else {
            setPrevVolume(volume);
            setVolume(0);
            setIsMuted(true);
        }
    };

    const handleVolumeChange = (newVal) => {
        if (isMuted && newVal > 0) {
            setIsMuted(false);
        }
        setVolume(newVal);
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
                    onToggleLightPower={handleToggleLightPower}
                    lightDimmer={lightDimmer}
                    onChangeLightDimmer={handleLightDimmerChange}
                     lightSpeed={lightSpeed}
                    isCuckooOpen={isCuckooOpen}
                    onToggleCuckoo={() => setIsCuckooOpen(prev => !prev)}
                    activeMode={activeMode}
                    activeModeName={activeModeName}
                    soundPower={soundPower}
                    onToggleSoundPower={() => setSoundPower(prev => !prev)}
                    bass={bass}
                    onChangeBass={(val) => setBass(val)}
                    volume={volume}
                    onChangeVolume={handleVolumeChange}
                    isMuted={isMuted}
                    onToggleMute={handleToggleMute}
                    treble={treble}
                    onChangeTreble={(val) => setTreble(val)}
                />

                <div className="dj-booth-deck-row">

                    <LeftWing 
                            lightPower={lightPower && energyLevel > 0}
                            soundPower={soundPower && energyLevel > 0}
                            activeDice={activeDice}
                            onTriggerDice={onTriggerDice}
                            bpm={bpm}
                            volume={volume}
                            hours={hours}
                            minutes={minutes}
                            onIncrementHours={onIncrementHours}
                            onIncrementMinutes={onIncrementMinutes}
                        />

                        <CenterControl 
                            bpm={bpm}
                            onChangeBpm={(val) => setBpm(val)}
                            lightSpeed={lightSpeed}
                            onChangeLightSpeed={(val) => setLightSpeed(val)}
                            bass={bass}
                            activeMode={activeMode}
                            setActiveMode={handleModeSelect}
                            lightPower={lightPower}
                            soundPower={soundPower}
                            lightDimmer={lightDimmer}
                            activeModeName={activeModeName}
                            volume={volume}
                            isMuted={isMuted}
                            treble={treble}
                        />

                        <RightWing 
                            lightPower={lightPower && energyLevel > 0}
                            soundPower={soundPower && energyLevel > 0}
                            activeDice={activeDice}
                            onTriggerDice={onTriggerDice}
                            bpm={bpm}
                            volume={volume}
                        />

                </div>

                <BoothBase 
                    energyLevel={energyLevel}
                />

            </div>

        </div>


    );

}    