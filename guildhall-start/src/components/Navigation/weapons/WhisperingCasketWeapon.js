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
                <svg className="prop-svg daggers-svg" viewBox="0 0 100 100">
                    <defs>
                        <radialGradient id="pouchBulge" cx="40%" cy="30%" r="65%">
                            <stop offset="0%" stopColor="#a1887f" />
                            <stop offset="35%" stopColor="#6d4c41" />
                            <stop offset="75%" stopColor="#3e2723" />
                            <stop offset="100%" stopColor="#1a0c08" />
                        </radialGradient>

                        <linearGradient id="goldCoin" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fff176" />
                            <stop offset="50%" stopColor="#ffb300" />
                            <stop offset="100%" stopColor="#ff6f00" />
                        </linearGradient>

                        <filter id="coinShadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="1.2" stdDeviation="0.6" floodColor="#000000" floodOpacity="0.85" />
                        </filter>

                    </defs>

                    <g className="pouch-group">
                        <ellipse cx="48" cy="88" rx="30" ry="10" fill="rgba(0,0,0,0.65)" />
                        <g className="spilled-coins" filter="url(#coinShadow)">
                            <ellipse cx="18" cy="88" rx="5" ry="2.5" fill="url(#goldCoin)" stroke="#b57c00" strokeWidth="0.4" />
                            <ellipse cx="76" cy="86" rx="5.5" ry="2.8" fill="url(#goldCoin)" stroke="#b57c00" strokeWidth="0.4" />
                            <ellipse cx="68" cy="90" rx="4.5" ry="2.2" fill="url(#goldCoin)" stroke="#b57c00" strokeWidth="0.4" />
                            <ellipse cx="12" cy="84" rx="3.5" ry="1.8" fill="url(#goldCoin)" stroke="#b57c00" strokeWidth="0.4" transform="rotate(-15 12 84)" />
                        </g>
                        <path 
                            d="M 22,72 C 14,50 30,24 40,18 C 38,12 42,6 48,6 C 54,6 58,12 56,18 C 66,24 82,50 74,72 C 70,88 26,88 22,72 Z" 
                            fill="url(#pouchBulge)" 
                            stroke="#100a08" 
                            strokeWidth="1.4" 
                        />
                        <path d="M 26,64 Q 48,80 70,64" fill="none" stroke="#100a08" strokeWidth="1.8" opacity="0.6" />
                        <path d="M 30,55 Q 48,68 66,55" fill="none" stroke="#a1887f" strokeWidth="1.2" opacity="0.4" />
                        <ellipse cx="48" cy="17" rx="9" ry="3" fill="#100a08" />
                        <path d="M 39,17 Q 48,22 57,17" fill="none" stroke="#ffb300" strokeWidth="1.6" />
                        <circle cx="44" cy="13" r="3.2" fill="url(#goldCoin)" />
                        <circle cx="52" cy="12" r="3" fill="url(#goldCoin)" />
                        <circle cx="48" cy="9" r="2.6" fill="url(#goldCoin)" />
                    </g>

                </svg>
            </div>

        </button>
    );
}