import React from "react";
import './SteampunkDisplay.css';

export default function SteampunkDisplay({
    modeName = "CLASSIC BRASS",
    colorCode = "I",
    floorOpacity = 100,
    speed = 100,
    bass = 50,
    lightPower = true,
    soundPower = true,
    volume = 80,
    isMuted = false,
    treble = 50
}) {

    return (
        
        <div className="steampunk-display-perspective-wrapper">

            <div className="steampunk-display-housing">

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
                <div className="steampunk-display-screen">

                    <div className="screen-scanLines" />
                    <div className="screen-glass-glare" />

                    {/* Screen Readout Content */}
                    <div className="screen-content">
                        {/* Status Header Line */}
                        <div className="crt-status-header-row">
                            <div className="status-badge">
                                <span className="badge-label">
                                LGT:</span>
                                <span className={`badge-value ${lightPower ? "status-green" : "status-red"}`}>
                                    {lightPower ? "ON" : "OFF"}
                                </span>
                            </div>

                            <div className="status-badge">
                                <span className="badge-label">VOL:</span>
                                {!soundPower ? (
                                    <span className="badge-value status-red">OFF</span>
                                ) : (isMuted || volume === 0) ? (
                                    <span className="badge-value status-amber">MUTED</span>
                                ) : (
                                    <span className="badge-value status-green">{volume}%</span>
                                )}
                            </div>

                            <div className="status-badge">
                                <span className="badge-label">SND:</span>
                                <span className={`badge-value ${soundPower ? "status-green" : "status-red"}`}>
                                    {soundPower ? "ON" : "OFF"}
                                </span>
                            </div>
                        </div>

                        {/* Center Active Mode Title Banner */}
                        <div className="screen-mode-banner">
                            <span className="screen-mode-code">
                                [{lightPower ? colorCode : " "}]
                            </span>
                            <span className="screen-mode-title">
                                {lightPower ? modeName : "STANDBY"}
                            </span>
                        </div>

                        {/* Live Telemetry Data Grid */}
                        <div className="screen-telemetry-row">
                            <div className="telemetry-item">
                                <span className="telemetry-label">
                                    FLR BRGHT
                                </span>
                                <span className={`telemetry-val ${!lightPower ? 'val-off' : ''}`}>
                                    {lightPower ? floorOpacity : "OFF"}
                                </span>
                            </div>

                            <div className="telemetry-item">
                                <span className="telemetry-label">
                                    SPD MULT
                                </span>
                                <span className={`telemetry-val ${!lightPower ? "val-off" : ''}`}>
                                    {lightPower ? `${(speed / 100).toFixed(2)}x` : "OFF"}
                                </span>
                            </div>

                            <div className="telemetry-item">
                                <span className="telemetry-label">
                                    BASS RESP
                                </span>
                                <span className={`telemetry-val ${!soundPower ? 'val-off' : ''}`}>
                                    {soundPower ? `${bass}%` : "OFF"}
                                </span>
                            </div>

                            <div className="telemetry-cell">

                                <div className="telemetry-label">TREB RESP</div>
                                <div className={`telemetry-val ${!soundPower ? 'val-off' : ''}`}>
                                    {!soundPower ? "OFF" : `${treble}%`}
                                </div>

                            </div>

                        </div>
                    </div>
                    
                </div>

            </div>

        </div>

    );

}