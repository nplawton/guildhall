import React from "react";
import TimeDisplay from "./subcomponents/TimeDisplay";
import CogSpeaker from "./subcomponents/CogSpeaker";
import DiceButton from "./subcomponents/DiceButton";
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
    volume = 80,
    isReversed = false,
    isDepleted = false
}) {

    const isLightEffective = lightPower && !isDepleted;
    const isSoundEffective = soundPower && !isDepleted;

    return (

        <div className={`left-wing-container ${isDepleted ? 'is-depleted' : ''}`}>

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
                    onChangeHours={() => !isDepleted && onIncrementHours && onIncrementHours()}
                    onChangeMinutes={() => !isDepleted && onIncrementMinutes && onIncrementMinutes()}
                    lightPower={isLightEffective}
                />
            </div>

            <div className="left-wing-speaker-section">

                <CogSpeaker 
                    active={isSoundEffective}
                    side="left"
                    speed={bpm}
                    volume={volume}
                    isReversed={isReversed}
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
                            active={isLightEffective && !!activeDice.D4}
                            isPowerOn={isLightEffective}
                            onClick={() => !isDepleted && onTriggerDice && onTriggerDice("D4")}
                        />
                                                
                    </div>
                    
                    <div className="dice-node node-d6">

                        <DiceButton 
                            type="D6"
                            label="Strobe Trigger"
                            active={isLightEffective && !!activeDice.D6}
                            isPowerOn={isLightEffective}
                            onClick={() => !isDepleted && onTriggerDice && onTriggerDice("D6")}
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
                            active={isLightEffective && !!activeDice.D8}
                            isPowerOn={isLightEffective}
                            onClick={() => !isDepleted && onTriggerDice && onTriggerDice("D8")}
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
