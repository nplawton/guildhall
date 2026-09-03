import React from "react";
import ControlKnob from "./subsomponents/ControlKnob";
import CogSpeaker from "./subsomponents/CogSpeaker";
import DiceButton from "./subsomponents/DiceButton";

export default function RightWing({
    soundPower = true,
    onToggleSoundPower,
    volume = 75,
    onChangeVolume,
    activeDice = {},
    ontriggerDice,
    bpm = 120
}) {

    return (

        <div className="right-wing-container">

            {/* Wing Title Header */}
            <div className="wing-header">
                <span className="wing-title">SOUND DECK</span>
            </div>

            {/* Top Corner: Push Power BTN & Master Volume */}
            <div className="right-wing-top-control">
                <div className="push-button-wrapper">
                    <button 
                        className={`steampunk-push-btn ${soundPower ? "on" : "off"}`}
                        onClick={onToggleSoundPower}
                        title="Toggle Sound Power"
                    >
                        <div className="btn-cap" />
                    </button>
                    <span className="push-btn-label">POWER</span>
                </div>

                <ControlKnob 
                    label="VOLUME"
                    min={0}
                    max={100}
                    value={volume}
                    onChange={onChangeVolume}
                    size="medium"
                />

            </div>

            {/* Animated Right Cog Speaker */}
            <div className="right-wing-speaker-section">
                <CogSpeaker 
                    active={soundPower}
                    side="right"
                    speed={bpm}
                />
            </div>

            {/* Dice Sound & Floor Engine Controls */}
            <div className="right-wing-dice-section">

                <div className="dice-row">
                    <DiceButton 
                        type="D10"
                        label="BPM Shuffle"
                        active={!!activeDice.D10}
                        onClick={() => ontriggerDice && ontriggerDice("D10")}
                    />
                    <span className="dice-function-label">
                        SHUFFLE
                    </span>
                </div>

                <div className="dice-row">
                    <DiceButton 
                        type="D12"
                        label="Subterranean Reverse"
                        active={!!activeDice.D12}
                        onClick={() => ontriggerDice && ontriggerDice("D12")}
                    />
                    <span className="dice-function-label">
                        REVERSE
                    </span>
                </div>

                <div className="dice-row">
                    <DiceButton 
                        type="D20"
                        label="Fog / Steam Burst"
                        active={!!activeDice.D20}
                        onClick={() => ontriggerDice && ontriggerDice("D20")}
                    />
                    <span className="dice-function-label">
                        STEAM
                    </span>
                </div>

            </div>

        </div>

    );

}