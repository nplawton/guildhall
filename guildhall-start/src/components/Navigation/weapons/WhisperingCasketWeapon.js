import React from "react";
import './RoomWeapons.css';

export default function WhisperingCasketWeapon({ onClick }) {
    return (
        <button
            type="button"
            className="weapon-btn casket-btn"
            onClick={onClick}
            title="Whispering Casket"
        >

            <div className="casket-props-wrapper">
                <svg className="prop-svg daggers-svg" viewBox="0 0 100 120">
                    <defs>
                        <linearGradient id="bladeLight" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="50%" stopColor="#cfd8dc" />
                            <stop offset="100%" stopColor="#78909c" />
                        </linearGradient>
                        <linearGradient id="bladeDark" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#546e7a" />
                            <stop offset="70%" stopColor="#263238" />
                            <stop offset="100%" stopColor="#102027" />
                        </linearGradient>

                        <linearGradient id="goldCoin" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffe082" />
                            <stop offset="50%" stopColor="#ffb300" />
                            <stop offset="100%" stopColor="#ff6f00" />
                        </linearGradient>

                        <linearGradient id="rubyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ff8a80" />
                            <stop offset="40%" stopColor="#ff1744" />
                            <stop offset="100%" stopColor="#880e4f" />
                        </linearGradient>

                        <linearGradient id="emeralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#b9f6ca" />
                            <stop offset="45%" stopColor="#00e676" />
                            <stop offset="100%" stopColor="#004d40" />
                        </linearGradient>
                    </defs>

                    <g className="dagger-group dagger-left">
                        <polygon points="35,95 62,32 65,35 38,98" fill="url(#bladeLight)" />
                        <polygon points="38,98 65,35 68,38 41,101" fill="url(#bladeDark)" />
                        <polygon points="30,90 44,104 41,107 27,93" fill="url(#goldCoin)" />
                        <rect x="22" y="100" width="8" height="12" rx="2" transform="rotate(-45 27 106)" fill="#1c2d3d" />
                        <g className="gem-ruby-d8">
                            <polygon points="27,100 33,106 27,112 21,106" fill="url(#rubyGrad)" />
                            <polygon points="27,100 33,106 27,106" fill="#ffa4a2" opacity="0.6" />
                        </g>
                        <circle cx="20" cy="113" r="5" fill="url(#goldCoin)" stroke="#b57c00" strokeWidth="0.8" />
                        <path d="M 36,93 L 64,34" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" className="glint-path glint-blade-1" />
                    </g>

                    <g className="dagger-group dagger-right">
                        <polygon points="65,95 38,32 35,35 62,98" fill="url(#bladeLight)" />
                        <polygon points="62,98 35,35 32,38 59,101" fill="url(#bladeDark)" />
                        <polygon points="70,90 56,104 59,107 73,93" fill="url(#goldCoin)" />
                        <rect x="68" y="100" width="8" height="12" rx="2" transform="rotate(45 73 106)" fill="#1c2d3d" />
                        <g className="gem-emerald-d12">
                            <polygon points="73,100 79,104 77,111 69,111 67,104" fill="url(#emeraldGrad)" />
                            <polygon points="73,100 79,104 73,106" fill="#e8f5e9" opacity="0.7" />
                        </g>
                        <circle cx="80" cy="113" r="5" fill="url(#goldCoin)" stroke="#b57c00" strokeWidth="0.8" />
                        <path d="M 64,93 L 36,34" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" className="glint-path glint-blade-2" />
                    </g>
                    <path d="M 47,60 L 53,60 M 50,57 L 50,63" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" className="glint-path glint-gem-spark" />
                </svg>
            </div>

        </button>
    );
}