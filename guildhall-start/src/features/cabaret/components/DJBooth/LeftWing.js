import React from "react";
import TimeDisplay from "./subsomponents/TimeDisplay";
import CogSpeaker from "./subsomponents/CogSpeaker";
import DiceButton from "./subsomponents/DiceButton";
import "../../styles/LeftWing.css";

export default function LeftWing({
    activeDice = {},
    onTriggerDice, 
    bpm = 120,
    soundPower = true,
    hours = 12,
    minutes = 0,
    onChangeHours,
    onChangeMinutes
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
                    onChangeHours={onChangeHours}
                    onChangeMinutes={onChangeMinutes}
                />
            </div>

            <div className="left-wing-speaker-section">

                <CogSpeaker 
                    active={soundPower}
                    side="left"
                    speed={bpm}
                />

            </div>

            <div className="left-wing-dice-section">

                <div className="dice-arrow-cluster-left">
                    
                    <div className="dice-node node-d4">
                        
                        <div className="flipper-cast-plaque">
                            <span className="plaque-star-rivet">★</span>
                            <span className="plaque-text">STROBE</span>
                            <span className="plaque-star-rivet">★</span>
                        </div>
                        
                        <DiceButton 
                            type="D4"
                            label="Strobe Trigger"
                            active={!!activeDice.D4}
                            onClick={() => onTriggerDice && onTriggerDice("D4")}
                        />
                                                
                    </div>
                    
                    <div className="dice-node node-d6">

                        <DiceButton 
                            type="D6"
                            label="Spotlight Sweep"
                            active={!!activeDice.D6}
                            onClick={() => onTriggerDice && onTriggerDice("D6")}
                        />

                        <div className="flipper-cast-plaque">
                            <span className="plaque-star-rivet">★</span>
                            <span className="plaque-text">SPOTLIGHT</span>
                            <span className="plaque-star-rivet">★</span>
                        </div>
                        
                    </div>

                    

                    <div className="dice-node node-d8">

                        <DiceButton 
                            type="D8"
                            label="Wildcard Pattern"
                            active={!!activeDice.D8}
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
