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

        <div clssName="top-rack-container">

            {/* Left Wing System Status: Light */}
            <div className="top-rack-section left-status">
                <NixieTube 
                    value="⚡"
                    color="#ffd700"
                    active={lightPower}
                    size="medium"
                />
                <span className="rack-status-label">LIGHTS</span>
            </div>

            {/* Center Console: 8 Dance Mode Nixie Tubes */}
            <div className="top-rack-section mode-rack">
                <div className="mode-tubes-grid">
                    {MODE_TUBES.map((tube) => {
                        const isActive = activeMode === tube.code;
                        return (
                            <div
                                key={tube.code}
                                className="mode-tube-item"
                                onClick={() => onModeSelect && onModeSelect(tube.code)}
                                style={{ cursor: "pointer" }}
                                title={`${tube.code} Mode`}
                            >
                                <NixieTube 
                                    value={tube.label}
                                    color={tube.color}
                                    active={isActive}
                                    size="large"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Center-Right Console BPM Area */}
            <div className="top-rack-section bpm-rack">
                <div className="bpm-digits-row">
                    {bpmDigits.map((digit, index) => (
                        <NixieTube 
                            key={index}
                            value={digit}
                            color="#ffaa00"
                            active={lightPower}
                            size="medium"
                        />
                    ))}
                </div>
                
                <div className="bpm-brass-placard">
                    <span className="placard-text">BPM</span>
                </div>

            </div>

            {/* Right Wing System Status: Sound */}
            <div className="top-rack-section right-status">
                <NixieTube 
                    value="🎵"
                    color="#ff0055"
                    active={soundPower}
                    size="medium"
                />
                <span className="rack-status-label">SOUND</span>
            </div>

        </div>

    );

}