import React from "react";
import NixieTube from "./subsomponents/NixieTube";
import "../../styles/TopRack.css";
import { MODES } from "../../../../components/Navigation/modeConfig";

export default function TopRack({
    activeMode = "I",
    bpm = 120,
    lightPower = true,
    soundPower = true,
    onModeSelect,
    isDepleted = false
}) {


    const bpmDigits = String(bpm).padStart(3, "0").split("");

    return (

        <div className="top-rack-tray-perspective">

            {/* Layer 1 Tilted Chassis Base */}
            <div className="top-rack-tray-base">

                {/* Layer 5: Back Tier * Mode Tubes */}
                <div className="tray-back-tier">

                    <div className="mode-tubes-row">
                        {MODES.map((tube) => {
                            const isActive = activeMode === tube.code;
                            return (
                                <div
                                    key={tube.code}
                                    className="mode-tube-item"
                                    onClick={() => onModeSelect && onModeSelect(tube.code)}
                                    title={`${tube.code} Mode`}
                                >
                                    <NixieTube 
                                        value={tube.label}
                                        color={tube.color}
                                        active={isActive}
                                        size="medium"
                                    />
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* Foreground Tier */}
                <div className="tray-front-tier">
                    
                    {/* Layer 2: Far Left - Lights*/}
                    <div className="foreground-unit unit-lights">
                        <NixieTube 
                            value="⚡"
                            color="#ffd700"
                            active={lightPower}
                            size="small"
                        />

                    </div>

                    {/* Layer 3: Dead Center - BPM */}
                    <div className="foreground-unit unit-bpm">
                        <div className="bpm-digits-row">
                            {bpmDigits.map((digit, index) => (
                                <NixieTube 
                                    key={index}
                                    value={digit}
                                    color="#ffaa00"
                                    active={lightPower}
                                    size="small"
                                />
                            ))}
                        </div>
                        
                    </div>

                    {/* Layer 4: Far Right - Sound */}
                    <div className="foreground-unit unit-sound">
                        <NixieTube 
                            value="🎵"
                            color="#ff0055"
                            active={soundPower}
                            size="small"
                        />
                            
                    </div>

                </div>

                <div className="tray-front-beveled-trim">
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
                <div className={`steam-cloud-emitter ${isDepleted ? "regulated-steam" : ""}`}>
                    <div className="steam-puff puff-1" />
                    <div className="steam-puff puff-2" />
                    <div className="steam-puff puff-3" />
                </div>

                <div className="whistle-office-cap" />
                <div className="whistle-brass-pipe">
                    <div className="pipe-slot" />
                </div>
                <div className="whistle-mount-bracket" />

            </div>


        </div>

    );

}