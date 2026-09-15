import React, { useState, useEffect } from "react";
import '../styles/ClockworkFloor.css';
import CentralHubFace from "../components/ClockworkFloor/CentralHubFace";

export default function ClockworkFloor({ 
    hours, 
    minutes, 
    mode,
    lightPower = true,
    lightDimmer = 100 ,
    lightSpeed = 50,
    activeDice = {},
    bpm = 120
}) {

    const secondaryHourAngles = [30, 60, 120, 150, 210, 240, 300, 330];
    const cardinalHourAngles = [0, 90, 180, 270];
    const halfHourAngles = Array.from({ length: 12 }, (_, i) => i * 30 + 15);

    const isSpotlightActive = lightPower && !!activeDice.D4;
    const baseOpacity = lightPower ? (lightDimmer / 100) : 0;
    const floorAmbientOpacity = isSpotlightActive ? baseOpacity * 0.35 : baseOpacity;

    const normalizedSpeed = Math.max(1, lightSpeed);
    const orbitDuration = (13 - (normalizedSpeed / 100) * 10.5).toFixed(2);

    const [strobeState, setStrobeState] = useState(false);
    const isStrobeActive = lightPower && !!activeDice.D6;

    useEffect(() => {
        if (!isStrobeActive) {
            setStrobeState(false);
            return;
        }

        const intervalMs = Math.max(70, (6000 / (bpm || 120)) / 2);
        const timer = setInterval(() => {
            setStrobeState(prev => !prev);
        }, intervalMs);

        return () => clearInterval(timer);

    }, [isStrobeActive, bpm]);

    const discoRotationDuration = (18 - (normalizedSpeed / 100) * 16.5).toFixed(2);
    const discoOpacity = baseOpacity * (strobeState ? 0.95 : 0.3);

    return (
        <div 
            className="clockwork-floor-stage">
            <svg
                className="clockwork-floor-svg"
                viewBox="0 0 600 600"
            >

                <defs>
                    <linearGradient id="agedBronzeEdgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f7d08b" />
                        <stop offset="35%" stopColor="#b5873d" />
                        <stop offset="70%" stopColor="#6e4f1b" />
                        <stop offset="100%" stopColor="#302005" />
                    </linearGradient>

                    <radialGradient id="mahoganyThresholdGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="80%" stopColor="#6e2f0e" />
                        <stop offset="92%" stopColor="#471d07" />
                        <stop offset="100%" stopColor="#240c02" />
                    </radialGradient>

                    <linearGradient id="darkIronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3a3530" />
                        <stop offset="50%" stopColor="#1f1c19" />
                        <stop offset="100%" stopColor="#0d0b0a" />
                    </linearGradient>

                    <radialGradient id="clockworkPitGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#181008" />
                        <stop offset="60%" stopColor="#0a0603" />
                        <stop offset="100%" stopColor="#020101" />
                    </radialGradient>

                    <radialGradient id="brassBearingGrad" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#fff2be" />
                        <stop offset="40%" stopColor="#d4af37" />
                        <stop offset="80%" stopColor="#7a5510" />
                        <stop offset="100%" stopColor="#332002" />
                    </radialGradient>

                    <radialGradient id="innerGlassGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="rgba(240, 220, 160, 0.25)" />
                        <stop offset="70%" stopColor="rgba(180, 140, 70, 0.15)" />
                        <stop offset="100%" stopColor="rgba(40, 25, 10, 0.4)" />
                    </radialGradient>

                    <filter id="bronzeEdgeShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000000" floodOpacity="0.85" />
                    </filter>

                    <radialGradient id="spotlightBeamGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                        <stop offset="25%" stopColor="#fff8df" stopOpacity="0.8" />
                        <stop offset="60%" stopColor="#ffd700" stopOpacity="0.45" />
                        <stop offset="85%" stopColor="#b5873d" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#6e4f1b" stopOpacity="0" />
                    </radialGradient>

                    <pattern id="discoFlecksPattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                        <circle cx="12" cy="12" r="3" fill="#ffffff" opacity="0.95" />
                        <circle cx="38" cy="14" r="2" fill="#fff5d0" opacity="0.8" />
                        <circle cx="22" cy="32" r="3.5" fill="#ffd700" opacity="0.85" />
                        <circle cx="42" cy="40" r="2.5" fill="#ffffff" opacity="0.9" />
                    </pattern>

                </defs>

                {/* Layer 2: Magogany Threshold */}
                <circle 
                    className="mahogany-outer-floor"
                    cx="300"
                    cy="300"
                    r="280"
                    fill="url(#mahoganyThresholdGrad)"
                    stroke="#1c0901"
                    strokeWidth="2"
                    filter="url(#floorShadow)"
                />
                
                {/* Layer 6: Deep Pit Void */}
                <circle 
                    className="clockwork-pit-void"
                    cx="300"
                    cy="300"
                    r="238"
                    fill="url(#clockworkPitGrad)"
                    style={{
                        opacity: floorAmbientOpacity,
                        transition: 'opacity 0.4s ease-in-out'
                    }}
                />

                {/* D6 Strobe Disco Ball */}

                {isStrobeActive && (
                    <g
                        className="disco-ball-layer"
                        style={{
                            transformOrigin: '300px 300px',
                            animation: `discoRotate ${discoRotationDuration}s linear infinite`,
                            opacity: discoOpacity,
                            transition: 'opacity 0.08s ease-in-out'
                        }}
                    >

                        <circle 
                            cx="300" cy="300" r="238"
                            fill="url(#discoFlecksPattern)"
                            filter="url(#lunarGlow)"
                        />
                        
                    </g>
                )}


                {/* Glass Floor Overlay */}
                <circle 
                    className="glass-surface-overlay"
                    cx="300"
                    cy="300"
                    r="238"
                    fill="url(#innerGlassGrad)"
                />

                {/* Layer 4: Inner Dark Metal Bezel */}
                <circle 
                    className="dark-iron-inner-rim"
                    cx="300"
                    cy="300"
                    r="244"
                    fill="none"
                    stroke="url(#darkIronGrad)"
                    strokeWidth="12"
                />

                {/* Layer 3: Outer Accent Trim */}
                <circle cx="300" cy="300" r="250" fill="none" stroke="url(#agedBronzeEdgeGrad)" strokeWidth="3" />

                {/* Layer 1: Bronzed Beveled Watch Rim */}
                <circle 
                    className="brass-edge-outer"
                    cx="300"
                    cy="300"
                    r="282"
                    fill="none"
                    stroke="url(#agedBronzeEdgeGrad)"
                    strokeWidth="14"
                />

                {/* Layer 5: Central Hub Wall Collar */}
                <circle cx="300" cy="300" r="120" fill="none" stroke="url(#darkIronGrad)" strokeWidth="8" />
                <circle cx="300" cy="300" r="125" fill="none" stroke="url(#agedBronzeEdgeGrad)" strokeWidth="2" />
                <circle cx="300" cy="300" r="115" fill="none" stroke="url(#agedBronzeEdgeGrad)" strokeWidth="2" /> 

                {/* Spoke Grid Assembly */}
                <g className="spoke-grid-assembly">
                    {halfHourAngles.map(deg => (
                        <g key={`spoke-30min-${deg}`} transform={`rotate(${deg} 300 300)`}>
                            <line x1="300" y1="176" x2="300" y2="120" stroke="#d4af37" strokeWidth="1.5" opacity="0.85" />
                            <circle cx="300" cy="120" r="3.5" fill="url(#brassBearingGrad)" stroke="#1c0901" strokeWidth="0.6" />
                        </g>
                    ))}

                    {secondaryHourAngles.map(deg => (
                        <g key={`spoke-secondary-${deg}`} transform={`rotate(${deg} 300 300)`}>
                            <line x1="300" y1="176" x2="300" y2="50" stroke="#b5873d" strokeWidth="2.5" />
                            <circle cx="300" cy="75" r="6" fill="url(#brassBearingGrad)" stroke="#1c0901" strokeWidth="0.8" />
                        </g>
                    ))}

                    {cardinalHourAngles.map(deg => (
                        <g key={`spoke-cardinal-${deg}`} transform={`rotate(${deg} 300 300)`}>
                            <line x1="300" y1="176" x2="300" y2="30" stroke="#f7d08b" strokeWidth="4" />
                            <circle cx="300" cy="50" r="9" fill="url(#brassBearingGrad)" stroke="#1c0901" strokeWidth="1" />
                        </g>
                    ))}

                </g>

                {/* D4 SPOTLIGHT ORBITING BEAM OVERLAY */}
                {isSpotlightActive && (
                    <g 
                        className="spotlight-orbit-group"
                        style={{
                            transformOrigin: '300px 300px',
                            animation: `spotlightOrbit ${orbitDuration}s linear infinite`
                        }}
                    >
                        <circle cx="300" cy="175" r="105" fill="url(#spotlightBeamGrad)" filter="url(#bronzeEdgeShadow)" />
                        <circle 
                            cx="300" 
                            cy="175" 
                            r="42" 
                            fill="#ffffff" 
                            opacity="0.85" 
                        />
                    </g>
                )}

                 {/* D8 WildCard Anthem Confetti */}

                {lightPower && activeDice.D8 && (
                    <g className="anthem-floor-crescendo">

                        <circle 
                            cx="300" cy="300" r="180"
                            fill="none" stroke="#ffd700" 
                            strokeWidth="6"
                            className="anthem-shockwave-ring"
                        />

                        {Array.from({ length: 16 }).map((_, i) => {
                            
                            const angle = (i / 16) * 360;
                            const dist = 180 + (i % 4) * 20;
                            const dx = (Math.cos((angle * Math.PI) / 180) * dist).toFixed(1);
                            const dy = (Math.sin((angle * Math.PI) / 180) * dist).toFixed(1);
                            
                            return (
                                <circle 
                                    key={`confetti-${i}`}
                                    className={`confetti-particle particle-${i}`}
                                    cx="300" cy="300"
                                    r={i % 2 === 0 ? "8" : "5"}
                                    fill={i % 3 === 0 ? "#ffd700" : i % 2 === 0 ? "#fff5d0" : "#ff4500"}
                                    style={{
                                        '--dx': `${dx}px`,
                                        '--dy': `${dy}px`,
                                        animationDelay: `${(i % 4) * 0.2}s`
                                    }}
                                />
                            );
                        })}
                    </g>
                )}

                {/* Layer 7: Compact Central Hub Face */}
                <CentralHubFace 
                    hours={hours} 
                    minutes={minutes} 
                    lightPower={lightPower}
                />

            </svg>
        </div>
    );
    
}