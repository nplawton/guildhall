import React from "react";
import "../../styles/PanelsHolder.css";


export default function PanelsHolder ({
    energyLevel = 100,
    isCuckooOpen = false,
    children
}) {

    const isDepleted = energyLevel <= 0;
    const showWarning = isCuckooOpen || isDepleted;

    const needleRotation = -60 + (energyLevel / 100) * 120;

    return (

        <div className="panels-holder-container">

            {/* UpperFilagree Drop=Panel */}
            <div className="filigree-drop-panel">
                <div className="panel-filigree-overlay" />
                <div className="panel-corner-rivets">
                    <span className="star-rivet top-left">★</span>
                    <span className="star-rivet top-right">★</span>
                    <span className="star-rivet bottom-left">★</span>
                    <span className="star-rivet bottom-right">★</span>
                </div>

                {/* Left Side: Circular Guage */}
                <div 
                    className="energy-gauge-assembly" 
                    title={`Cavort Energy: ${Math.round(energyLevel)}%`}
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
            

                {/* Center Cuckoo Door & Mechanical Warning Flag */}
                <div className="cuckoo-housing">

                    <div className="cuckoo-arch-frame">
                        <div className={`cuckoo-door door-left ${showWarning ? "open" : ""}`} />
                        <div className={`cuckoo-door door-right ${showWarning ? "open" : ""}`} />

                        <div className="cuckoo-inner-chamber">
                            <div className={`cuckoo-bird ${showWarning ? "emerged" : ""}`}>
                                <svg viewBox="0 0 40 30" className="bird-svg">
                                    <path d="M 5,20 Q 15,5 25,12 Q 35,10 38,15 Q 32,22 20,25 Z" fill="#b5873d" stroke="#1a0c02" strokeWidth="1" />
                                    <circle cx="30" cy="13" r="1.5" fill="#ffd700" />
                                    <polygon points="38,15 42,17 37,19" fill="#ffd700" />
                                </svg>
                            </div>
                        </div>

                    </div>

                    <div className={`warning-flag-assembly ${isDepleted ? "triggered" : ""}`}>
                        <div className="flag-hinge-pin" />
                        <div className="brass-warning-plaque">
                            <span className="warning-text">
                                CHARGE CABARET
                            </span>
                        </div>
                    </div>
                </div>
            

                {/* Right Side: Pressure Stem Whistle */}
                <div className="steam-whistle-assembly">

                    <div className={`steam-cloud-emitter ${isDepleted ? "releasing-steam" : ""}`}>
                        <div className="steam-puff puff-1" />
                        <div className="steam-puff puff-2" />
                        <div className="steam-puff puff-3" />
                    </div>

                    <div className="whistle-orifice-cap" />
                    <div className="whistle-brass-pipe">
                        <div className="pipe-slot" />
                    </div>
                    <div className="whistle-mount-bracket" />

                </div>
            </div>

            <div className="panels-deck-content">
                {children}
            </div>

        </div>

    );

}

