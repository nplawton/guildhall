import React from "react";
import './RoomWeapons.css';
    
function GoldPouchProp() {
    return (
        <g className="casket-pouch-prop">
            {/* Table Drop Shadow */}
            <ellipse cx="100" cy="155" rx="55" ry="14" fill="rgba(0,0,0,0.75)" />

            {/* Spilled Gold Coins */}
            <g className="spilled-coins">
                <ellipse cx="54" cy="153" rx="8" ry="4" fill="url(#goldCoin)" stroke="#664200" strokeWidth="0.8" />
                <ellipse cx="44" cy="157" rx="7" ry="3.5" fill="url(#goldCoin)" stroke="#664200" strokeWidth="0.8" />
                <ellipse cx="146" cy="151" rx="9" ry="4.5" fill="url(#goldCoin)" stroke="#664200" strokeWidth="0.8" />
                <ellipse cx="156" cy="156" rx="8" ry="4" fill="url(#goldCoin)" stroke="#664200" strokeWidth="0.8" />
                <ellipse cx="100" cy="160" rx="8.5" ry="4" fill="url(#goldCoin)" stroke="#664200" strokeWidth="0.8" />
            </g>

            {/* Worn Leather Bag Body */}
            <path 
                d="M 54,138 C 40,100 50,68 68,58 C 64,54 68,46 82,46 L 118,46 C 132,46 136,54 132,58 C 150,68 160,100 146,138 C 134,156 66,156 54,138 Z" 
                fill="url(#wornLeather)" 
                stroke="#0e0705" 
                strokeWidth="2.5" 
            />

            {/* Leather Creases */}
            <path d="M 62,124 Q 100,142 138,124" fill="none" stroke="#0e0705" strokeWidth="2.5" opacity="0.75" />
            <path d="M 66,106 Q 100,122 134,106" fill="none" stroke="#0e0705" strokeWidth="2" opacity="0.65" />
            <path d="M 70,88 Q 100,100 130,88" fill="none" stroke="#bcaaa4" strokeWidth="1.5" opacity="0.5" />

            {/* Flared Cinch Mouth */}
            <ellipse cx="100" cy="54" rx="26" ry="9" fill="#23140c" stroke="#0e0705" strokeWidth="2" />
            <ellipse cx="100" cy="55" rx="23" ry="7" fill="#0e0705" />

            {/* Overflowing Gold Coins */}
            <g className="mouth-coins">
                <ellipse cx="88" cy="54" rx="7" ry="3.5" fill="url(#goldCoin)" stroke="#664200" strokeWidth="0.6" transform="rotate(-12 88 54)" />
                <ellipse cx="108" cy="53" rx="7.5" ry="3.8" fill="url(#goldCoin)" stroke="#664200" strokeWidth="0.6" transform="rotate(18 108 53)" />
                <ellipse cx="98" cy="50" rx="8" ry="4" fill="url(#goldCoin)" stroke="#664200" strokeWidth="0.6" />
            </g>
        </g>
    );
}

function LeftKrisProp() {
    return (
        <g className="kris-left">
            {/* Wavy Luk Blade */}
            <path 
                d="M 28,155 C 46,132 30,110 56,88 C 72,68 52,48 76,24 L 86,29 C 66,52 82,72 62,94 C 40,114 54,134 38,155 Z" 
                fill="url(#bladeSteel)" 
                stroke="#0b1117" 
                strokeWidth="2.5" 
            />
            {/* Spine Center Line */}
            <path d="M 33,154 Q 58,92 81,27" fill="none" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />

            {/* Skeletal Claw Ganja Guard */}
            <g className="skeletal-ganja">
                <path d="M 56,60 Q 78,40 102,50 C 94,62 76,66 56,60 Z" fill="#f5f5e6" stroke="#1c1c16" strokeWidth="1.8" />
                <circle cx="72" cy="54" r="2.2" fill="#525242" />
                <circle cx="82" cy="52" r="2.2" fill="#525242" />
                <circle cx="92" cy="53" r="2.2" fill="#525242" />
            </g>

            {/* Mendak: Crimson Ruby d8 Gem */}
            <g className="mendak-ruby-d8">
                <polygon points="76,44 86,32 96,44 86,56" fill="url(#rubyGem)" stroke="#ffcccc" strokeWidth="1" />
                <line x1="76" y1="44" x2="96" y2="44" stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />
                <line x1="86" y1="32" x2="86" y2="56" stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />
            </g>

            {/* Obsidian Ukiran Hilt */}
            <path d="M 87,36 C 96,24 100,10 90,0 C 85,-4 77,-2 74,3 C 70,9 77,24 82,34 Z" fill="url(#obsidianHilt)" stroke="#000000" strokeWidth="2" />

            {/* Embedded Gold Coin Face */}
            <g className="hilt-coin-group left-coin-group">
                <circle cx="87" cy="16" r="5.5" fill="url(#goldCoin)" stroke="#664200" strokeWidth="0.8" />
            </g>

            {/* Ukiran Tip Accent Gem (Tiny Ruby) */}
            <polygon points="88,-1 91,-4 94,-1 91,2" fill="url(#rubyGem)" stroke="#fff" strokeWidth="0.5" />
        </g>
    );
}

function RightKrisProp() {
    return (
        <g className="kris-right">
            {/* Wavy Luk Blade */}
            <path 
                d="M 172,155 C 154,132 170,110 144,88 C 128,68 148,48 124,24 L 114,29 C 134,52 118,72 138,94 C 160,114 146,134 162,155 Z" 
                fill="url(#bladeSteel)" 
                stroke="#0b1117" 
                strokeWidth="2.5" 
            />
            {/* Spine Center Line */}
            <path d="M 167,154 Q 142,92 119,27" fill="none" stroke="#ffffff" strokeWidth="1.2" opacity="0.9" />

            {/* Skeletal Claw Ganja Guard */}
            <g className="skeletal-ganja">
                <path d="M 144,60 Q 122,40 98,50 C 106,62 124,66 144,60 Z" fill="#f5f5e6" stroke="#1c1c16" strokeWidth="1.8" />
                <circle cx="128" cy="54" r="2.2" fill="#525242" />
                <circle cx="118" cy="52" r="2.2" fill="#525242" />
                <circle cx="108" cy="53" r="2.2" fill="#525242" />
            </g>

            {/* Mendak: Hunter Green Emerald d12 Gem */}
            <g className="mendak-emerald-d12">
                <polygon points="104,44 111,34 119,34 126,44 119,54 111,54" fill="url(#emeraldGem)" stroke="#d9f99d" strokeWidth="1" />
                <polygon points="108,42 113,37 117,42 117,48 113,51 108,48" fill="none" stroke="#ffffff" strokeWidth="0.7" opacity="0.8" />
            </g>

            {/* Obsidian Ukiran Hilt */}
            <path d="M 113,36 C 104,24 100,10 110,0 C 115,-4 123,-2 126,3 C 130,9 123,24 118,34 Z" fill="url(#obsidianHilt)" stroke="#000000" strokeWidth="2" />

            {/* Embedded Gold Coin Face */}
            <g className="hilt-coin-group right-coin-group">
                <circle cx="113" cy="16" r="5.5" fill="url(#goldCoin)" stroke="#664200" strokeWidth="0.8" />
            </g>

            {/* Ukiran Tip Accent Gem (Tiny Emerald) */}
            <polygon points="109,-1 112,-4 115,-1 112,2" fill="url(#emeraldGem)" stroke="#fff" strokeWidth="0.5" />
        </g>
    );
}

export default function WhisperingCasketWeapon({ onClick, isActive }) {

    return (

        <button
            type="button"
            className={`weapon-btn casket-btn ${isActive ? 'active-selected' : ''}`}
            onClick={onClick}
            title="Whispering Casket"
        >

            <div className="casket-station-container">
                <svg className="prop-svg casket-master-svg" viewBox="0 0 200 180">
                    <defs>
                        <radialGradient id="wornLeather" cx="45%" cy="35%" r="65%">
                            <stop offset="0%" stopColor="#a1887f" />
                            <stop offset="35%" stopColor="#6d4c41" />
                            <stop offset="70%" stopColor="#3e2723" />
                            <stop offset="100%" stopColor="#1a0c08" />
                        </radialGradient>

                        <linearGradient id="goldCoin" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fff59d" />
                            <stop offset="45%" stopColor="#ffb300" />
                            <stop offset="100%" stopColor="#e65100" />
                        </linearGradient>

                        <linearGradient id="bladeSteel" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="30%" stopColor="#cfd8dc" />
                            <stop offset="70%" stopColor="#546e7a" />
                            <stop offset="100%" stopColor="#1c313a" />
                        </linearGradient>

                        <linearGradient id="obsidianHilt" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#455a64" />
                            <stop offset="50%" stopColor="#1c2526" />
                            <stop offset="100%" stopColor="#000000" />
                        </linearGradient>

                        <radialGradient id="rubyGem" cx="35%" cy="35%" r="65%">
                            <stop offset="0%" stopColor="#ff8a80" />
                            <stop offset="45%" stopColor="#d50000" />
                            <stop offset="85%" stopColor="#8b0000" />
                            <stop offset="100%" stopColor="#310000" />
                        </radialGradient>

                        <radialGradient id="emeraldGem" cx="35%" cy="35%" r="65%">
                            <stop offset="0%" stopColor="#ccff90" />
                            <stop offset="45%" stopColor="#2e7d32" />
                            <stop offset="85%" stopColor="#1b5e20" />
                            <stop offset="100%" stopColor="#052b07" />
                        </radialGradient>

                    </defs>

                    <GoldPouchProp />
                    <LeftKrisProp />
                    <RightKrisProp />

                </svg>
            </div>

        </button>

    );

}