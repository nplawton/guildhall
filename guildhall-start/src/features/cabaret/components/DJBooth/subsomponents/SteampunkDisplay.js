import React from "react";
import './SteampunkDisplay.css';

export default function SteampunkDisplay({
    modeName = "CLASSIC BRASS",
    colorCode = "I",
    floorOpacity = 100,
    speed = 100,
    bass = 50,
    lightPower = true,
    soundPower = true
}) {

    return (
        
        <div className="steampunk-display-perspective-wrapper">

            <div className="steampunk-display-housing">

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
                        <div className="screen-header-row">
                            <span className="screen-status-indicator left">
                                LGT:<span className={lightPower ? "status-on" : "status-off"}>
                                    {lightPower ? "ON" : "OFF"}
                                </span>
                            </span>

                            <span className="screen-label">
                                [CABARET DJ CONSOLE v3.03]
                            </span>

                            <span className="screen-status-indicator right">
                                SND:<span className={soundPower ? "status-on" : "status-off"}>
                                    {soundPower ? "ON" : "OFF"}
                                </span>
                            </span>
                        </div>

                        {/* Center Active Mode Title Banner */}
                        <div className="screen-mode-banner">
                            <span className="screen-mode-code">
                                [{colorCode}]
                            </span>
                            <span className="screen-mode-title">
                                {modeName}
                            </span>
                        </div>

                        {/* Live Telemetry Data Grid */}
                        <div className="screen-telemetry-row">
                            <div className="telemetry-item">
                                <span className="telemetry-label">
                                    FLR BRIGHTNESS
                                </span>
                                <span className="telemetry-val">
                                    {floorOpacity}
                                </span>
                            </div>

                            <div className="telemetry-item">
                                <span className="telemetry-label">
                                    SPD MULT
                                </span>
                                <span className="telemetry-val">
                                    {(speed / 100).toFixed(2)}x
                                </span>
                            </div>

                            <div className="telemetry-item">
                                <span className="telemetry-label">
                                    BASS RESP
                                </span>
                                <span className="telemetry-val">
                                    {bass}%
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>

    );

}