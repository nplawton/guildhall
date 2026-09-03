import React from "react";
import ControlKnob from "./subsomponents/ControlKnob";
import CogSpeaker from "./subsomponents/CogSpeaker";
import DiceButton from "./subsomponents/DiceButton";
import "../../styles/LeftWing.css";

export default function LeftWing({
    lightPower = true,
    onToggleLightPower,
    lightDimmer = 100,
    onChangeLightDimmer,
    activeDice = {},
    onTriggerDice, 
    bpm = 120,
    soundPower =true
}) {

    return (

        <div className="left-wing-container">

            {/* Wing Title Header */}
            <div className="wing-header">
                <span className="wing-title">LIGHTING DECK</span>
            </div>

            {/* Top Corner */}
            <div className="left-wing-top-controls">
                
                <div className="flipper-switch-wrapper">
                    <button
                        className={`flipper-switch ${lightPower ? "on" : "off"}`}
                        onClick={onToggleLightPower}
                        title="Toggle Lighting Power"
                    >
                        <div className="flipper-handle" />
                    </button>
                    <span className="flipper-label">POWER</span>
                </div>

                <ControlKnob 
                    label="DIMMER"
                    min={0}
                    max={100}
                    value={lightDimmer}
                    onChange={onChangeLightDimmer}
                    size="medium"
                />
                
            </div>

            <div className="left-wing-speake-section">
                <CogSpeaker 
                    active={soundPower}
                    side="left"
                    speed={bpm}
                />
            </div>

            <div className="left-wing-dice-section">

                <div className="dice-row">
                    <DiceButton 
                        type="D4"
                        label="Strobe Pulse"
                        active={!!activeDice.D4}
                        onClick={() => onTriggerDice && onTriggerDice("D4")}
                    />
                    <span className="dice-function-label">
                        STROBE
                    </span>
                </div>

                <div className="dice-row">
                    <DiceButton 
                        type="D6"
                        label="Stage Spotlight"
                        active={!!activeDice.D6}
                        onClick={() => onTriggerDice && onTriggerDice("D6")}
                    />
                    <span className="dice-function-label">
                        SPOTLIGHT
                    </span>
                </div>

                <div className="dice-row">
                    <DiceButton 
                        type="D8"
                        label="Wildcard Strobe"
                        active={!!activeDice.D8}
                        onClick={() => onTriggerDice && onTriggerDice("D8")}
                    />
                    <span className="dice-function-label">
                        WILDCARD
                    </span>
                </div>

            </div>

        </div>

    );

}
