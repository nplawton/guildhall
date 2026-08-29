import React from "react";
import './RoomWeapons.css';

export default function KnowledgeFoundryWeapon({ onClick }) {
    return (
        <button
            type="button"
            className="weapon-btn foundry-btn"
            onClick={onClick}
            title="Knowledge Foundry"
        >
            <div className="foundry-props-wrapper">
                <svg className="prop-svg foundry-master-svg" viewBox="0 0 200 320">
                    <defs>
                        
                        <linearGradient id="staffWood" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8d6e63" />
                            <stop offset="35%" stopColor="#5d4037" />
                            <stop offset="80%" stopColor="#3e2723" />
                            <stop offset="100%" stopColor="#1b0c08" />
                        </linearGradient>

                        
                        <linearGradient id="steampunkBrass" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffe082" />
                            <stop offset="35%" stopColor="#ffb300" />
                            <stop offset="70%" stopColor="#8d6e63" />
                            <stop offset="100%" stopColor="#2c1d11" />
                        </linearGradient>

                        
                        <linearGradient id="copperConduit" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ffab91" />
                            <stop offset="50%" stopColor="#d84315" />
                            <stop offset="100%" stopColor="#4e1302" />
                        </linearGradient>

                        
                        <radialGradient id="foundryBlueGem" cx="35%" cy="35%" r="65%">
                            <stop offset="0%" stopColor="#e0f7fa" />
                            <stop offset="30%" stopColor="#00e5ff" />
                            <stop offset="70%" stopColor="#00838f" />
                            <stop offset="100%" stopColor="#00272b" />
                        </radialGradient>
                    </defs>

                    <g className="foundry-staff-group">

                        <g className="staff-base-tip">
                            <path d="M 88,196 L 86,215 C 86,222 114,222 114,215 L 112,196 Z" fill="url(#steampunkBrass)" stroke="#0e0705" strokeWidth="1.6" />
                            <circle cx="100" cy="208" r="3.5" fill="#2c1d11" />
                        </g>

                        <path 
                            d="M 91,48 C 86,75 92,120 88,160 C 86,180 90,196 88,206 L 112,206 C 110,196 114,180 112,160 C 108,120 114,75 109,48 Z" 
                            fill="url(#staffWood)" 
                            stroke="#0e0705" 
                            strokeWidth="2.5" 
                        />
                        
                        <path d="M 95,55 Q 92,110 96,165" fill="none" stroke="#3e2723" strokeWidth="1.6" opacity="0.75" />
                        <path d="M 104,60 Q 107,120 104,180" fill="none" stroke="#1b0c08" strokeWidth="1.8" opacity="0.65" />

                        <g className="copper-coils">
                            <path d="M 87,175 Q 113,168 111,184" fill="none" stroke="url(#copperConduit)" strokeWidth="4.5" strokeLinecap="round" />
                            <path d="M 87,148 Q 113,141 111,157" fill="none" stroke="url(#copperConduit)" strokeWidth="4.5" strokeLinecap="round" />
                            <path d="M 88,98 Q 113,91 110,107" fill="none" stroke="url(#copperConduit)" strokeWidth="4.5" strokeLinecap="round" />
                            <path d="M 89,72 Q 113,65 110,81" fill="none" stroke="url(#copperConduit)" strokeWidth="4.5" strokeLinecap="round" />
                        </g>

                        <g className="pressure-gauge-node">
                            <rect x="85" y="118" width="30" height="20" rx="4" fill="url(#steampunkBrass)" stroke="#0e0705" strokeWidth="1.6" />
                            <circle cx="100" cy="128" r="8" fill="#fffde7" stroke="#2c1d11" strokeWidth="1.2" />
                            {/* Gauge Needle */}
                            <line x1="100" y1="128" x2="105" y2="123" stroke="#d50000" strokeWidth="1.5" strokeLinecap="round" />
                        </g>

                        <g className="mechanical-staff-head">
                            
                            <rect x="84" y="42" width="32" height="14" rx="3" fill="url(#steampunkBrass)" stroke="#0e0705" strokeWidth="1.8" />
                            <circle cx="90" cy="49" r="1.8" fill="#2c1d11" />
                            <circle cx="110" cy="49" r="1.8" fill="#2c1d11" />

                            <g className="head-brass-gear">
                                <circle cx="100" cy="26" r="30" fill="none" stroke="url(#steampunkBrass)" strokeWidth="4.5" strokeDasharray="7 4" />
                            </g>

                            <path d="M 84,45 Q 64,24 74,4 C 80,-2 92,10 86,26 Z" fill="url(#steampunkBrass)" stroke="#0e0705" strokeWidth="1.5" />
                            <path d="M 116,45 Q 136,24 126,4 C 120,-2 108,10 114,26 Z" fill="url(#steampunkBrass)" stroke="#0e0705" strokeWidth="1.5" />
                        </g>

                        <g className="foundry-gem-container">
                            
                            <circle cx="100" cy="26" r="22" fill="url(#foundryBlueGem)" stroke="#00e5ff" strokeWidth="1.5" className="foundry-blue-gem" />
                            
                            <path d="M 90,18 Q 100,10 110,20 Q 100,30 90,18 Z" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.85" />
                            <circle cx="95" cy="20" r="2.5" fill="#ffffff" />

                            <g className="electric-sparks">
                                <path d="M 72,20 Q 64,12 58,22" fill="none" stroke="#e0f7fa" strokeWidth="1.8" className="spark-1" />
                                <path d="M 128,30 Q 138,20 144,32" fill="none" stroke="#00e5ff" strokeWidth="1.8" className="spark-2" />
                                <path d="M 92,-4 Q 100,-12 108,-4" fill="none" stroke="#ffffff" strokeWidth="2" className="spark-3" />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </button>
    );
}