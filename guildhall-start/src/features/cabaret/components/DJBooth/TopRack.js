import React, {useState, useEffect, useRef} from "react";
import NixieTube from "./subcomponents/NixieTube";
import "../../styles/TopRack.css";
import { MODES } from "../../../../components/Navigation/modeConfig";

export default function TopRack({
    activeMode = "I",
    bpm = 120,
    lightPower = true,
    soundPower = true,
    onModeSelect,
    isDepleted = false,
    isScrambling = false,
    activeDice = {},
}) {

    const activeTubes = MODES.filter((tube) => tube.modeNum > 0);
    const bpmDigits = String(bpm).padStart(3, "0").split("");
    const isFogActive = !isDepleted && !!activeDice.D20;
    const[whistleBurst, setWhistleBurst] = useState(false);
    const prevFogState = useRef(isFogActive);

    const isLightEffective = lightPower && !isDepleted;
    const isSoundEffective = soundPower && !isDepleted;

    useEffect(() => {
        if (isFogActive && !prevFogState.current) {
            setWhistleBurst(true);
            const timer = setTimeout(() => setWhistleBurst(false), 700);
            return () => clearTimeout(timer);
        }
        prevFogState.current = isFogActive;
    }, [isFogActive]);

    const steamPressureOpacity = isFogActive ? Math.min(0.9, 0.3 + (bpm / 200) * 0.5) : 0;
    const plumeSpeed = isFogActive
        ? (1.8 - (bpm / 200) * 1.2).toFixed(2)
        : 1.5
    ;

    return (

        <div className="top-rack-container-480">

            <div className="top-rack-back-row">
                {activeTubes.map((tube, index) => {
                    const isLit = isScrambling
                    ? (index === (bpm % activeTubes.length))
                    : (activeMode === tube.code);

                    return (
                        <div
                            key={tube.code}
                            className={`mode-tube-node ${!isLightEffective ? 'disabled' : ''}`}
                            onClick={() => {
                                if (!isLightEffective || isScrambling) return;
                                if (onModeSelect) onModeSelect(tube.code);
                            }}
                        >
                            <NixieTube 
                                value={tube.label}
                                color={tube.color}
                                active={isLightEffective && isLit}
                                isPowerOn={isLightEffective}
                                size="medium"
                            />
                        </div>
                    );
                })}
            </div>

            {/* Foreground Tier */}
            <div className="top-rack-deck-components">
                
                {/* Layer 2: Far Left - Lights*/}
                <div className="deck-component unit-lights">
                    <NixieTube 
                        value="⚡"
                        color="#ffd700"
                        active={isLightEffective}
                        isPowerOn={isLightEffective}
                        size="small"
                    />

                </div>

                {/* Layer 3: Dead Center - BPM */}
                <div className="deck-component unit-bpm">
                    <div className="bpm-digits-row">
                        {bpmDigits.map((digit, index) => (
                            <NixieTube 
                                key={index}
                                value={digit}
                                color="#ffaa00"
                                active={isLightEffective}
                                isPowerOn={isLightEffective}
                                size="small"
                            />
                        ))}
                    </div>
                    
                </div>

                {/* Layer 4: Far Right - Sound */}
                <div className="deck-component unit-sound">
                    <NixieTube 
                        value="🎵"
                        color="#ff0055"
                        active={isSoundEffective && isLightEffective}
                        isPowerOn={isLightEffective}
                        size="small"
                    />
                        
                </div>

            </div>

            <div className="svg-3d-base-wrapper">

                <svg 
                    viewBox="0 0 480 30" 
                    className="top-rack-svg-base" 
                    preserveAspectRatio="none"
                >
                    <defs>

                        <linearGradient id="svgDeckGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#1a1006" />
                            <stop offset="50%" stopColor="#3d2a12" />
                            <stop offset="100%" stopColor="#241708" />
                        </linearGradient>

                        <linearGradient id="svgFrontGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ffe082" />
                            <stop offset="25%" stopColor="#b5873d" />
                            <stop offset="70%" stopColor="#6e4f1b" />
                            <stop offset="100%" stopColor="#241402" />
                        </linearGradient>

                        <linearGradient id="svgRimGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6e4f1b" />
                            <stop offset="15%" stopColor="#fff2be" />
                            <stop offset="85%" stopColor="#fff2be" />
                            <stop offset="100%" stopColor="#6e4f1b" />
                        </linearGradient>
                    </defs>

                    <polygon 
                        points="0,0 480,0 480,12 0,12" 
                        fill="url(#svgDeckGrad)" 
                        stroke="#1a0c02" 
                        strokeWidth="0.5" 
                    />

                    <line x1="0" y1="12" x2="480" y2="12" stroke="url(#svgRimGlow)" strokeWidth="1.5" />

                    <polygon 
                        points="0,12 480,12 480,28 0,28" 
                        fill="url(#svgFrontGrad)" 
                        stroke="#1a0c02" 
                        strokeWidth="1" 
                    />

                    <line x1="0" y1="28" x2="480" y2="28" stroke="#000000" strokeWidth="2" />
                </svg>

                <div className="svg-front-face-plaques">

                    <div className="cast-brass-plaque">
                        <span className="plaque-star-rivet">★</span>
                        <span className="plaque-text">LIGHTS</span>
                        <span className="plaque-star-rivet">★</span>
                    </div>

                    <div className="cast-brass-plaque">
                        <span className="plaque-star-rivet">★</span>
                        <span className="plaque-text">BPM</span>
                        <span className="plaque-star-rivet">★</span>
                    </div>  
                    
                    <div className="cast-brass-plaque">
                        <span className="plaque-star-rivet">★</span>
                        <span className="plaque-text">SOUND</span>
                        <span className="plaque-star-rivet">★</span>
                    </div>

                </div>

            </div>

            <div 
                className="top-rack-whistle-assembly" 
                title="Overpressure Vent Whistle"
            >
                <div 
                    className={`steam-cloud-emitter ${isFogActive || whistleBurst ? "releasing-steam" : ""} ${whistleBurst ? "initial-pop" : ""} ${isDepleted ? "regulated-steam" : ""}`}
                    style={{
                        '--steam-opacity': whistleBurst ? 1 : steamPressureOpacity,
                        '--plume-speed': `${plumeSpeed}s`
                    }}
                >
                    <div className="steam-puff puff-1" />
                    <div className="steam-puff puff-2" />
                    <div className="steam-puff puff-3" />
                </div>

                <div className="whistle-orifice-cap" />
                <div className="whistle-brass-pipe">
                    <div className="pipe-slot" />
                </div>
                <div className="whistle-mount-bracket" />

            </div>


        </div>

    );

}