import React from "react";
import './RoomWeapons.css';

export default function StarLitGrottoWeapon({ onClick }) {
    return (
        <button
            type="button"
            className="weapon-btn starlit-grotto-btn"
            onClick={onClick}
            title="Star-Lit Grotto"
        >
            <div className="grotto-props-wrapper">
                <svg className="prop-svg obelisks-svg" viewBox="0 0 100 120">
                    <defs>

                        <linearGradient id="fireLight" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffeeaa" />
                            <stop offset="50%" stopColor="#ff7700" />
                            <stop offset="100%" stopColor="#cc2200" />
                        </linearGradient>
                        <linearGradient id="fireDark" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#800000" />
                            <stop offset="60%" stopColor="#4a0000" />
                            <stop offset="100%" stopColor="#1a0000" />
                        </linearGradient>

                        <linearGradient id="violetLight" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="50%" stopColor="#f5ccff" />
                            <stop offset="100%" stopColor="#8a00e6" />
                        </linearGradient>
                        <linearGradient id="violetDark" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#440066" />
                            <stop offset="100%" stopColor="#1a002e" />
                        </linearGradient>

                        <linearGradient id="earthLight" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#a8ff70" />
                            <stop offset="50%" stopColor="#3cd070" />
                            <stop offset="100%" stopColor="#1b6e32" />
                        </linearGradient>
                        <linearGradient id="earthDark" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3d2817" />
                            <stop offset="60%" stopColor="#1f130a" />
                            <stop offset="100%" stopColor="#0d0704" />
                        </linearGradient>

                        <linearGradient id="waterLight" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="45%" stopColor="#7ce8ff" />
                            <stop offset="100%" stopColor="#007799" />
                        </linearGradient>
                        <linearGradient id="waterDark" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#005580" />
                            <stop offset="100%" stopColor="#002b3d" />
                        </linearGradient>

                        <linearGradient id="airLight" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="50%" stopColor="#e0ffff" />
                            <stop offset="100%" stopColor="#70c7d2" />
                        </linearGradient>
                        <linearGradient id="airDark" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3a506b" />
                            <stop offset="100%" stopColor="#1c2d3d" />
                        </linearGradient>

                    </defs>

                    <g className="obelisk-group crystal-violet">
                        <polygon points="50,22 36,36 36,95 50,95" fill="url(#violetLight)" />
                        <polygon points="50,22 64,36 64,95 50,95" fill="url(#violetDark)" />
                        <polygon points="36,95 64,95 57,99 43,99" fill="#1a002e" />
                        <polygon points="50,-12 36,36 50,22" fill="url(#violetLight)" />
                        <polygon points="50,-12 64,36 50,22" fill="url(#violetDark)" />
                        <polygon points="50,-12 36,36 50,39 64,36" fill="#ffffff" opacity="0.85" />

                        <path d="M 50,-5 L 43,25 L 55,40 L 44,65 L 52,85" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round" className="lightning-arc arc-1" />
                        <path d="M 38,38 L 48,50 L 41,73" stroke="#e099ff" strokeWidth="1.2" fill="none" strokeLinecap="round" className="lightning-arc arc-2" />
                    </g>

                    <g className="obelisk-group crystal-fire">
                        <polygon points="18,32 4,45 4,102 18,102" fill="url(#fireLight)" />
                        <polygon points="18,32 32,45 32,102 18,102" fill="url(#fireDark)" />
                        <polygon points="4,102 32,102 25,106 11,106" fill="#4a0000" />
                        <polygon points="18,5 4,45 18,32" fill="url(#fireLight)" />
                        <polygon points="18,5 32,45 18,32" fill="url(#fireDark)" />
                        <polygon points="18,5 4,45 18,48 32,45" fill="#ffeeaa" opacity="0.85" />
                    </g>

                    <g className="obelisk-group crystal-air">
                        <polygon points="82,31 68,45 68,102 82,102" fill="url(#airLight)" />
                        <polygon points="82,31 96,45 96,102 82,102" fill="url(#airDark)" />
                        <polygon points="68,102 96,102 89,106 75,106" fill="#1c2d3d" />
                        <polygon points="82,2 68,45 82,31" fill="url(#airLight)" />
                        <polygon points="82,2 96,45 82,31" fill="url(#airDark)" />
                        <polygon points="82,2 68,45 82,48 96,45" fill="#ffffff" opacity="0.9" />

                        <path d="M 82,12 L 74,35 L 86,52 L 72,75 L 84,95" stroke="#ffffff" strokeWidth="1.2" fill="none" strokeLinecap="round" className="frost-crack crack-1" />
                        <path d="M 90,47 L 80,62 L 92,82" stroke="#e0ffff" strokeWidth="1" fill="none" strokeLinecap="round" className="frost-crack crack-2" />
                    </g>

                    <g className="obelisk-group crystal-earth">
                        <polygon points="68,30 63,114 73,114" fill="#a8ff70" className="earth-core-glow" />
                        <g className="earth-top-cap">
                            <polygon points="68,26 62,45 68,40" fill="url(#earthLight)" />
                            <polygon points="68,26 74,45 68,40" fill="url(#earthDark)" />
                        </g>
                        <g className="earth-left-shard">
                            <polygon points="68,45 56,58 56,114 68,114" fill="url(#earthLight)" />
                            <polygon points="68,45 56,58 68,52" fill="#3cd070" />
                        </g>
                        <g className="earth-right-shard">
                            <polygon points="68,45 80,58 80,114 68,114" fill="url(#earthDark)" />
                            <polygon points="68,45 80,58 68,52" fill="#1f130a" />
                        </g>
                        <polygon points="56,114 80,114 74,117 62,117" fill="#0d0704" />
                    </g>

                    <g className="obelisk-group crystal-water">
                        <polygon points="32,52 20,63 20,114 32,114" fill="url(#waterLight)" />
                        <polygon points="32,52 44,63 44,114 32,114" fill="url(#waterDark)" />
                        <polygon points="20,114 44,114 38,117 26,117" fill="#002b3d" />
                        <polygon points="32,26 20,63 32,52" fill="url(#waterLight)" />
                        <polygon points="32,26 44,63 32,52" fill="url(#waterDark)" />
                        <polygon points="32,26 20,63 32,65 44,63" fill="#ffffff" opacity="0.9" />
                        <polygon points="32,52 20,63 20,114 32,114" fill="#7ce8ff" className="water-facet water-up-facet" />
                        <polygon points="32,52 44,63 44,114 32,114" fill="#ffffff" className="water-facet water-down-facet" />
                        <g className="water-crash-burst">
                            <circle cx="32" cy="80" r="5" fill="#ffffff" opacity="0.95" />
                            <circle cx="32" cy="80" r="10" fill="#7ce8ff" opacity="0.6" />
                            <path d="M 32,80 L 26,74 M 32,80 L 38,74 M 32,80 L 25,84 M 32,80 L 39,84" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
                        </g>
                    </g>

                </svg>
            </div>

        </button>
    );
}