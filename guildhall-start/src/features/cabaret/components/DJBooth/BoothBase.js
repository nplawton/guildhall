import React, { useState } from "react";
import "../../styles/BoothBase.css";

export default function BoothBase({ children }) {

    const [weightLevel, setWeightLevel] = useState(85);
    const [isCranking, setIsCranking] = useState(false);

    const handleCrank = (e) => {
        e.stopPropagation();
        if (isCranking) return;
        setIsCranking(true);
        setWeightLevel((prev) => Math.min(100, prev + 15));
        setTimeout(() => setIsCranking(false), 1000);
    };

    return (

        <div className="booth-base-pedestal">

            <div className="booth-top-deck-housing">
                {children}
            </div>

            {/* Main Clock Pedestal Body */}
            <div className="grandfather-cabinet-body">

                <div className="cabinet-panel side-left">
                    <div className="carved-wood-filigree"></div>
                </div>

                <div className="cabinet-center-door">
                    <div className="glass-door-frame">
                        <div className="glass-reflection-shine" />

                        {/* Internal Workings */}
                        <div className="weights-chamber">

                            <div 
                                className="wire-line line-1" 
                                style={{ height:`${100 - weightLevel * 0.7}%` }} 
                            />
                            <div 
                                className="wire-line line-2" 
                                style={{ height:`${100 - weightLevel * 0.8}%` }} 
                            />
                            <div 
                                className="wire-line line-3" 
                                style={{ height:`${100 - weightLevel * 0.65}%` }} 
                            />

                            <div className="weights-container" style={{ transform: `translateY(${100 - weightLevel}px)` }}>
                                <div className="brass-weight cylinder-1">
                                    <div className="weight-cap" />
                                    <div className="weight-body" />
                                </div>
                                <div className="brass-weight cylinder-2">
                                    <div className="weight-cap" />
                                    <div className="weight-body" />
                                </div>
                                <div className="brass-weight cylinder-3">
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