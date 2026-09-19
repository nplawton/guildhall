import React from "react";
import '../styles/BackWall.css';

import BalanceSpring from "./BackWall/BalanceSpring";
import GearTrain from "./BackWall/GearTrain";
import LutePendulum from "./BackWall/LutePendulum";

export default function BackWall({
    gearSpeed = 50,
    activeDice = {},
    lightPower = true,
    isReversed = false,
    isDepleted = false
}) {

    const isAnthemActive = lightPower && !isDepleted && !!activeDice.D8;

    return (
        <div className={`back-wall-assembly ${isAnthemActive ? 'anthem-wall-dim' : ''} ${isReversed ? 'is-reversed': ''}`}>


            <div className="wall-section left-section">

                {isAnthemActive && (
                    <div className="gear-sparks-container">

                        <div className="electric-core-flash" />

                        <svg className="gear-spark-svg" viewBox="0 0 200 200">

                            <path 
                                d="M 100 100 L 115 80 L 110 75 L 140 45 L 130 45 L 155 20"
                                className="electric-arc arc-1"
                            />

                            <path 
                                d="M 100 100 L 75 105 L 80 115 L 40 125 L 50 135 L 15 145" 
                                className="electric-arc arc-2" 
                            />

                            <path 
                                d="M 100 100 L 85 80 L 90 75 L 60 40 L 65 35 L 35 15" 
                                className="electric-arc arc-3" 
                            />

                            <path 
                                d="M 100 100 L 120 115 L 115 125 L 150 155 L 140 160 L 175 180" 
                                className="electric-arc arc-4" 
                            />

                        </svg>
                        
                    </div>
                )}

                <GearTrain 
                    gearSpeed={gearSpeed} 
                    isReversed={isReversed}
                    isDepleted={isDepleted} 
                />
                
            </div>

            {isAnthemActive && (
                <div className="lute-spotlight-beam" />
            )}

           <div className="wall-section center-section">
                <LutePendulum 
                    isReversed={isReversed}
                    isDepleted={isDepleted}
                />
            </div>

            <div className="wall-section right-section">
                <BalanceSpring 
                    isReversed={isReversed}
                    isDepleted={isDepleted}
                />
            </div>
        </div>
    );
}