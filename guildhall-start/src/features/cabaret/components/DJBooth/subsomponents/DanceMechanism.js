import React from "react";
import "./DanceMechanism.css";
import { MODES } from "../../../../../components/Navigation/modeConfig";

export default function DanceMechanism({ activeMode = "I", onSelectMode }) {


    return (

        <div className="dance-mechanism-master-plate">

            <div className="master-screw top-left" />
            <div className="master-screw top-right" />
            <div className="master-screw bottom-left" />
            <div className="master-screw bottom-right" />

            <div className="dance-cogs-grid">
                {MODES.map((mode) => {
                    const isActive = activeMode === mode.code;
                    const teethCount = mode.modeNum * 2;

                    return (

                        <div
                            key={mode.code}
                            className={`cog-socket-plate ${isActive ? "active-locked" : ""}`}
                            onClick={() => onSelectMode && onSelectMode(mode.code)}
                        >
                            <div className="star-screw top-left">★</div>
                            <div className="star-screw top-right">★</div>
                            <div className="star-screw bottom-left">★</div>
                            <div className="star-screw bottom-right">★</div>

                            <div className="circular-socket">

                                <div
                                    className={`cog-button-body ${isActive ? "depressed-rotating" : ""}`}
                                    style={{ "--glow-clor": mode.color }}
                                >

                                    <svg viewBox="0 0 100 100" className="cog-btn-svg">

                                        <defs>
                                            <radialGradient id={`cogGrad-${mode.code}`} cx="35%" cy="35%" r="65%">
                                                <stop offset="0%" stopColor="#fff2be" />
                                                <stop offset="50%" stopColor="#b5873d" />
                                                <stop offset="100%" stopColor="#302005" />
                                            </radialGradient>
                                        </defs>

                                        <g className="gear-teeth">
                                            {Array.from({ length: teethCount }).map((_, i) => (
                                                <rect 
                                                    key={i}
                                                    x="44" y="2" width="12" height="12" rx="2"
                                                    fill={`url(#cog-grad-${mode.code})`}
                                                    stroke="#1a0c02" strokeWidth="1"
                                                    transform={`rotate(${(360 / teethCount) * i} 50 50)`}
                                                />
                                            ))}
                                        </g>

                                        <circle cx="50" cy="50" r="40" fill={`url(#cogGrad-${mode.code})`} stroke="#1a0c02" strokeWidth="2" />

                                        <circle 
                                            cx="50" cy="50" r="30"
                                            fill={isActive ? mode.color : "#120d07"}
                                            stroke="#3a2810" strokeWidth="1.5"
                                            style={{ transition: "fill 0.3s ease", filter: isActive ? `drop-shadow(0 0 8px ${mode.color})` : "none" }}
                                        />

                                    {mode.modeNum === 1 ? (
                                            <rect x="45" y="20" width="10" height="60" rx="2" fill="#573e19" stroke="#1a0c02" strokeWidth="1" />
                                    ) : (
                                            <g className="cross-spokes">
                                                <rect x="45" y="20" width="10" height="60" rx="2" fill="#573e19" stroke="#1a0c02" strokeWidth="1" />
                                                <rect x="45" y="20" width="10" height="60" rx="2" fill="#573e19" stroke="#1a0c02" strokeWidth="1" transform="rotate(90 50 50)" />
                                            </g>
                                    )}

                                    <circle cx="50" cy="50" r="10" fill="#f7d08b" stroke="#1a0c02" strokeWidth="1" /> 

                                    </svg>

                                </div>

                            </div>

                        </div>

                    );
                })}
            </div>

        </div>

    );

}