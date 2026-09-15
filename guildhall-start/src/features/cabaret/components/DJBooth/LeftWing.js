import React from "react";
import TimeDisplay from "./subsomponents/TimeDisplay";
import CogSpeaker from "./subsomponents/CogSpeaker";
import DiceButton from "./subsomponents/DiceButton";
import "../../styles/LeftWing.css";

export default function LeftWing({
    activeDice = {},
    onTriggerDice, 
    bpm = 120,
    lightPower = true,
    soundPower = true,
    hours = 12,
    minutes = 0,
    onIncrementHours,
    onIncrementMinutes,
    volume = 80
}) {

    return (

        <div className="left-wing-container">

            {/* Wing Title Header */}
            <div className="wing-header">
                <div className="wing-cast-plaque-large">
                    <span className="plaque-star-rivet">★</span>
                    <span className="plaque-text">CHRONO DECK</span>
                    <span className="plaque-star-rivet">★</span>
                </div>
            </div>

            <div className="left-wing-time-section">
                <TimeDisplay 
                    hours={hours}
                    minutes={minutes}
                    onChangeHours={onIncrementHours}
                    onChangeMinutes={onIncrementMinutes}
                    lightPower={lightPower}
                />
            </div>

            <div className="left-wing-speaker-section">

                <CogSpeaker 
                    active={soundPower}
                    side="left"
                    speed={bpm}
                    volume={volume}
                />

            </div>

            <div className="left-wing-dice-section">

                <div className="dice-arrow-cluster-left">
                    
                    <div className="dice-node node-d4">
                        
                        <div className="flipper-cast-plaque">
                            <span className="plaque-star-rivet">★</span>
                            <span className="plaque-text">SPOTLIGHT</span>
                            <span className="plaque-star-rivet">★</span>
                        </div>
                        
                        <DiceButton 
                            type="D4"
                            label="Spotlight Sweep"
                            active={lightPower && !!activeDice.D4}
                            isPowerOn={lightPower}
                            onClick={() => onTriggerDice && onTriggerDice("D4")}
                        />
                                                
                    </div>
                    
                    <div className="dice-node node-d6">

                        <DiceButton 
                            type="D6"
                            label="Strobe Trigger"
                            active={lightPower && !!activeDice.D6}
                            isPowerOn={lightPower}
                            onClick={() => onTriggerDice && onTriggerDice("D6")}
                        />

                        <div className="flipper-cast-plaque">
                            <span className="plaque-star-rivet">★</span>
                            <span className="plaque-text">STROBE</span>
                            <span className="plaque-star-rivet">★</span>
                        </div>
                        
                    </div>

                    

                    <div className="dice-node node-d8">

                        <DiceButton 
                            type="D8"
                            label="Wildcard Pattern"
                            active={lightPower && !!activeDice.D8}
                            isPowerOn={lightPower}
                            onClick={() => onTriggerDice && onTriggerDice("D8")}
                        />
                        
                        <div className="flipper-cast-plaque">
                            <span className="plaque-star-rivet">★</span>
                            <span className="plaque-text">WILDCARD</span>
                            <span className="plaque-star-rivet">★</span>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    );

}
