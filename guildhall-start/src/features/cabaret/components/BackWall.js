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
    isDepleted = false,
    currentModeCode,
    currentStep = 0
}) {

    const effectiveLight = lightPower && !isDepleted;

    const isAnthemActive = lightPower && !isDepleted && !!activeDice.D8;

    const rawStep = currentStep % 24;
    const isFireworkClap = effectiveLight & currentModeCode === "RS" && [5, 11, 15, 22, 23].includes(rawStep);
    const isLineDanceActive = effectiveLight && currentModeCode === "RS";

    return (
        <div className={`back-wall-assembly ${isDepleted ? 'is-depleted' : ''} ${!effectiveLight ? 'unpowered' : ''} ${isAnthemActive ? 'anthem-wall-dim' : ''} ${isReversed ? 'is-reversed': ''}`}>

            <div className={`back-wall-texture-overlay ${isLineDanceActive ? 'twilight-dimmed' : ''}`} />

            {isLineDanceActive && (
            <svg className="rhinestone-sky-stars" viewBox="0 0 800 300" style={{ position: "absolute", inset: 0 }}>
                {[
                    { cx: 50, cy: 30, r: 2.5, delay: "0s" },
                    { cx: 120, cy: 70, r: 1.8, delay: "0.6s" },
                    { cx: 210, cy: 25, r: 3.0, delay: "1.2s" },
                    { cx: 280, cy: 85, r: 2.0, delay: "0.3s" },
                    { cx: 370, cy: 35, r: 2.8, delay: "1.8s" },
                    { cx: 450, cy: 75, r: 1.5, delay: "0.9s" },
                    { cx: 530, cy: 20, r: 3.2, delay: "1.5s" },
                    { cx: 620, cy: 65, r: 2.2, delay: "0.4s" },
                    { cx: 710, cy: 30, r: 2.7, delay: "1.1s" },
                    { cx: 760, cy: 80, r: 1.9, delay: "1.7s" },
                    { cx: 90, cy: 110, r: 1.5, delay: "1.0s" },
                    { cx: 320, cy: 120, r: 2.0, delay: "0.2s" },
                    { cx: 490, cy: 105, r: 1.6, delay: "1.4s" },
                    { cx: 670, cy: 115, r: 2.3, delay: "0.8s" },
                ].map((star, idx) => (
                    <g key={`star-${idx}`} className="rhinestone-star" style={{ animationDelay: star.delay }}>
                        <path 
                            d={`M ${star.cx} ${star.cy - star.r * 2.5} L ${star.cx} ${star.cy + star.r * 2.5} M ${star.cx - star.r * 2.5} ${star.cy} L ${star.cx + star.r * 2.5} ${star.cy}`} 
                            stroke="#ffffff" 
                            strokeWidth="0.8" 
                        />
                        <circle cx={star.cx} cy={star.cy} r={star.r} fill="#ffb6c1" />
                    </g>
                ))}
            </svg>
        )}

            {isFireworkClap && (
                <div className="rhinestone-fireworks-container" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 10 }}>
                    <svg className="fireworks-svg" viewBox="0 0 600 300" style={{ width: "100%", height: "100%" }}>
                        {[ { x: 150, y: 80 }, { x: 300, y: 50 }, { x: 450, y: 80 } ].map((loc, idx) => (
                            <g key={`fw-backwall-${idx}`} transform={`translate(${loc.x}, ${loc.y})`}>
                                <circle cx="0" cy="0" r="28" fill="#ffffff" style={{ filter: "drop-shadow(0 0 20px #ffbc05)" }} />
                                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => (
                                    <g key={`fw-ray-${deg}`} transform={`rotate(${deg})`}>
                                        <line x1="0" y1="-10" x2="0" y2="-50" stroke="#ffbc05" strokeWidth="3" />
                                        <circle cx="0" cy="-55" r="3.5" fill="#ffffff" style={{ filter: "drop-shadow(0 0 8px #ffb6c1)" }} />
                                    </g>
                                ))}
                            </g>
                        ))}
                    </svg>
                </div>
            )}


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
                    lightPower={effectiveLight}
                />
                
            </div>

            {isAnthemActive && (
                <div className="lute-spotlight-beam" />
            )}

           <div className="wall-section center-section">
                <LutePendulum 
                    isReversed={isReversed}
                    isDepleted={isDepleted}
                    lightPower={effectiveLight}
                />
            </div>

            <div className="wall-section right-section">
                <BalanceSpring 
                    isReversed={isReversed}
                    isDepleted={isDepleted}
                    lightPower={effectiveLight}
                />
            </div>
        </div>
    );
}