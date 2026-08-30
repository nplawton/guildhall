import React from "react";
import '../../styles/GearTrain.css';

export default function GearTrain({ speed = 12 }) {
    return (
        <div className="gear-train-wrapper">
            <svg
                className="gear-train-svg"
                viewBox="0 0 260 260"
            >
                <defs>
                    <radialGradient id="gearBrassGrad" cx="40%" cy="40%" r="60%">
                        <stop offset="0%" stopColor="#fff2a8" />
                        <stop offset="50%" stopColor="#d4af37" />
                        <stop offset="85%" stopColor="#96741c" />
                        <stop offset="100%" stopColor="#4a390d" />
                    </radialGradient>

                    <radialGradient id="gearBronzeGrad" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#e0b878" />
                        <stop offset="60%" stopColor="#8a6327" />
                        <stop offset="100%" stopColor="#3d2706" />
                    </radialGradient>

                    <filter id="gearShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="4" dy="6" stdDeviation="4" floodColor="#000000" floodOpacity="0.65" />
                    </filter>
                </defs>

                <g
                    className="gear-group gear-large"
                    style={{ animationDuration: `${speed}s`}}
                    filter="url(#gearShadow)"
                >
                    <circle cx="100" cy="140" r="60" fill="url(#gearBrassGrad)" stroke="#59430c" strokeWidth="2" />

                     {Array.from({ length: 12 }).map((_, i) => (
                        <rect 
                            key={`large-tooth${i}`}
                            x="93"
                            y="72"
                            width="14"
                            height="16"
                            rx="2"
                            fill="url(#gearBrassGrad)"
                            stroke="59430c"
                            strokeWidth="1"
                            transform={`rotate(${i * 30} 100 140)`}
                        />
                     ))}

                     <circle cx="100" cy="140" r="42" fill="#1f180a" />
                     <circle cx="100" cy="140" r="16" fill="url(#gearBrassGrad)" stroke="59430c" strokeWidth="1.5" />
                     <line x1="100" y1="98" x2="100" y2="182" stroke="url(#gearBrassGrad)" strokeWidth="8" />
                     <line x1="58" y1="140" x2="142" y2="140" stroke="url(#gearBrassGrad" strokeWidth="8" />
                     <circle cx="100" cy="140" r="8" fill="#0d0a04" />
                </g>

                <g
                    className="gear-group gear-medium"
                    style={{animationDuration: `${speed * 0.66}s`}}
                    filter="url(#gearShadow)"
                >
                    <circle cx="185" cy="85" r="40" fill="url(#gearBronzeGrad)" stroke="#3b280a" strokeWidth="2" />

                    {Array.from({ length: 8 }).map((_, i) => (
                        <rect 
                            key={`med-tooth-${i}`}
                            x="179"
                            y="39"
                            width="12"
                            height="14"
                            rx="2"
                            fill="url(#gearBronzeGrad)"
                            stroke="#3b280a"
                            strokeWidth="1"
                            transform={`rotate(${i * 45} 185 85)`}
                        />
                    ))}

                    <circle cx="185" cy="85" r="24" fill="#1f180a" />
                    <circle cx="185" cy="85" r="10" fill="url(#gearBronzeGrad)" stroke="#3b280a" strokeWidth="1.5" />
                    <circle cx="185" cy="85" r="4" fill="#0d0a04" />
                </g>

                <g
                    className="gear-group gear-small"
                    style={{animationDuration: `${speed * 0.33}s`}}
                    filter="url(#gearShadow)"
                >
                    <circle cx="185" cy="190" r="24" fill="url(#gearBrassGrad)" stroke="#59430c" strokeWidth="1.5" />
                    
                    {Array.from({ length: 6 }).map((_, i) => (
                        <rect
                            key={`small-tooth-${i}`}
                            x="180"
                            y="160"
                            width="10"
                            height="12"
                            rx="1.5"
                            fill="url(#gearBrassGrad)"
                            stroke="#59430c"
                            strokeWidth="1"
                            transform={`rotate(${i * 60} 185 190)`}
                        />
                    ))}

                    <circle cx="185" cy="190" r="8" fill="#1f180a" />
                    <circle cx="185" cy="190" r="4" fill="url(#gearBrassGrad)" />
                </g>
            </svg>
        </div>
    );
}