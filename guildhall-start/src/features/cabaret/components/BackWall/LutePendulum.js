import React from "react";
import '../../styles/LutePendulum.css';

export default function LutePendulum({ swingDuration = 4 }) {
    return (
        <div className="lute-pendulum-wrapper">
            <svg
                className="lute-pendulum-svg"
                viewBox="0 0 200 400"
            >
                <defs>
                    <radialGradient id="luteWoodGrad" cx="50%" cy="70%" r="60%">
                        <stop offset="0%" stopColor="#8a4b1c" />
                        <stop offset="60%" stopColor="#4a240b" />
                        <stop offset="100%" stopColor="#240e03" />
                    </radialGradient>

                    <linearGradient id="luteBrassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fff2a8" />
                        <stop offset="50%" stopColor="#d4af37" />
                        <stop offset="100%" stopColor="#6e5411" />
                    </linearGradient>

                    <radialGradient id="diamondGemGrad" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="40%" stopColor="#e0f7fa" />
                        <stop offset="85%" stopColor="#b2ebf2" />
                        <stop offset="100%" stopColor="#4dd0e1" />
                    </radialGradient>

                    <radialGradient id="rubyGemGrad" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#ff9999" />
                        <stop offset="40%" stopColor="#cc0000" />
                        <stop offset="85%" stopColor="#660000" />
                        <stop offset="100%" stopColor="#330000" />
                    </radialGradient>

                    <radialGradient id="emeraldGemGrad" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#a7f3d0" />
                        <stop offset="40%" stopColor="#059669" />
                        <stop offset="85%" stopColor="#065f46" />
                        <stop offset="100%" stopColor="#022c22" />
                    </radialGradient>

                    <radialGradient id="sapphireGemGrad" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#93c5fd" />
                        <stop offset="40%" stopColor="#2563eb" />
                        <stop offset="85%" stopColor="#1e40af" />
                        <stop offset="100%" stopColor="#1e1b4b" />
                    </radialGradient>

                    <filter id="luteShadow" x="-20%" y="-10%" width="140%" height="120%">
                        <feDropShadow dx="0" dy="8" stdDeviation="5" floodColor="#000000" floodOpacity="0.6" />
                    </filter>
                </defs>

                <g className="pendulum-swing-group" filter="url(#luteShadow)">
                    
                    {/* SoundBoard (Bottom Base) */}
                    <g className="soundboard-group">
                        <path 
                            d="
                                M 100 220
                                C 145 220, 165 260, 165 310
                                C 165 365, 135 385, 100 385
                                C 65 385, 35 365, 35 310
                                C 35 260, 55 220, 100 220 Z
                            "
                            fill="url(#luteWoodGrad)"
                            stroke="#190902"
                            strokeWidth="2"
                        />

                        <circle cx="100" cy="315" r="36" fill="#140b05" stroke="url(#luteBrassGrad)" strokeWidth="3" />
                        <circle cx="100" cy="315" r="31" fill="none" stroke="#d4f37" strokeWidth="1" strokeDasharray="2,3" />

                        <text x="100" y="292" fill="#ffd700" fontSize="10" textAnchor="middle" fontFamily="serif" fontWeight="bold">XII</text>
                        <text x="126" y="319" fill="#ffd700" fontSize="10" textAnchor="middle" fontFamily="serif" fontWeight="bold">III</text>
                        <text x="100" y="344" fill="#ffd700" fontSize="10" textAnchor="middle" fontFamily="serif" fontWeight="bold">VI</text>
                        <text x="74" y="319"fill="#ffd700" fontSize="10" textAnchor="middle" fontFamily="serif" fontWeight="bold">IX</text>

                        <circle cx="100" cy="315" r="3" fill="#ffd700" />

                        <rect x="83" y="365" width="34" height="9" rx="2" fill="url(#luteBrassGrad)" stroke="#3b2b07" strokeWidth="1" />

                        <g className="tieback-gems">
                            <circle cx="93" cy="369.5" r="2.2" fill="url(#diamondGemGrad)" stroke="#164e63" strokeWidth="0.5" />
                            <circle cx="97" cy="369.5" r="2.2" fill="url(#rubyGemGrad)" stroke="#4a0000" strokeWidth="0.5" />
                            <circle cx="103" cy="369.5" r="2.2" fill="url(#emeraldGemGrad)" stroke="#064e3b" strokeWidth="0.5" />
                            <circle cx="107" cy="369.5" r="2.2" fill="url(#sapphireGemGrad)" stroke="#0f172a" strokeWidth="0.5" />
                        </g>

                    </g>

                    {/* Fretboard (Middle Section) */}
                    <g className="fretboard-group">

                        <polygon 
                            points="88,80 112,80 118,225 82,225"
                            fill="url(#luteWoodGrad)"
                            stroke="#190902"
                            strokeWidth="1.5"
                        />

                        <g stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="88" y1="100" x2="112" y2="100" stroke="#3b2b07" strokeWidth="3.5" />
                            <line x1="88" y1="100" x2="112" y2="100" />

                            <line x1="87" y1="122" x2="113" y2="122" stroke="#3b2b07" strokeWidth="3.5" />
                            <line x1="87" y1="122" x2="113" y2="122" />

                            <line x1="86" y1="146" x2="114" y2="146" stroke="#3b2b07" strokeWidth="3.5" />
                            <line x1="86" y1="146" x2="114" y2="146" />

                            <line x1="85" y1="172" x2="115" y2="172" stroke="#3b2b07" strokeWidth="3.5" />
                            <line x1="85" y1="172" x2="115" y2="172" />

                            <line x1="84" y1="200" x2="116" y2="200" stroke="#3b2b07" strokeWidth="3.5" />
                            <line x1="84" y1="200" x2="116" y2="200" />
                        </g>

                        
                        <g className="lute-strings" stroke="#e0e0e0" strokeWidth="0.8" opacity="0.85">
                            <line x1="93" y1="80" x2="93" y2="369" />
                            <line x1="97" y1="80" x2="97" y2="369" />
                            <line x1="103" y1="80" x2="103" y2="369" />
                            <line x1="107" y1="80" x2="107" y2="369" />
                        </g>
                        
                    </g>

                    {/* Pegbox Pivot (Top Hinge) */}
                    <g className="pegbox-pivot-group">

                        <rect x="87" y="77" width="26" height="5" rx="1" fill="url(#luteBrassGrad)" stroke="#3b2b07" strokeWidth="1" />

                        <polygon 
                            points="89,80 111,80 108,30 92,30"
                            fill="url(#luteWoodGrad)"
                            stroke="#190902"
                            strokeWidth="1.5"
                        />

                        <line x1="92" y1="30" x2="89" y2="80" stroke="url(#luteBrassGrad)" strokeWidth="2" />
                        <line x1="108" y1="30" x2="111" y2="80" stroke="url(#luteBrassGrad)" strokeWidth="2" />

                        <g fill="url(#luteBrassGrad)" stroke="#3b2b07" strokeWidth="0.8">
                            <g transform="translate(83, 47)">
                                <circle cx="0" cy="0" r="5" />
                                {[0, 60, 120, 180, 240, 300].map(deg => (
                                    <rect key={`l1-${deg}`} x="-1.2" y="-7" width="2.4" height="2" rx="0.5" transform={`rotate(${deg})`} />
                                ))}
                                <circle cx="0" cy="0" r="1.8" fill="#140b05" />
                            </g>

                            <g transform="translate(80, 65)">
                                <circle cx="0" cy="0" r="5" />
                                {[0, 60, 120, 180, 240, 300].map(deg => (
                                    <rect key={`l2-${deg}`} x="-1.2" y="-7" width="2.4" height="2" rx="0.5" transform={`rotate(${deg})`} />
                                ))}
                                <circle cx="0" cy="0" r="1.8" fill="#140b05" />
                            </g>

                            <g transform="translate(117, 47)">
                                <circle cx="0" cy="0" r="5" />
                                {[0, 60, 120, 180, 240, 300].map(deg => (
                                    <rect key={`r1-${deg}`} x="-1.2" y="-7" width="2.4" height="2" rx="0.5" transform={`rotate(${deg})`} />
                                ))}
                                <circle cx="0" cy="0" r="1.8" fill="#140b05" />
                            </g>

                            <g transform="translate(120, 65)">
                                <circle cx="0" cy="0" r="5" />
                                {[0, 60, 120, 180, 240, 300].map(deg => (
                                    <rect key={`r2-${deg}`} x="-1.2" y="-7" width="2.4" height="2" rx="0.5" transform={`rotate(${deg})`} />
                                ))}
                                <circle cx="0" cy="0" r="1.8" fill="#140b05" />
                            </g>
                        </g>

                        <circle cx="100" cy="30" r="12" fill="url(#luteBrassGrad)" stroke="#3b2b07" strokeWidth="2" />
                        <circle cx="100" cy="30" r="7" fill="#140b05" stroke="#d4af37" strokeWidth="1" />
                        <circle cx="100" cy="30" r="3" fill="#ffd700" />

                    </g>

                </g>
            </svg>
        </div>
    );
}