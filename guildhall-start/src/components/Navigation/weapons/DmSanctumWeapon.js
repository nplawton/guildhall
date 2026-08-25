import React from "react";
import './RoomWeapons.css'

export default function DMSanctumWeapon({ onClick }) {
    return (
        <button
            type="button"
            className="weapon-btn dm-sanctum-btn"
            onClick={onClick}
            title="DM Sanctum"
        >
            <div className="dm-props-wrapper">
                <svg className="prop-svg scroll-svg" viewBox="0 0 100 120">
                    <defs>
                        <linearGradient id="scrollBody" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#7a5828" />
                            <stop offset="18%" stopColor="#d2b070" />
                            <stop offset="45%" stopColor="#fdf0cd" />
                            <stop offset="75%" stopColor="#cca25a" />
                            <stop offset="100%" stopColor="#4e3514" />
                        </linearGradient>
                        <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#b30000" />
                            <stop offset="50%" stopColor="#ff3333" />
                            <stop offset="100%" stopColor="#660000" />
                        </linearGradient>
                    </defs>
                    
                    <rect x="20" y="15" width="60" height="90" rx="6" fill="url(#scrollBody)" />
                    
                    <ellipse cx="50" cy="15" rx="30" ry="6" fill="#fdf0cd" stroke="#8a632d" strokeWidth="2" />
                    <ellipse cx="50" cy="15" rx="20" ry="3" fill="#63451e" />
                    
                    <ellipse cx="50" cy="105" rx="30" ry="6" fill="#3a250a" />
                    
                    <rect x="18" y="52" width="64" height="14" rx="2" fill="url(#ribbonGrad)" />
                    <path d="M 45 66 L 38 88 L 48 82 L 54 90 L 52 66 Z" fill="url(#ribbonGrad)" />
                </svg>

                <svg className="prop-svg inkwell-svg" viewBox="0 0 100 120">
                    <defs>
                        <radialGradient id="inkwellGlass" cx="35%" cy="30%" r="65%">
                            <stop offset="0%" stopColor="#8baac4" />
                            <stop offset="30%" stopColor="#314859" />
                            <stop offset="70%" stopColor="#121b22" />
                            <stop offset="100%" stopColor="#05080b" />
                        </radialGradient>
                        <linearGradient id="quillFeather" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8c6d3b" />
                            <stop offset="60%" stopColor="#d9c29c" />
                            <stop offset="100%" stopColor="#ffffff" />
                        </linearGradient>
                    </defs>

                    <ellipse cx="50" cy="80" rx="32" ry="22" fill="url(#inkwellGlass)" stroke="#a1c4e2" strokeWidth="1" />
                    
                    <ellipse cx="50" cy="62" rx="14" ry="6" fill="#d4af37" stroke="#5a4710" strokeWidth="1.5" />
                    <ellipse cx="50" cy="62" rx="9" ry="3" fill="#0a0a0a" />

                    
                    <path d="M 50 62 Q 72 35, 80 8 Q 55 22, 48 50 Z" fill="url(#quillFeather)" />
                    <path d="M 50 62 Q 30 35, 18 12 Q 40 25, 52 50 Z" fill="url(#quillFeather)" />
                    
                    <path d="M 50 62 L 75 10" stroke="#f0e6d2" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            </div>
        </button>
    );
}