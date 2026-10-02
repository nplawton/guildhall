import React, { useState, useEffect } from "react";
import '../styles/ClockworkFloor.css';
import CentralHubFace from "../components/ClockworkFloor/CentralHubFace";

export default function ClockworkFloor({ 
    hours = 10, 
    minutes = 10, 
    mode,
    lightPower = true,
    lightSpeed = 50,
    lightDimmer = 100,
    activeDice = {},
    bpm = 120,
    isReversed = false,
    isDepleted = false,
    currentModeCode,
    activeModeObj,
    currentStep,
    sweepPassCount = 1,
    constellationNodes
}) {

    const secondaryHourAngles = [30, 60, 120, 150, 210, 240, 300, 330];
    const cardinalHourAngles = [0, 90, 180, 270];
    const halfHourAngles = Array.from({ length: 12 }, (_, i) => i * 30 + 15);

    const isLightEffective = lightPower && !isDepleted;
    const baseOpacity = isLightEffective ? (lightDimmer / 100) : 0;

    const isSpotlightActive = isLightEffective && !!activeDice.D4;
    const spotlightOpacity = isSpotlightActive ? baseOpacity : 0;

    const normalizedSpeed = Math.max(1, lightSpeed);
    const orbitDuration = (13 - (normalizedSpeed / 100) * 10.5).toFixed(2);

    const [strobeState, setStrobeState] = useState(false);
    const isStrobeActive = isLightEffective && !!activeDice.D6;

    const routine = activeModeObj?.routine;

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

    const isFogActive = isLightEffective && !!activeDice.D20;
    const steamPressureOpacity = isFogActive ? Math.min(0.85, 0.35 + (bpm / 200) * 0.5) : 0;
    const swirlDuration = (25 - (bpm / 180) * 18).toFixed(2);

    const createWedgePath = (index, totalWedges = 24, rInner = 120, rOuter =238) => {
        const angleStep = 360 / totalWedges;
        const startAngle = (index  * angleStep - 90) * (Math.PI / 180);
        const endAngle = ((index + 1) * angleStep - 90) * (Math.PI / 180);

        const x1Inner = 300 + rInner * Math.cos(startAngle);
        const y1Inner = 300 + rInner * Math.sin(startAngle);
        const x2Inner = 300 + rInner * Math.cos(endAngle);
        const y2Inner = 300 + rInner * Math.sin(endAngle);

        const x1Outer = 300 + rOuter * Math.cos(startAngle);
        const y1Outer = 300 + rOuter * Math.sin(startAngle);
        const x2Outer = 300 + rOuter * Math.cos(endAngle);
        const y2Outer = 300 + rOuter * Math.sin(endAngle);

        return `M ${x1Inner} ${y1Inner} L ${x1Outer} ${y1Outer} A ${rOuter} ${rOuter} 0 0 1 ${x2Outer} ${y2Outer} L ${x2Inner} ${y2Inner} A ${rInner} ${rInner} 0 0 0 ${x1Inner} ${y1Inner} Z`;
    }

    const isLunarBeat = currentModeCode === "PU" && (currentStep % 4 === 0);

    return (
        <div 
            className={`clockwork-floor-stage ${isReversed ? 'is-reversed' : ''}`}>
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
                        <stop offset="0%" stopColor="#000000" />
                        <stop offset="60%" stopColor="#050302" />
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

                    <radialGradient id="underGlassSteamGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.6" />
                        <stop offset="45%" stopColor="#e6f0fa" stopOpacity="0.35" />
                        <stop offset="75%" stopColor="#b0c4de" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </radialGradient>

                    <filter id="steamBlur" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="6" />
                    </filter>

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

                    <linearGradient id="emeraldBeamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="70%" stopColor="#00a341" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#00ff66" stopOpacity="0.85" />
                    </linearGradient>

                    <linearGradient id="radarPhosphorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(0, 255, 255, 0.6)" />
                        <stop offset="50%" stopColor="rgba(0, 153, 255, 0.25)" />
                        <stop offset="100%" stopColor="rgba(0, 20, 50, 0.0)" />
                    </linearGradient>

                    <filter id="steampunkLensGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>

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
                />

                {/* Dynamic Wedges */}
                <g className="dance-floor-wedges-matrix">
                    {Array.from({ length: 24 }).map((_, index) => {
                        let wedgeFill = "transparent";
                        let wedgeOpacity = baseOpacity;

                        if(isLightEffective && routine && routine.getTileColor) {
                            wedgeFill = routine.getTileColor(
                                index, 
                                currentStep, 
                                minutes, 
                                sweepPassCount, 
                                isReversed
                            );
                            wedgeOpacity = baseOpacity * 0.85;
                        }

                        let wedgeTransition =  "fill 0.3s ease, opacity 0.3s ease";

                        const rawStep = currentStep % 24;
                        const activeBeamWedge = isReversed ? (24 - rawStep) % 24 : rawStep;
                        const isBeamHead = index === activeBeamWedge

                        if (currentModeCode === "PI") {
                            wedgeTransition = "none";
                        } else if (currentModeCode === "PU") {
                            wedgeTransition = "fill 0.8s ease-in-out, opacity 0.8s ease-in-out"
                        } else if (currentModeCode === "G" || currentModeCode === "BU") {
                            wedgeTransition = "fill 0.15s ease-out, opacity 0.15s ease-out";
                        } 

                        return (
                            <path 
                                key={`floor-wedge-${index}`}
                                d={createWedgePath(index)}
                                fill={wedgeFill}
                                opacity={wedgeOpacity}
                                stroke="#1a0c02"
                                strokeWidth="1"
                                filter={isBeamHead ? "url(#steampunkLensGlow)" : "none"}
                                style={{
                                    transition: wedgeTransition
                                }}
                            />
                        );
                    })}
                   
                </g>
                
                {/* Beam Sweeping */}
                {currentModeCode === "BU" && Array.isArray(constellationNodes) && constellationNodes.length > 0 && (
                    <g className="cog-constellation-layer">

                        {(() => {
                            const rawStep = currentStep % 24;
                            const activeBeamWedge = isReversed ? (24 - rawStep) % 24 : rawStep;

                            const renderedNodes = constellationNodes.map((node, i) => {
                                const angleRad = (node.wedgeIndex * 15 - 90) * (Math.PI / 180);
                                const x = 300 + Math.cos(angleRad) * node.dist;
                                const y = 300 + Math.sin(angleRad) * node.dist;

                                const distToBeam = isReversed
                                    ? (node.wedgeIndex - activeBeamWedge + 24) % 24
                                    : (activeBeamWedge - node.wedgeIndex + 24) % 24
                                ;

                                let stage = "INACTIVE";
                                let strokeColor = "rgba(0, 153, 255, 0.35)";
                                let fillColor = "rgba(0, 80, 160, 0.2)";
                                let auraGlow = "rgba(0, 153, 255, 0.08)";
                                let nodeScale = 1.3;

                                if(distToBeam >= 21 && distToBeam <= 23) {
                                    stage = "APPROACH";
                                    strokeColor = "#5cbeff";
                                    fillColor = "rgba(0, 153, 255, 0.4)"; 
                                    auraGlow = "rgba(0, 180, 255, 0.35)";
                                    nodeScale = 1.6;
                                } else if (distToBeam === 0) {
                                    stage = "INTERSECT";
                                    strokeColor = "#ffd700";
                                    fillColor = "#FF9900";
                                    auraGlow = "rgba(255, 153, 0, 0.85)";
                                    nodeScale = 2.2;
                                } else if (distToBeam >= 1 && distToBeam <= 3) {
                                    stage = "RECEDE";
                                    const fade = 1 - (distToBeam * 0.28);
                                    strokeColor = `rgba(92, 190, 255, ${fade})`;
                                    fillColor = `rgba(0, 153, 255, ${fade * 0.6})`;
                                    auraGlow = `rgba(0, 153, 255, ${fade * 0.4})`;
                                    nodeScale = 1.7;
                                }

                                return { x, y, id: i, stage, strokeColor, fillColor, auraGlow, nodeScale, type: node.type };
                            });

                            return (
                                <g key={`steampunk-constellation-Q${activeBeamWedge}`}>
                                    
                                    {renderedNodes.length >= 2 && (
                                        <line x1={renderedNodes[0].x} y1={renderedNodes[0].y} x2={renderedNodes[1].x} y2={renderedNodes[1].y} stroke="#5cbeff" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.45" />
                                    )}
                                    {renderedNodes.length >= 3 && (
                                        <line x1={renderedNodes[1].x} y1={renderedNodes[1].y} x2={renderedNodes[2].x} y2={renderedNodes[2].y} stroke="#5cbeff" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.45" />
                                    )}

                                    {renderedNodes.map(node => (
                                        <g 
                                            key={`steampunk-node-${node.id}`} 
                                            transform={`translate(${node.x}, ${node.y}) scale(${node.nodeScale})`}
                                            style={{ transition: "transform 0.25s ease-out, filter 0.25s ease-out" }}
                                        >
                                            
                                            <circle 
                                                cx="0" cy="0" r="10" 
                                                fill={node.auraGlow} 
                                                style={{ filter: `drop-shadow(0 0 6px ${node.strokeColor})` }} 
                                            />

                                            <circle 
                                                cx="0" cy="0" r="10" 
                                                fill="none" 
                                                stroke={node.strokeColor} 
                                                strokeWidth="0.8" 
                                                strokeDasharray="2 2" 
                                            />

                                            {node.type === "cog" && (
                                                <g>
                                                    <circle cx="0" cy="0" r="4" fill={node.fillCore} stroke={node.strokeColor} strokeWidth="1" />
                                                    {[0, 60, 120, 180, 240, 300].map(deg => (
                                                        <line key={`cog-${deg}`} x1="0" y1="-4" x2="0" y2="-7" stroke={node.strokeColor} strokeWidth="1.2" transform={`rotate(${deg})`} />
                                                    ))}
                                                </g>
                                            )}

                                            {node.type === "keyhole" && (
                                                <g>
                                                    <circle cx="0" cy="-2" r="2.5" fill={node.fillCore} stroke={node.strokeColor} strokeWidth="0.8" />
                                                    <polygon points="-1.8,1 1.8,1 2.5,5 -2.5,5" fill={node.fillCore} stroke={node.strokeColor} strokeWidth="0.8" />
                                                </g>
                                            )}

                                            {node.type === "gear" && (
                                                <g>
                                                    <circle cx="0" cy="0" r="5" fill="none" stroke={node.strokeColor} strokeWidth="1.2" />
                                                    <circle cx="0" cy="0" r="2" fill={node.fillCore} />
                                                    {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                                                        <rect key={`gear-${deg}`} x="-1" y="-7" width="2" height="2" fill={node.strokeColor} transform={`rotate(${deg})`} />
                                                    ))}
                                                </g>
                                            )}

                                            {node.type === "escapement" && (
                                                <g>
                                                    <circle cx="0" cy="0" r="3.5" fill="none" stroke={node.strokeColor} strokeWidth="1" />
                                                    <circle cx="0" cy="0" r="1.5" fill={node.fillCore} />
                                                    {[0, 72, 144, 216, 288].map(deg => (
                                                        <path 
                                                            key={`escapement-${deg}`} 
                                                            d="M 0 -3.5 L 2 -7 L -1 -6 Z" 
                                                            fill={node.strokeColor} 
                                                            transform={`rotate(${deg})`} 
                                                        />
                                                    ))}
                                                </g>
                                            )}
                                        </g>
                                    ))}
                                </g>
                            );

                        })()}

                    </g> 
                )}

                {/* Solar Flare "O" */}
                {currentModeCode === "O" && !isDepleted && (
                    <g className="solar-flare-cinematic-layer">

                        {(() => {
                            const rawStep = currentStep % 24;

                            const cx = 300;
                            const cy = 300;

                            const sunX = 140;
                            const sunY = 300;

                            const solarBallRadius = rawStep <= 15 ? 8 + (rawStep * 1.4) : 0;

                            const trajProgress = (rawStep - 16) / 3;
                            const trajAngleRad = (-Math.PI) + (trajProgress * (Math.PI * 0.82));
                            const fireX = cx + Math.cos(trajAngleRad) * 160;
                            const fireY = cy + Math.sin(trajAngleRad) * 110;

                            const runicText = "I CAST FIREBALL!!";
                            const visibleChars = Math.min(runicText.length, Math.floor((rawStep / 15) * runicText.length));
                            const currentRunicStr = runicText.substring(0, visibleChars);

                            return (
                                <g key={`solar-flare-step-${rawStep}`}>

                                    <defs>
                                        <path id="topRunicArcPath" d="M 180 230 A 130 130 0 0 1 420 230" />
                                        <radialGradient id="fireballGlow" cx="50%" cy="50%" r="50%">
                                            <stop offset="0%" stopColor="#ffffff" />
                                            <stop offset="35%" stopColor="#ffcc00" />
                                            <stop offset="75%" stopColor="#ff3300" />
                                            <stop offset="100%" stopColor="rgba(255, 51, 0, 0)" />
                                        </radialGradient>
                                    </defs>

                                    {rawStep <= 22 && (
                                        <text 
                                            fill="#ff6600" 
                                            fontSize="25"   fontWeight="bold"   letterSpacing="5"
                                            style={{
                                                filter: "drop-shadow(0 0 10px #ff3300)"
                                            }}
                                        >
                                            <textPath href="#topRunicArcPath" startOffset="50%" textAnchor="middle">
                                                {currentRunicStr}
                                            </textPath>
                                        </text>
                                    )}

                                    {rawStep <= 15 && (
                                        <g transform={`translate(${sunX}, ${sunY})`}>
                                            
                                            <circle 
                                                cx="0" cy="0"
                                                r={solarBallRadius + 8}
                                                fill="rgba(255, 102, 0, 0.4)"
                                                style={{
                                                    filter: "drop-shadow(0 0 16px #ff3300)"
                                                }}
                                            />

                                            <circle 
                                                cx="0" cy="0"
                                                r={solarBallRadius}
                                                fill="url(#fireballGlow)"
                                            />

                                        </g>
                                    )}

                                    {rawStep >= 16 && rawStep <= 19 && (
                                        <g transform={`translate(${fireX}, ${fireY})`}>

                                            <circle 
                                                cx="0" cy="0" r="24"
                                                fill="rgba(255, 51, 0, 0.45)"
                                                style={{
                                                    filter: "drop-shadow(0 0 18px #ffcc00)"
                                                }}
                                            />

                                            <circle 
                                                cx="0" cy="0" r="15"
                                                fill="url(#fireballGlow)"
                                            />

                                            <line x1="-10" y1="10" x2="-25" y2="22" stroke="#ff9900" strokeWidth="2.5" opacity="0.8" />

                                             <line x1="-12" y1="-5" x2="-28" y2="-14" stroke="#ff3300" strokeWidth="2" opacity="0.7" />

                                        </g>
                                    )}

                                    {rawStep >= 20 && rawStep <= 23 && (
                                        <g transform="translate(435, 365)" >

                                            <circle 
                                                cx="0" cy="0"
                                                r={rawStep === 20  ? 30 : 65}
                                                fill="none"
                                                stroke="#ffcc00"
                                                strokeWidth="5"
                                                opacity={rawStep === 20 ? 1.0 : 0.5}
                                                style={{
                                                    filter: "drop-shadow(0 0 20px #ff3300)"
                                                }}
                                            />

                                            <circle 
                                                cx="0" cy="0"
                                                r={rawStep === 20 ? 45 : 85}
                                                fill="rgba(255, 51, 0, 0.25)"
                                            />

                                        </g>
                                    )}

                                </g>
                            );

                        })()}

                    </g>
                )}

                {/* Celestial Sky Orbit */}
                {currentModeCode === "CY" && !isDepleted && (
                    <g className="days-fly-celestial-layer" style={{ pointerEvents: "none" }}>

                        {(() => {

                            const rawStep = currentStep % 24;
                            const effectiveStep = isReversed ? (24 - rawStep) % 24 : rawStep;

                            const cx = 300;
                            const cy = 300;

                            const angleRad = (-Math.PI) + (effectiveStep / 24) * (Math.PI * 2);
                            const celX = cx + Math.cos(angleRad) * 150;
                            const celY = cy + Math.sin(angleRad) * 105;

                            const isNight = effectiveStep >= 10 && effectiveStep <= 17;

                            return (

                                <g key={`celestial-step-${effectiveStep}`} transform={`translate(${celX}, ${celY})`}>

                                    {!isNight ? (
                                        <g>

                                            <circle 
                                                cx="0" cy="0" r="14"
                                                fill="#ffcc00"
                                                style={{
                                                    filter: "drop-shadow(0 0 12px #ff9900)"
                                                }}
                                            />

                                            <circle 
                                                cx="0" cy="0" r="7"
                                                fill="#ffffff"
                                            />

                                        </g>
                                    ) : (
                                        <g>

                                            <circle 
                                                cx="0" cy="0" r="11"
                                                fill="#e6e6ff"
                                                style={{
                                                    filter: "drop-shadow(0 0 12px #99ccff)"
                                                }}
                                            />

                                            <circle 
                                                cx="3" cy="2" r="9"
                                                fill="#0d001a"
                                            />

                                        </g>
                                    )}

                                </g>

                            );

                        })()}

                    </g>
                )}

                {currentModeCode === "Y" && !isDepleted && (currentStep % 24) === 23 && (

                    <g className="electric-clap-layer" style={{ pointerEvents: "none" }}>

                        <defs>
                            <radialGradient id="electricBurst" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#ffffff" />
                                <stop offset="40%" stopColor="#e0ffff" />
                                <stop offset="80%" stopColor="#00ffff" />
                                <stop offset="100%" stopColor="rgba(0, 255, 255, 0)" />
                            </radialGradient>
                        </defs>

                        <g transform="translate(300, 140)">

                            <circle cx="0" cy="0" r="45" fill="url(#electricBurst)" style={{ filter: "drop-shadow(0 0 20px #00ffff" }} />

                            <path d="M 0 0 L -15 -25 L -5 -20 L -20 -40" stroke="#ffffff" strokeWidth="3" fill="none" />
                            <path d="M 0 0 L 15 -25 L 5 -20 L 20 -40" stroke="#ffffff" strokeWidth="3" fill="none" />
                            <path d="M 0 0 L -25 10 L -15 15 L -35 25" stroke="#e0ffff" strokeWidth="2.5" fill="none" />
                            <path d="M 0 0 L 25 10 L 15 15 L 35 25" stroke="#e0ffff" strokeWidth="2.5" fill="none" />

                        </g>

                    </g>

                )}

                {/* Midnight Theatre Strobe & Tick Accents */}
                {currentModeCode === "R" && !isDepleted && (
                    <g className="midnight-theater-strobe-layer" style={{ pointerEvents: "none" }}>

                        {(() => {
                            const rawStep = currentStep % 24;

                            if(rawStep >= 15 && rawStep <= 22) {
                                const isOddBeat = rawStep % 2 !== 0;

                                return (
                                    <g key={`strobe-step-${rawStep}`}>

                                        <circle 
                                            cx="300" cy="300" r="180"
                                            fill="none"
                                            stroke={isOddBeat ? "#ff0055" : "#ffffff"}
                                            strokeWidth={isOddBeat ? "4" : "0"}
                                            opacity="0.8"
                                            style={{
                                                filter: "drop-shadow(0 0 15px #ff0055)"
                                            }}
                                        />

                                        <circle 
                                            cx="300" cy="300" r="220"
                                            fill="none"
                                            stroke={isOddBeat ? "#ffffff" : "#ff0055"}
                                            strokeWidth="3"
                                            strokeDasharray="8 12"
                                            opacity="0.9"
                                        />

                                    </g>
                                );
                            }

                            return null;
                        })()}

                    </g>
                )}

                {/* BackWall RhineStone Fireworks & Rose Dancers */}
                {currentModeCode === "RS" && !isDepleted && (

                    <g className="line-dancing-sparkle-layer" style={{ pointerEvents: "none" }}>

                        {(() => {

                            const rawStep = currentStep % 24;
                            const isClapBeat = [5, 11, 15, 22, 23].includes(rawStep);

                            const dancerWedges = [0, 6, 12, 18];

                            return (

                                <g key={`ld-step-${rawStep}`}>

                                    {dancerWedges.map((wIdx) => {

                                        const angleRad = (-Math.PI / 2) + (wIdx * (Math.PI / 12));

                                        const rX = 300 + Math.cos(angleRad) * 160;
                                        const rY = 300 + Math.sin(angleRad) * 110;

                                        return (

                                            <g key={`rose-${wIdx}`} transform={`translate(${rX}, ${rY})`}>

                                                <circle cx="0" cy="0" r="16" fill="rgba(255, 0, 85, 0.25)"  style={{ filter: "drop-shadow(0 0 10px #ff0055)" }} />

                                                <circle cx="0" cy="0" r="11" fill="#e60039" stroke="#ffffff" strokeWidth="1.5" />
                                                <path d="M -6 -2 Q 0 -8 6 -2 Q 8 4 0 8 Q -8 4 -6 -2" fill="#ff3366" />
                                                <circle cx="0" cy="0" r="5" fill="#ffe135" stroke="#ffffff" strokeWidth="0.8" />

                                                <circle cx="0" cy="0" r="2" fill="#ffffff" style={{ filter: "drop-shadow(0 0 4px #ffffff)" }} />

                                            </g>

                                        );

                                    })}

                                    {isClapBeat && (
                                        <g className="backwall-fireworks">
                                            {[ { x: 180, y: 70 }, { x: 300, y: 40 }, { x: 420, y: 70 } ].map((loc, fIdx) => (
                                                <g key={`fw-burst-${fIdx}`} transform={`translate(${loc.x}, ${loc.y})`}>
                                                    <circle cx="0" cy="0" r="22" fill="#ffffff" style={{ filter: "drop-shadow(0 0 14px #ffe135)" }} />
                                                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => (
                                                        <g key={`fw-ray-${deg}`} transform={`rotate(${deg})`}>
                                                            <line x1="0" y1="-8" x2="0" y2="-38" stroke="#ffe135" strokeWidth="2" />
                                                            <circle cx="0" cy="-42" r="2.5" fill="#ffffff" style={{ filter: "drop-shadow(0 0 5px #0099ff)" }} />
                                                        </g>
                                                    ))}
                                                </g>
                                            ))}
                                        </g>
                                    )}

                                </g>

                            );

                        })()}

                    </g>

                )}

                {/* D6 Strobe Disco Ball */}

                {isStrobeActive && (
                    <g
                        className="disco-ball-layer"
                        style={{
                            transformOrigin: '300px 300px',
                            animation: `discoRotate ${discoRotationDuration}s linear infinite`,
                            animationDirection: isReversed ? 'reverse' : 'normal',
                            opacity: discoOpacity,
                            transition: 'opacity 0.08s ease-in-out'
                        }}
                    >

                        <circle 
                            cx="300" cy="300" r="238"
                            fill="url(#discoFlecksPattern)"
                        />
                        
                    </g>
                )}

                {isFogActive && (
                    <g
                        className="under-glass-steam-layer"
                        style={{
                            transformOrigin: '300px 300px',
                            animation: `underGlassSwirl ${swirlDuration}s linear infinite`,
                            animationDirection: isReversed ? 'reverse' : 'normal',
                            opacity: steamPressureOpacity,
                            transition: 'opacity 0.4s ease-in-out'
                        }}
                    >
                        <circle cx="300" cy="300" r="230" fill="url(#underGlassSteamGrad)" />
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
                            animation: `spotlightOrbit ${orbitDuration}s linear infinite`,
                            animationDirection: isReversed ? 'reverse' : 'normal',
                            opacity: spotlightOpacity,
                            transition: 'opacity 0.15s ease-in-out'
                        }}
                    >
                        <circle cx="300" cy="100" r="45" fill="url(#spotlightBeamGrad)" filter="url(#bronzeEdgeShadow)" />
                        <circle 
                            cx="300" 
                            cy="100" 
                            r="18" 
                            fill="#ffffff" 
                            opacity="0.9" 
                        />
                    </g>
                )}

                {/* D8 WildCard Anthem Confetti */}

                {isLightEffective && activeDice.D8 && (
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

                {isFogActive && (
                    <g
                        className="outer-steam-edge-assembly"
                        style={{
                            opacity: steamPressureOpacity,
                            transition: 'opacity 0.4s ease-in-out'
                        }}
                    >

                        <circle 
                        
                            cx="300" cy="300" r="238"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="24"
                            filter="url(#steamBlur)"
                            opacity="0.6"
                        />
                        <circle 
                            cx="300" cy="300" r="248"
                            fill="none"
                            stroke="#e0f0ff"
                            strokeWidth="18"
                            filter="url(#steamBlur)"
                            opacity="0.35"
                        />

                    </g>
                )}

                {/* Layer 7: Compact Central Hub Face */}
                <CentralHubFace 
                    hours={hours} 
                    minutes={minutes} 
                    lightPower={lightPower}
                    isDepleted={isDepleted}
                    currentModeCode={currentModeCode}
                    activeModeObj={activeModeObj}
                    isLunarBeat={isLunarBeat}
                    currentStep={currentStep}
                />

                {/* Outer Bezel Frame Rims */}
                <circle cx="300" cy="300" r="250" fill="none" stroke="url(#agedBronzeEdgeGrad)" strokeWidth="3" />
                <circle 
                    className="brass-edge-outer"
                    cx="300"
                    cy="300"
                    r="282"
                    fill="none"
                    stroke="url(#agedBronzeEdgeGrad)"
                    strokeWidth="14"
                />

            </svg>
        </div>
    );
    
}