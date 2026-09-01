import React from "react";
import './CogSpeaker.css';

export default function CogSpeaker({ active = true, side = "left", speed = 120 }) {

    const animDuration = (60 / speed) * 8;

    return (

        <div className={`cog-speaker-container ${active ? "active" : ""}`}>

            <svg viewBox="0 0 120 120" className="cog-speak-svg">
                <defs>
                    <radialGradient id={`cogBrassGrad-${side}`} cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#f7d08b" />
                        <stop offset="40%" stopColor="#b5873d" />
                        <stop offset="80%" stopColor="#6e4f1b" />
                        <stop offset="100%" stopColor="#241402" />
                    </radialGradient>

                    <radialGradient id={`speakConeGrad-${side}`} cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#3a3025" />
                        <stop offset="60%" stopColor="#1a140d" />
                        <stop offset="100%" stopColor="#050403" />
                    </radialGradient>
                </defs>

                {/* Rotating Outer Gear Chassis */}
                <g
                    className={`cog-outer-ring ${active ? "spinning" : ""}`}
                    style={{ animationDuration: `${animDuration}s`, animationDirection: side === "left" ? "normal" : "reverse" }}
                >

                  {Array.from({ length: 8 }).map((_, i) => (
                    <rect 
                        key={i}
                        x="52" y="2" width="16" height="16" rx="3"
                        fill={`url(#cogBrassGrad-${side})`}
                        stroke="#1a1205" strokeWidth="1"
                        transform={`rotate(${i * 45} 60 60)`}
                    />
                  ))}

                  {/* Outer Ring Rim */}
                  <circle cx="60" cy="60" r="48" fill={`url(#cogBrassGrad-${side})`} stroke="#1a1205" strokeWidth="2" />
                  <circle cx="60" cy="60" r="42" fill="none" stroke="#f7d08b" strokeWidth="1.5" opacity="0.7" />

                </g>
                
                {/* Speaker Cone Housing */}
                <circle cx="60" cy="60" r="38" fill="#120d07" stroke="#3a2810" strokeWidth="2" />

                <g className={`speaker-cone-pulse ${active ? "throbbing" : ""}`}>
                  
                  {/* Speaker Rubber Surround Ring */}
                  <circle cx="60" cy="60" r="34" fill={`url(#speakerConeGrad-${side})`} stroke="#573e19" strokeWidth="2" />

                  {/* Inner Dust Cap Bulb */}
                  <circle cx="60" cy="60" r="34" fill={`url(#speakerConeGrad-${side})`} stroke="#573e19" strokeWidth="2" />
                  <circle cx="56" cy="56" r="4" fill="rgba(255, 255, 255, 0.25)" />

                </g>

                {/* Decorative Rivets on Housing */}
                {Array.from({ length: 4 }).map((_, i) => (
                    <circle 
                        key={i}
                        cx="60"cy="18" r="2.5"
                        fill="#f7d08b" stroke="#1a1205" strokeWidth="0.5"
                        transform={`rotate(${i * 90 + 22.5} 60 60)`}
                    />
                ))}

            </svg>

        </div>

    );

}