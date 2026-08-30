import React from "react";
import '../../styles/BalanceSpring.css';

export default function BalanceSpring() {
    return(
        <div className="balance-spring-wrapper">
            <svg
                className="balance-spring-svg"
                viewBox="0 0 200 200"
            >
                <defs>
                    <radialGradient id="brassPinGrad" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#fff2a8" />
                        <stop offset="40%" stopColor="#d4af37" />
                        <stop offset="85%" stopColor="#8a6d1b" />
                        <stop offset="100%" stopColor="#4a390d" />
                    </radialGradient>

                    <linearGradient id="steelSpringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4a4d52" />
                        <stop offset="50%" stopColor="#1f2124" />
                        <stop offset="100%" stopColor="#0d0e10" />
                    </linearGradient>

                    <filter id="springShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="3" dy="5" stdDeviation="3" floodColor="#000000" floodOpacity="0.6" />
                    </filter>
                </defs>

                <path 
                    className="coiled-spring-path"
                    filter="url(#springShadow)"
                    stroke="url(#steelSpringGrad)"
                    strokeWidth="3.5"
                    fill="none"
                    strokeLinecap="round"
                    d="
                        M 100 100
                        m 0 -8
                        a 8 8 0 0 1 8 8
                        a 14 14 0 0 1 -14 14
                        a 22 22 0 0 1 -22 -22
                        a 32 32 0 0 1 32 -32
                        a 44 44 0 0 1 44 44
                        a 58 58 0 0 1 -58 58
                        a 74 74 0 0 1 -74 -74
                        a 90 90 0 0 1 90 -90
                        L190 10
                    "
                />

                <g className="centeral-pin-disc" filter="url(#springShadow)">
                    <circle cx="100" cy="100" r="14" fill="#f4eedb" stroke="#8a6d1b" strokeWidth="1.5" />
                    <circle cx="100" cy="100" r="8" fill="url(#brassPinGrad)" />
                    <line x1="96" y1="100" x2="104" y2="100" stroke="#2b2006" strokeWidth="1.5" strokeLinecap="round" />
                </g>
            </svg>
        </div>
    );
}