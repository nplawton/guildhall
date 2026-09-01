import React from "react";
import '../styles/ClockworkFloor.css';
import CentralHubFace from "../components/ClockworkFloor/CentralHubFace";

export default function ClockworkFloor({ hours, minutes, mode }) {

    const secondaryHourAngles = [30, 60, 120, 150, 210, 240, 300, 330];
    const cardinalHourAngles = [0, 90, 180, 270];
    const halfHourAngles = Array.from({ length: 12 }, (_, i) => i * 30 + 15);

    return (
        <div className="clockwork-floor-stage">
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

                {/* Layer 7: Compact Central Hub Face (Resting inside Layer 5) */}
                <CentralHubFace hours={hours} minutes={minutes} />

            </svg>
        </div>
    );
    
}