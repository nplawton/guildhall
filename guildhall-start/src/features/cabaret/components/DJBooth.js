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
    lightPower,
    setLightPower,
    lightDimmer,
    setLightDimmer,
    lightSpeed = 50,
    setLightSpeed,
    activeDice = {},
    onTriggerDice,
    bpm = 120,
    setBpm,
    activePreset,
    onSelectPreset,
    onSavePreset,
    crtModeText = "DORMANT",
    activeMode = null,
    setActiveMode,
    isScrambling,
    onModeSelect,
    isReversed = false,
    soundPower,
    setSoundPower,
    volume = 80,
    setVolume,
    isDepleted = false,
    energyLevel = 100,
    onWindUp
}) {
    
    const [isCuckooOpen, setIsCuckooOpen] = useState(false);

    const [isMuted, setIsMuted] = useState(false);
    const [prevVolume, setPrevVolume] = useState(80);
    const [bass, setBass] = useState(50);
    const [treble, setTreble] = useState(50);

    const handleToggleLightPower = () => {
        if (isDepleted) return;
        if (setLightPower) {
            setLightPower(prev => !prev);
        }
    };

    const handleLightDimmerChange = (val) => {
        if (isDepleted) return;
        if (setLightDimmer) {
            setLightDimmer(val);
        }
    };

    const handleToggleMute = () => {
        if (isDepleted) return;
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
        if (isDepleted) return;
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
                    onModeSelect={onModeSelect}
                    isScrambling={isScrambling}
                    activeDice={activeDice}
                    isDepleted={isDepleted}
                />

                <MasterCommandBar 
                    lightPower={lightPower}
                    onToggleLightPower={handleToggleLightPower}
                    lightDimmer={lightDimmer}
                    onChangeLightDimmer={handleLightDimmerChange}
                     lightSpeed={lightSpeed}
                    isCuckooOpen={isCuckooOpen || isDepleted}
                    onToggleCuckoo={() => setIsCuckooOpen(prev => !prev)}
                    activeMode={activeMode}
                    soundPower={soundPower}
                    onToggleSoundPower={() => !isDepleted &&setSoundPower(prev => !prev)}
                    bass={bass}
                    onChangeBass={(val) => !isDepleted && setBass(val)}
                    volume={volume}
                    onChangeVolume={handleVolumeChange}
                    isMuted={isMuted}
                    onToggleMute={handleToggleMute}
                    treble={treble}
                    onChangeTreble={(val) => isDepleted && setTreble(val)}
                    isDepleted={isDepleted}
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
                            isRevrsed={isReversed}
                            isDepleted={isDepleted}
                        />

                        <CenterControl 
                            bpm={bpm}
                            onChangeBpm={(val) => setBpm(val)}
                            lightSpeed={lightSpeed}
                            onChangeLightSpeed={(val) => setLightSpeed(val)}
                            bass={bass}
                            activeMode={activeMode}
                            setActiveMode={onModeSelect}
                            lightPower={lightPower}
                            soundPower={soundPower}
                            lightDimmer={lightDimmer}
                            crtModeText={crtModeText}
                            volume={volume}
                            isMuted={isMuted}
                            treble={treble}
                            isReversed={isReversed}
                            activeDice={activeDice}
                            isDepleted={isDepleted}
                        />

                        <RightWing 
                            lightPower={lightPower && energyLevel > 0}
                            soundPower={soundPower && energyLevel > 0}
                            activeDice={activeDice}
                            onTriggerDice={onTriggerDice}
                            bpm={bpm}
                            volume={volume}
                            activePreset={activePreset}
                            onSelectPreset={onSelectPreset}
                            onSavePreset={onSavePreset}
                            isReversed={isReversed}
                            isDepleted={isDepleted}
                        />

                </div>

                <BoothBase 
                    energyLevel={energyLevel}
                    isDepleted={isDepleted}
                    onWindUp={onWindUp}
                />

            </div>

        </div>


    );

}    