import React, { useState } from "react";
import "../../styles/BoothBase.css";

export default function BoothBase({ 
    energyLevel = 100,
    isDepleted = false,
    onWindUp
}) {

    const [isCranking, setIsCranking] = useState(false);
    const clampedEnergy = Math.max(0, Math.min(100, energyLevel))
    const needleRotation = -60 + (clampedEnergy / 100) * 120;

    const getWeightPosition = (weightIndex) => {
        const minEnergy = weightIndex * 33.33;
        const maxEnergy = (weightIndex + 1) * 33.33;

        if (clampedEnergy <= minEnergy) return 0;
        if (clampedEnergy >= maxEnergy) return 100;

       return ((clampedEnergy - minEnergy) / (maxEnergy - minEnergy)) * 100;
    };

    const posW1 = getWeightPosition(0); //Left Weight
    const posW2 = getWeightPosition(1); //Center Weight
    const posW3 = getWeightPosition(2); //Right Weight
    const dropMultiplier = 54;

    const handleCrank = (e) => {
        e.stopPropagation();
        if (isCranking) return;
        setIsCranking(true);
        
       if (onWindUp) {
        onWindUp();
       }
        
        setTimeout(() => setIsCranking(false), 800);
    };

    return (

        <div className="booth-base-pedestal">


            {/* Main Clock Pedestal Body */}
            <div className="grandfather-cabinet-body">

                <div className="cabinet-panel side-left">

                    <div className="carved-wood-filigree" />

                    {/* Left Side: Circular Guage */}
                    <div 
                        className="booth-base-gauge-assembly" 
                        title={`Cavort Energy: ${Math.round(clampedEnergy)}%`}
                    >
                        <div className="gauge-outer-bezel">
                            <div className="gauge-dial-face">
                                <svg className="gauge-zones-svg" viewBox="0 0 100 100">
                                    <path d="M 85,50 A 35,35 0 0,0 50,15" fill="none" stroke="#2e7d32" strokeWidth="8" />
                                    <path d="M 50,15 A 35,35 0 0,0 22,32" fill="none" stroke="#f57c00" strokeWidth="8" />
                                    <path d="M 22,32 A 35,35 0 0,0 15,50" fill="none" stroke="#c62828" strokeWidth="8" strokeDasharray="2 2" />
                                </svg>

                                <span className="gauge-tick tick-empty">E</span>
                                <span className="gauge-tick tick-full">F</span>
                                <span className="gauge-title-text">CAVORT</span>

                                <div
                                    className="gauge-needle-wrapper"
                                    style={{ transform: `rotate(${needleRotation}deg)` }}
                                >
                                    <div className="gauge-needle-pointer" />
                                    <div className="gauge-needle-cap" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="cabinet-center-door">

                    <div className="glass-door-frame">

                        <div className="glass-reflection-shine" />

                        {/* Internal Workings */}
                        <div className="weights-chamber">

                            <div className="weight-track">

                                <div className="wire-line" />

                                <div 
                                    className="brass-weight"
                                    style={{
                                        transform: `translateY(${(100 - posW1) * (dropMultiplier / 100)}px)` 
                                    }}
                                >
                                    <div className="weight-cap" />
                                    <div className="weight-body" />
                                </div>


                            </div>

                            <div className="weight-track">

                                <div className="wire-line" />

                                <div 
                                    className="brass-weight"
                                    style={{
                                        transform: `translateY(${(100 - posW2) * (dropMultiplier / 100)}px)` 
                                    }}
                                >
                                    <div className="weight-cap" />
                                    <div className="weight-body" />
                                </div>


                            </div>

                            <div className="weight-track">

                                <div className="wire-line" />

                                <div 
                                    className="brass-weight"
                                    style={{
                                        transform: `translateY(${(100 - posW3) * (dropMultiplier / 100)}px)` 
                                    }}
                                >
                                    <div className="weight-cap" />
                                    <div className="weight-body" />
                                </div>


                            </div>


                        </div>

                    </div>

                    <div className="carved-bottom-plate">
                        <div className="wood-carving-inset" />
                    </div>

                </div>

                <div className="cabinet-panel side-right">
                    <div className="carved-wood-filigree" />

                    <div className="riveted-wind-plaque">
                        <svg className="star-rivet top-left" viewBox="0 0 20 20">
                            <polygon points="10,0 13,7 20,8 15,13 16,20 10,16 4,20 5,13 0,8 7,7" fill="#1a0c02" stroke="#ffd700" strokeWidth="1.5" />
                        </svg>
                        <svg className="star-rivet top-right" viewBox="0 0 20 20">
                            <polygon points="10,0 13,7 20,8 15,13 16,20 10,16 4,20 5,13 0,8 7,7" fill="#1a0c02" stroke="#ffd700" strokeWidth="1.5" />
                        </svg>
                        
                        <span className="stamped-plaque-text">WIND</span>
                        
                        <svg className="star-rivet bottom-left" viewBox="0 0 20 20">
                            <polygon points="10,0 13,7 20,8 15,13 16,20 10,16 4,20 5,13 0,8 7,7" fill="#1a0c02" stroke="#ffd700" strokeWidth="1.5" />
                        </svg>
                        <svg className="star-rivet bottom-right" viewBox="0 0 20 20">
                            <polygon points="10,0 13,7 20,8 15,13 16,20 10,16 4,20 5,13 0,8 7,7" fill="#1a0c02" stroke="#ffd700" strokeWidth="1.5" />
                        </svg>
                    </div>

                </div>

                <div 
                    className="crank-socket-wrapper" 
                    onClick={handleCrank} 
                    title="Click to wind up clockwork weights"
                >

                    <div className="stationary-axle-shaft" />

                    <div className={`revolving-crank-assembly ${isCranking ? "cranking-cycle" : ""}`}>
                        <div className="crank-lever-arm" />
                        <div className="contoured-grabber-knob">
                            <div className="knob-cap-screw" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Molded Baseboard */}
            <div className="pedestal-molded-base" />

        </div>

    );

}