import React from "react";
import './RoomWeapons.css';

export default function ClockworkCabaretWeapon({ onClick, isActive }) {
    return (
        <button 
            type="button"
            className={`weapon-btn cabaret-btn ${isActive ? 'active-selected' : ''}`}
            onClick={onClick}
            title="Clockwork Cabaret"
        >

            <div className="cabaret-props-wrapper">
                <svg className="prop-svg cabaret-master-svg" viewBox="0 0 160 220">
                    <defs>
                        <radialGradient id="luteBodyWood" cx="40%" cy="50%" r="60%">
                            <stop offset="0%" stopColor="#d7ccc8" />
                            <stop offset="30%" stopColor="#a1887f" />
                            <stop offset="70%" stopColor="#5d4037" />
                            <stop offset="100%" stopColor="#271c19" />
                        </radialGradient>

                        <linearGradient id="antiqueBrass" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffe082" />
                            <stop offset="40%" stopColor="#d7ccc8" />
                            <stop offset="70%" stopColor="#8d6e63" />
                            <stop offset="100%" stopColor="#2c1d11" />
                        </linearGradient>

                        <linearGradient id="ebonyFretboard" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3747f" />
                            <stop offset="50%" stopColor="#212121" />
                            <stop offset="100%" stopColor="#0d0d0d" />
                        </linearGradient>
                    </defs>

                    <g className="cabaret-lute-group">
                        <ellipse cx="80" cy="195" rx="50" ry="14" fill="rgba(0, 0, 0, 0.8" />

                        <g className="grandfather-clock-key" transform="translate(-15, 35) rotate(-40 80 165)">
                            
                            <rect x="35" y="162" width="65" height="7" rx="2" fill="url(#antiqueBrass)" stroke="#0e0705" strokeWidth="1.2" />
                            <ellipse cx="100" cy="165.5" rx="3.5" ry="6" fill="url(#antiqueBrass)" stroke="#0e0705" strokeWidth="1" />
                            <ellipse cx="94" cy="165.5" rx="2.5" ry="5" fill="url(#antiqueBrass)" stroke="#0e0705" strokeWidth="0.8" />

                            <path d="M 36,169 L 36,177 L 46,177 L 46,169 Z" fill="url(#antiqueBrass)" stroke="#0e0705" strokeWidth="1.2" />
                            <rect x="40" y="172" width="3" height="5" fill="#0e0705" />

                            <g className="key-bow-filigree">
                                <path 
                                    d="M 103,165.5 C 103,150 115,142 128,142 C 142,142 154,152 154,165.5 C 154,179 142,189 128,189 C 115,189 103,181 103,165.5 Z" 
                                    fill="url(#antiqueBrass)" 
                                    stroke="#0e0705" 
                                    strokeWidth="1.5" 
                                />
                                <polygon points="154,165.5 159,162.5 159,168.5" fill="url(#antiqueBrass)" stroke="#0e0705" strokeWidth="1" />

                                <ellipse cx="120" cy="155" rx="5" ry="4" fill="#0e0705" />
                                <ellipse cx="120" cy="176" rx="5" ry="4" fill="#0e0705" />
                                <ellipse cx="136" cy="155" rx="5" ry="4" fill="#0e0705" />
                                <ellipse cx="136" cy="176" rx="5" ry="4" fill="#0e0705" />
                                <polygon points="124,165.5 132,160.5 132,170.5" fill="#0e0705" />
                            </g>
                        </g>

                        <path d="M 71,45 L 71,110 L 89,110 L 89,45 Z" fill="url(#ebonyFretboard)" stroke="#0e0705" strokeWidth="1.2" />

                        <line x1="71" y1="55" x2="89" y2="55" stroke="#b0bec5" strokeWidth="0.8" opacity="0.6" />
                        <line x1="71" y1="67" x2="89" y2="67" stroke="#b0bec5" strokeWidth="0.8" opacity="0.6" />
                        <line x1="71" y1="80" x2="89" y2="80" stroke="#b0bec5" strokeWidth="0.8" opacity="0.6" />
                        <line x1="71" y1="94" x2="89" y2="94" stroke="#b0bec5" strokeWidth="0.8" opacity="0.6" />

                        <path d="M 70,45 C 70,20 65,12 80,4 C 95,12 90,20 90,45 Z" fill="url(#luteBodyWood)" stroke="#0e0705" strokeWidth="1.4" />

                        <circle cx="63" cy="18" r="3" fill="url(#antiqueBrass)" stroke="#000" strokeWidth="0.5" />
                        <circle cx="61" cy="28" r="3" fill="url(#antiqueBrass)" stroke="#000" strokeWidth="0.5" />
                        <circle cx="63" cy="38" r="3" fill="url(#antiqueBrass)" stroke="#000" strokeWidth="0.5" />
                        <circle cx="97" cy="18" r="3" fill="url(#antiqueBrass)" stroke="#000" strokeWidth="0.5" />
                        <circle cx="99" cy="28" r="3" fill="url(#antiqueBrass)" stroke="#000" strokeWidth="0.5" />
                        <circle cx="97" cy="38" r="3" fill="url(#antiqueBrass)" stroke="#000" strokeWidth="0.5" />

                        <path 
                            d="M 71,105 C 42,118 30,145 34,172 C 38,198 122,198 126,172 C 130,145 118,118 89,105 Z" 
                            fill="url(#luteBodyWood)" 
                            stroke="#0e0705" 
                            strokeWidth="2.2" 
                        />

                        <g className="soundhole-internal-cog">
                            <circle cx="80" cy="152" r="18" fill="none" stroke="url(#antiqueBrass)" strokeWidth="3" strokeDasharray="4 3" />
                        </g>

                        <circle cx="80" cy="152" r="15" fill="#0d0d0d" stroke="#000" strokeWidth="1" />

                        <circle cx="80" cy="152" r="24" fill="none" stroke="url(#antiqueBrass)" strokeWidth="4" />
                        <circle cx="80" cy="152" r="27" fill="none" stroke="#5d4037" strokeWidth="1" />

                        
                        <g className="clockface-numerals">
                            
                            <text x="80" y="133" fontSize="6.5" fontWeight="bold" fill="#ffe082" textAnchor="middle">XII</text>
                            <text x="100" y="154" fontSize="6.5" fontWeight="bold" fill="#ffe082" textAnchor="middle">III</text>
                            <text x="80" y="174" fontSize="6.5" fontWeight="bold" fill="#ffe082" textAnchor="middle">VI</text>
                            <text x="60" y="154" fontSize="6.5" fontWeight="bold" fill="#ffe082" textAnchor="middle">IX</text>
                            
                            
                            <line x1="80" y1="135" x2="80" y2="137" stroke="#ffb300" strokeWidth="1" />
                            <line x1="97" y1="152" x2="95" y2="152" stroke="#ffb300" strokeWidth="1" />
                            <line x1="80" y1="169" x2="80" y2="167" stroke="#ffb300" strokeWidth="1" />
                            <line x1="63" y1="152" x2="65" y2="152" stroke="#ffb300" strokeWidth="1" />
                        </g>

                        <g className="clock-hands">
                            <line x1="80" y1="152" x2="80" y2="139" stroke="#fff176" strokeWidth="1.2" strokeLinecap="round" />
                            <line x1="80" y1="152" x2="92" y2="152" stroke="#fff176" strokeWidth="1.5" strokeLinecap="round" />
                            <circle cx="80" cy="152" r="2" fill="#ffb300" />
                        </g>

                        <rect x="62" y="184" width="36" height="6" rx="2" fill="#2b1a10" stroke="#000" strokeWidth="0.8" />

                        <g className="lute-strings" opacity="0.85">
                            <line x1="74" y1="20" x2="68" y2="184" stroke="#ffffff" strokeWidth="0.6" />
                            <line x1="77" y1="20" x2="73" y2="184" stroke="#ffffff" strokeWidth="0.6" />
                            <line x1="80" y1="20" x2="80" y2="184" stroke="#ffffff" strokeWidth="0.6" />
                            <line x1="83" y1="20" x2="87" y2="184" stroke="#ffffff" strokeWidth="0.6" />
                            <line x1="86" y1="20" x2="92" y2="184" stroke="#ffffff" strokeWidth="0.6" />
                        </g>
                    </g>
                 </svg>
            </div>

        </button>
    );
}