import React from "react";
import './SteampunkDisplay.css';

export default function SteampunkDisplay({
    colorCode = "I",
    floorOpacity = 100,
    speed = 100,
    bass = 50,
    lightPower = true,
    soundPower = true,
    volume = 80,
    isMuted = false,
    treble = 50,
    crtModeText = "DORMANT",
    isReversed = false,
    activeDice = {},
    isDepleted = false
}) {

    const isLightEffective = lightPower && !isDepleted;
    const isSoundEffective = soundPower && !isDepleted;
    const isWildCardActive = isLightEffective && !!activeDice.D8;

    return (
        
        <div className="steampunk-display-perspective-wrapper">

            <div className={`steampunk-display-housing ${isWildCardActive ? "d8-electrical-surge" : ""}`}>

                <div className="display-bezel-stamped-title">
                    CABARET DJ CONSOLE v3.03
                </div>

                {/*Brass Corner Rivets */}
                <div className="display-rivet top-left" />
                <div className="display-rivet top-right" />
                <div className="display-rivet bottom-left" />
                <div className="display-rivet bottom-right" />

                {/* Top Beveled Hood / Visor Accent */}
                <div className="display-visor-hood" />

                {/* Recessed Glowing CRT / Glass Screen */}
                <div className={`steampunk-display-screen ${isReversed ? "is-reversed-crt" : ""}`}>

                    <div className="screen-scanlines" />
                    <div className="screen-glass-glare" />

                    {/* Screen Readout Content */}
                    <div className="screen-content">
                        {/* Status Header Line */}
                        <div className="crt-status-header-row">
                            <div className="status-badge">
                                <span className="badge-label">
                                LGT:</span>
                                <span className={`badge-value ${isLightEffective ? "status-green" : "status-red"}`}>
                                    {isLightEffective ? "ON" : "OFF"}
                                </span>
                            </div>

                            <div className="status-badge">
                                <span className="badge-label">VOL:</span>
                                {!isSoundEffective ? (
                                    <span className="badge-value status-red">OFF</span>
                                ) : (isMuted || volume === 0) ? (
                                    <span className="badge-value status-amber">MUTED</span>
                                ) : (
                                    <span className="badge-value status-green">{volume}%</span>
                                )}
                            </div>

                            <div className="status-badge">
                                <span className="badge-label">SND:</span>
                                <span className={`badge-value ${isSoundEffective ? "status-green" : "status-red"}`}>
                                    {isSoundEffective ? "ON" : "OFF"}
                                </span>
                            </div>
                        </div>

                        {/* Center Active Mode Title Banner */}
                        <div className="screen-mode-banner">
                            <span className="screen-mode-code">
                                [{isDepleted ? "!" : (isLightEffective ? colorCode : " ")}]
                            </span>
                            <span className="screen-mode-title">
                                {isDepleted ? "DEPLETED" : (isLightEffective ? crtModeText : "STANDBY")}
                            </span>
                        </div>

                        {/* Live Telemetry Data Grid */}
                        <div className="screen-telemetry-row">
                            <div className="telemetry-item">
                                <span className="telemetry-label">
                                    FLR BRGHT
                                </span>
                                <span className={`telemetry-val ${!isLightEffective ? 'val-off' : ''}`}>
                                    {isLightEffective ? floorOpacity : "OFF"}
                                </span>
                            </div>

                            <div className="telemetry-item">
                                <span className="telemetry-label">
                                    SPD MULT
                                </span>
                                <span className={`telemetry-val ${!isLightEffective ? "val-off" : ''}`}>
                                    {isLightEffective 
                                        ? `${isReversed ? "<<" : ""}${(speed / 100).toFixed(2)}x${isReversed ? ">>" : ""}` 
                                        : "OFF"
                                    }
                                </span>
                            </div>

                            <div className="telemetry-item">
                                <span className="telemetry-label">
                                    BASS RESP
                                </span>
                                <span className={`telemetry-val ${!isSoundEffective ? 'val-off' : ''}`}>
                                    {isSoundEffective ? `${bass}%` : "OFF"}
                                </span>
                            </div>

                            <div className="telemetry-cell">

                                <div className="telemetry-label">TREB RESP</div>
                                <div className={`telemetry-val ${!isSoundEffective ? 'val-off' : ''}`}>
                                    {!isSoundEffective ? "OFF" : `${treble}%`}
                                </div>

                            </div>

                        </div>
                    </div>
                    
                </div>

            </div>

        </div>

    );

}