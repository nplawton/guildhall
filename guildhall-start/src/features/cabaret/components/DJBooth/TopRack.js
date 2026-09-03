import React from "react";
import NixieTube from "./subsomponents/NixieTube";
import "../../styles/TopRack.css";

export default function TopRack({
    activeMode = "I",
    bpm = 120,
    lightPower = true,
    soundPower = true,
    onModeSelect
}) {

    const MODE_TUBES = [
        { code: "CY", label: "1", color: "#00ffff" },
        { code: "PI", label: "2", color: "#ff69b4" },
        { code: "BU", label: "3", color: "#0099ff" },
        { code: "G", label: "4", color: "#00ff66"},
        { code: "PU", label: "5", color: "#9933ff" },
        { code: "O", label: "6", color: "#ff6600" },
        { code: "Y", label: "7", color: "#ffd700" },
        { code: "R", label: "8", color: "#ff0055" }
    ];

    const bpmDigits = String(bpm).padStart(3, "0").split("");

    return (

        <div className="top-rack-tray-perspective">

            {/* Layer 1 Tilted Chassis Base */}
            <div className="top-rack-tray-base">

                {/* Layer 5: Back Tier * Mode Tubes */}
                <div className="tray-back-tier">

                    <div className="mode-tubes-row">
                        {MODE_TUBES.map((tube) => {
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


        </div>

    );

}