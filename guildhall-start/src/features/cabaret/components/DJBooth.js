import React, { useState } from "react";
import '../styles/DJBooth.css';
import BoothBase from "../components/DJBooth/BoothBase";
import PanelsHolder from "../components/DJBooth/PanelsHolder";
import TopRack from "./DJBooth/TopRack";
import LeftWing from "./DJBooth/LeftWing";
import { getModeByCode, DEFAULT_MODE_CODE } from "../../../components/Navigation/modeConfig";

export default function DJBooth(props) {

    const [energyLevel, setEnergyLevel] = useState(100);
    const [isCuckooOpen, setIsCuckooOpen] = useState(false);
    const [activeMode, setActiveMode] = useState(DEFAULT_MODE_CODE);
    const [bpm, setBpm] = useState(120);

    const [lightPower, setLightPower] = useState(true);
    const [lightDimmer, setLightDimmer] = useState(100);
    const [soundPower, setSoundPower] = useState(true);
    const [activeDice, setActiveDice] = useState({
        D4: false,
        D6: false,
        D8: false
    });

    const handleModeSelect = (targetCode) => {
        const cabaretCode = (activeMode === targetCode) ? DEFAULT_MODE_CODE : targetCode;
        const mode = getModeByCode(cabaretCode);

        setActiveMode(mode.code);
        setBpm(mode.defaultBpm);
    };

    const handleTriggerDice = (diceType) => {
        setActiveDice((prev) => ({
            ...prev,
            [diceType]: !prev[diceType]
        }));
    };
    
    return(

        <div className="dj-booth-stage-wrapper">

            <div className="dj-booth-frame-400">

                <TopRack 
                    activeMode={activeMode}
                    bpm={bpm}
                    lightPower={lightPower && energyLevel > 0}
                    soundPower={soundPower && energyLevel > 0}
                    onModeSelect={handleModeSelect}
                />

                <PanelsHolder 
                    energyLevel={energyLevel} 
                    isCuckooOpen={isCuckooOpen}
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

                </div>

                <BoothBase />

            </div>

        </div>


    );

}    