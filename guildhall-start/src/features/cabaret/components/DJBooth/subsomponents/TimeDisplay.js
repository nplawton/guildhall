import React from "react";
import "./TimeDisplay.css";

export default function TimeDisplay({
    hours = 12,
    minutes = 0,
    onChangeHours,
    onChangeMinutes
}) {

    const formattedTIme = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

    const handleSunClick = () => {
        const nextHr = hours >= 12  ? 1 : hours + 1;
        if(onChangeHours) onChangeHours(nextHr);
    };

    const handleMoonClick = () => {
        const nextMin = (minutes + 5) % 60;
        if (onChangeMinutes) onChangeMinutes(nextMin)
    };

    return (

        <div className="time-plaque-wrapper" title="Chrono Time Regulation">

            <div
                className="plaque-dial-btn left-dial" 
                onClick={handleSunClick} 
                title="Increment Hour (Sun Dial)"
                role="button"
                tabIndex={0}
            >

                <svg viewBox="0 0 60 60" className="sun-dial-svg">

                    <defs>
                        <radialGradient id="sunGold" cx="40%" cy="40%" r="60%">
                            <stop offset="0%" stopColor="#fff2be" />
                            <stop offset="60%" stopColor="#ffd700" />
                            <stop offset="100%" stopColor="#8a5a00" />
                        </radialGradient>
                    </defs>

                    {Array.from({ length:12 }).map((_, i) => (
                        <line 
                            key={i}
                            x1="30" y1="4" x2="30" y2="10"
                            stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round"
                            transform={`rotate(${i * 30} 30 30)`}
                        />
                    ))}
                    <circle cx="30" cy="30" r="16" fill="url(#sunGold)" stroke="#1a0c02" strokeWidth="1.5" />
                    <circle cx="30" cy="30" r="12" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.6" />

                </svg>

                <span className="dial-stamped-label">HR</span>

            </div>

            <div className="time-screen">
                <span className="time-screen-label">
                    SET TIME
                </span>
                <span className="time-readout">
                    {formattedTIme}
                </span>
            </div>


            <div
                className="plaque-dial-btn right-dial" 
                onClick={handleMoonClick} 
                title="Set Minute (Moon Dial)"
                role="button"
                tabIndex={0}
            >
                <svg viewBox="0 0 60 60" className="moon-dial-svg">
                    <defs>
                        <linearGradient id="moonSilver" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="30" stopColor="#e1e8f0" />
                            <stop offset="70%" stopColor="#8ba0b5" />
                            <stop offset="100%" stopColor="#415061" />
                        </linearGradient>

                        <filter id="lunarGlow" x="-30%" y="-30%" width="160%" height="160%">
                            <feGaussianBlur stdDeviation="1.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>

                    </defs>

                    <path 
                        d="M 36 12 A 18 18 0 1 1 20 44 A 20 20 0 0 0 36 12 Z"
                        fill="url(#moonSilver)"
                        stroke="#ffffff"
                        strokeWidth="0.75"
                        filter="url(#lunarGlow)"
                    />

                </svg>

                <span className="dial-stamped-label">MIN</span>
                
            </div>

        </div>

    );

}