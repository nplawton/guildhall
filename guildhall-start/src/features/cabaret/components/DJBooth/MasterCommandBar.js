import React from "react";
import "../../styles/MasterCommandBar.css";

import ControlKnob from "./subsomponents/ControlKnob";


export default function MasterCommandBar ({
    energyLevel = 100,
    isCuckooOpen = false,
    lightPower = true,
    onToggleLightPower,
    lightDimmer = 100,
    onChangeLightDimmer,
}) {

    const isDepleted = energyLevel <= 0;
    const showWarning = isCuckooOpen || isDepleted;

    const needleRotation = -60 + (energyLevel / 100) * 120;

    return (

        <div className="panels-holder-container">

            {/* Layer 1: Steampunk Display Screen */}
            <div className="center-layer layer-1">
                <SteampunkDisplay 
                    modeName={activeModeName}
                    colorCode={activeMode}
                    floorOpacity={lightDimmer}
                    speed={lightSpeed}
                    bass={bass}
                    lightPower={lightPower}
                    soundPower={soundPower}
                />
            </div>

            <ControlKnob 
                label=""
                min={0}
                max={100}
                value={bass}
                onChange={onChangeBass}
                size="small"
            />

            <ArrowControlKnob 
                label=""
                min={0}
                max={100}
                value={treble}
                onChange={onChangeTreble}
            />

            <div className="flipper-cast-plaque">
                <span className="plaque-star-rivet">★</span>
                <span className="plaque-text">TREBLE</span>
                <span className="plaque-star-rivet">★</span>
            </div>


            {/* UpperFilagree Drop=Panel */}
            <div className="filigree-drop-panel">
                <div className="panel-filigree-overlay" />
                <div className="panel-corner-rivets">
                    <span className="star-rivet top-left">★</span>
                    <span className="star-rivet top-right">★</span>
                    <span className="star-rivet bottom-left">★</span>
                    <span className="star-rivet bottom-right">★</span>
                </div>

                
            

                {/* Center Cuckoo Door & Mechanical Warning Flag */}
                <div className="cuckoo-housing">

                    <div className="cuckoo-arch-frame">
                        <div className={`cuckoo-door door-left ${showWarning ? "open" : ""}`} />
                        <div className={`cuckoo-door door-right ${showWarning ? "open" : ""}`} />

                        <div className="cuckoo-inner-chamber">
                            <div className={`cuckoo-bird ${showWarning ? "emerged" : ""}`}>
                                <svg viewBox="0 0 40 30" className="bird-svg">
                                    <path d="M 5,20 Q 15,5 25,12 Q 35,10 38,15 Q 32,22 20,25 Z" fill="#b5873d" stroke="#1a0c02" strokeWidth="1" />
                                    <circle cx="30" cy="13" r="1.5" fill="#ffd700" />
                                    <polygon points="38,15 42,17 37,19" fill="#ffd700" />
                                </svg>
                            </div>
                        </div>

                    </div>

                    <div className={`warning-flag-assembly ${isDepleted ? "triggered" : ""}`}>
                        <div className="flag-hinge-pin" />
                        <div className="brass-warning-plaque">
                            <span className="warning-text">
                                CHARGE CABARET
                            </span>
                        </div>
                    </div>
                </div>
            

                {/* Right Side: Pressure Stem Whistle */}
                <div className="steam-whistle-assembly">

                    <div className={`steam-cloud-emitter ${isDepleted ? "releasing-steam" : ""}`}>
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

              {/* Top Corner: Push Power BTN & Master Volume */}
                        <div className="right-wing-top-controls">
            
                            <div className="push-button-wrapper">
            
                                <button 
                                    className={`steampunk-push-btn ${soundPower ? "on" : "off"}`}
                                    onClick={onToggleSoundPower}
                                    title="Toggle Sound Power"
                                    type="button"
                                >
                                    <div className="btn-cap" />
                                </button>
            
                                <div className="flipper-cast-plaque">
                                    <span className="plaque-star-rivet">★</span>
                                    <span className="plaque-text">POWER</span>
                                    <span className="plaque-star-rivet">★</span>
                                </div>
            
                            </div>
            
                            <div className="volume-control-wrapper">
            
                                <ControlKnob 
                                    label=""
                                    min={0}
                                    max={100}
                                    value={volume}
                                    onChange={onChangeVolume}
                                    size="small"
                                />
            
                                <div className="flipper-cast-plaque">
                                    <span className="plaque-star-rivet">★</span>
                                    <span className="plaque-text">VOLUME</span>
                                    <span className="plaque-star-rivet">★</span>
                                </div>
            
                            </div>
            
                        </div>

        </div>

    );

}

{/* Top Corner */}
            <div className="left-wing-top-controls">
                
                <div className="flipper-switch-wrapper">

                    <button
                        className={`flipper-switch ${lightPower ? "on" : "off"}`}
                        onClick={onToggleLightPower}
                        title="Toggle Lighting Power"
                        type="button"
                    >
                        <div className="flipper-track-recess">
                            <div className="flipper-handle">
                                <div className="flipper-pin-indicator" />
                            </div>
                        </div>
                    </button>

                    <div className="flipper-cast-plaque">
                        <span className="plaque-star-rivet">★</span>
                        <span className="plaque-text">POWER</span>
                        <span className="plaque-star-rivet">★</span>
                    </div>
                    
                </div>

                <div className="dimmer-control-wrapper">

                    <ControlKnob 
                        label=""
                        min={0}
                        max={100}
                        value={lightDimmer}
                        onChange={onChangeLightDimmer}
                        size="small"
                    />

                    <div className="flipper-cast-plaque">
                        <span className="plaque-star-rivet">★</span>
                        <span className="plaque-text">DIMMER</span>
                        <span className="plaque-star-rivet">★</span>
                    </div>

                </div>
                
            </div>