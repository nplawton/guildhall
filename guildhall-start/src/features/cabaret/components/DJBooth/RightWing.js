import React, {useState} from "react";
import CogSpeaker from "./subsomponents/CogSpeaker";
import DiceButton from "./subsomponents/DiceButton";

import "../../styles/RightWing.css";

export default function RightWing({
    bpm = 120,
    soundPower = true,
    lightPower = true,
    activeDice = {},
    onTriggerDice,
    activePreset = null,
    onSelectPreset,
    onSavePreset,
    volume=80
}) {

    const [isSaveArmed, setIsSavedArmed] = useState(false);

    const handlePresetClick = (num) => {
        if (isSaveArmed) {
            if (onSavePreset) onSavePreset(num);
            setIsSavedArmed(false);
        } else {
            if (onSavePreset) onSelectPreset(num);
        }
    };

    return (

        <div className="right-wing-container">

            {/* Wing Title Header */}
            <div className="wing-header">
                <div className="wing-cast-plaque-large">
                    <span className="plaque-star-rivet">★</span>
                    <span className="plaque-text">PRESET DECK</span>
                    <span className="plaque-star-rivet">★</span>
                </div>
            </div>

            {/* Layer 1: Oval Brass Prsets */}
            <div className="right-wing-presets-section">
                <div className={`presets-plate ${!lightPower ? 'unpowered' : ''}`}>
                    <span className="presets-label">
                        {isSaveArmed ? "SELECT SLOT TO SAVE" : "SCENE PRESETS"}
                    </span>
                    <div className="presets-buttons-row">

                        <button
                            className={`oval-preset-btn save-btn ${isSaveArmed && lightPower ? "armed" : ""}  ${!lightPower ? "unpowered" : ""}`}
                            onClick={() => setIsSavedArmed(prev => !prev)}
                            title="Arm Save Mode then press 1-4"
                            type="button"
                        >

                            <span className="preset-num">
                                {isSaveArmed ? "ARM" : "SET"}
                            </span>

                        </button>

                        {[1, 2, 3, 4].map((num) => (
                            <button 
                                key={num}
                                className={`oval-preset-btn ${activePreset === num && lightPower ? "active" : ""} ${!lightPower ? 'unpowered' : ''}`}
                                onClick={() => onSelectPreset && onSelectPreset(num)}
                                title={isSaveArmed ? `Save Current Scenec to Preset ${num}` : `Recall Preset ${num}`}
                                type="button"
                            >
                                <span className="preset-num">
                                    {num}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Animated Right Cog Speaker */}
            <div className="right-wing-speaker-section">
                <CogSpeaker 
                    active={soundPower}
                    side="right"
                    speed={bpm}
                    volume={volume}
                />
            </div>

            {/* Dice Sound & Floor Engine Controls */}
            <div className="right-wing-dice-section">

                <div className="dice-arrow-cluster-right">

                    <div className="dice-node node-d20">

                        <DiceButton 
                            type="D20"
                            label="Fog / Stream Burst"
                            active={lightPower && !!activeDice.D20}
                            isPowerOn={lightPower}
                            onClick={() => lightPower && onTriggerDice && onTriggerDice("D20")}
                        />

                        <div className="flipper-cast-plaque">
                            <span className="plaque-star-rivet">★</span>
                            <span className="plaque-text">FOG</span>
                            <span className="plaque-star-rivet">★</span>
                        </div>

                    </div>

                    <div className="dice-node node-d10">

                        <div className="flipper-cast-plaque">
                            <span className="plaque-star-rivet">★</span>
                            <span className="plaque-text">SHUFFLE</span>
                            <span className="plaque-star-rivet">★</span>
                        </div>

                        <DiceButton
                            type="D10"
                            label="BPM & Mode Shuffle"
                            active={lightPower && !!activeDice.D10}
                            isPowerOn={lightPower || soundPower}
                            onClick={() => (lightPower || soundPower) && onTriggerDice && onTriggerDice("D10")}                    
                        />

                    </div>

                    <div className="dice-node node-d12">

                        <DiceButton 
                            type="D12"
                            label="Subterranean Reverse"
                            active={lightPower && !!activeDice.D12}
                            isPowerOn={lightPower}
                            onClick={() => soundPower && onTriggerDice && onTriggerDice("D12")}
                        />

                        <div className="flipper-cast-plaque">
                            <span className="plaque-star-rivet">★</span>
                            <span className="plaque-text">REVERSE</span>
                            <span className="plaque-star-rivet">★</span>
                        </div>

                    </div>


                </div>
               
            </div>

        </div>

    );

}