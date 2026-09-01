import React from "react";
import '../../styles/CentralHubFace.css';

export default function CentralHubFace({ hours = 10, minutes = 10 }) {
    
    const minuteAngle = minutes * 6;
    const hourAngle = (hours % 12) *30 + minutes * 0.5;

    const secondaryHours = [30, 60, 120, 150, 210, 240, 300, 330]
    
    return (
        <g className="central-hub-face-group">

            <defs>
                <linearGradient id="agedBronzeEdgeGradHub" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f7d08b" />
                    <stop offset="35%" stopColor="#b5873d" />
                    <stop offset="70%" stopColor="#6e4f1b" />
                    <stop offset="100%" stopColor="#302005" />
                </linearGradient>
            </defs>

            <circle cx="300" cy="300" r="114" fill="#120c06" stroke="#24160a" strokeWidth="2" />

            <circle cx="300" cy="300" r="110" fill="none" stroke="url(#agedBronzeEdgeGradHub)" strokeWidth="1" opacity="0.8" />

            <g fill="url(#agedBronzeEdgeGradHub)" stroke="#2b1c03" strokeWidth="0.6" opacity="0.55">
                <g transform="translate(300, 300)">
                    <circle cx="0" cy="0" r="28" fill="none" stroke="url(#agedBronzeEdgeGradHub)" strokeWidth="2" />
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => (
                        <rect key={`center-cog-${deg}`} x="-2.5" y="-33" width="5" height="6" rx="0.5" transform={`rotate(${deg})`} />
                    ))}
                </g>
                
                <g transform="translate(332, 272)">
                    <circle cx="0" cy="0" r="18" fill="none" stroke="#d4af37" strokeWidth="1.2" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                        <rect key={`sat1-${deg}`} x="-2" y="-22" width="4" height="5" rx="0.5" transform={`rotate(${deg})`} />
                    ))}
                    <circle cx="0" cy="0" r="5" fill="#0d0803" />
                </g>

                <g transform="translate(268, 326)">
                    <circle cx="0" cy="0" r="20" fill="none" stroke="#d4af37" strokeWidth="1.2" />
                    {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map(deg => (
                        <rect key={`sat3-${deg}`} x="-2" y="-24" width="4" height="5" rx="0.5" transform={`rotate(${deg})`} />
                    ))}
                    <circle cx="0" cy="0" r="6" fill="#0d0803" />
                </g>

                <g transform="translate(268, 274)">
                    <circle cx="0" cy="0" r="13" fill="none" stroke="#d4af37" strokeWidth="1" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                        <rect key={`sat4-${deg}`} x="-1.5" y="-16" width="3" height="4" rx="0.5" transform={`rotate(${deg})`} />
                    ))}
                    <circle cx="0" cy="0" r="4" fill="#0d0803" />
                </g>

            </g>

            <g stroke="#d4af37" strokeWidth="1" opacity="0.65">
                {Array.from({ length: 48 }).map((_, i) => {
                    const deg = i * 7.5;
                    if(deg % 30 === 0) return null;
                    return (
                        <line 
                            key={`sub-tick-${i}`}
                            x1="300" y1="192"
                            x2="300" y2="197"
                            transform={`rotate(${deg} 300 300)`}
                        />
                    );
                })}
            </g>

            <g stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round" fill="none">
                {secondaryHours.map(deg => (
                    <g key={`t-mark-${deg}`} transform={`rotate(${deg} 300 300)`}>
                        <line x1="291" y1="190" x2="309" y2="190" stroke="#ffd700" strokeWidth="2" />
                        <line x1="300" y1="190" x2="300" y2="204" stroke="#ffd700" strokeWidth="2.5" />
                    </g>
                ))}
            </g>

            <g fill="url(#agedBronzeEdgeGradHub)" stroke="#2b1c03" strokeWidth="0.8">
                {[0, 90, 180, 270].map(deg =>(
                    <polygon 
                        key={`cardinal-arrow-${deg}`}
                        points="300,206 292,188 308,188"
                        transform={`rotate(${deg} 300 300)`}
                    />
                ))}
            </g>

            <g transform={`rotate(${hourAngle} 300 300)`}>
                <line x1="300" y1="300" x2="300" y2="228" stroke="#d4af37" strokeWidth="3.5" strokeLinecap="round" />
                <polygon points="300,220 295,230 305,230" fill="#ffd700" stroke="#3b2b07" strokeWidth="0.5" />
                <g transform="translate(300, 262)">
                    <circle cx="0" cy="0" r="6" fill="#ffd700" stroke="#3b2b07" strokeWidth="0.8" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                        <line 
                            key={`sun-ray-${deg}`}
                            x1="0" y1="-6"
                            x2="0" y2="-11"
                            stroke="#ffd700"
                            strokeWidth="1.5"
                            transform={`rotate(${deg})`}
                        />
                    ))}
                </g>
            </g>

            <g transform={`rotate(${minuteAngle} 300 300)`}>
                <line x1="300" y1="300" x2="300" y2="198" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.95" />
                <circle cx="300" cy="196" r="3" fill="#ffffff" />
                <g transform="translate(310, 240) rotate(155)">
                    <path 
                        d="M 0,-11 A 11,11 0 1,1 -9,7 A 13,13 0 1,0 0,-11 Z"
                        fill="#ffffff"
                        stroke="#1a1a1a"
                        strokeWidth="1.2"
                    />
                </g>
            </g>

            <circle cx="300" cy="300" r="9" fill="url(#agedBronzeEdgeGradHub)" stroke="#2b1c03" strokeWidth="1.5" />
            <circle cx="300" cy="300" r="3.5" fill="#120c06" />

        </g>
    );
}