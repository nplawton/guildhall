import React from "react";
import "../../styles/MasterCommandBar.css";

import DanceMechanism from "./subsomponents/DanceMechanism";
import ControlKnob from "./subsomponents/ControlKnob";
import ArrowControlKnob from "./subsomponents/ArrowControlKnob";


export default function MasterCommandBar ({
    //Light Props
    lightPower = true,
    onToggleLightPower,
    lightDimmer = 100,
    onChangeLightDimmer,

    //Cuckoo Door Props
    isCuckooOpen = false,
    onToggleCuckoo,

    //Dance Mechanism Props
    activeMode=null,
    onSelectMode,

    //Sound Props
    soundPower=true,
    onToggleSoundPower,
    volume=80,
    onChangeVolume,
    treble=50,
    onChangeTreble,
    bass=50,
    onChangeBass,
    isMuted,
    onToggleMute
}) {


    return (

        <div className="master-command-bar-container">

            <div className="bar-rivet top-left">★</div>
            <div className="bar-rivet top-right">★</div>
            <div className="bar-rivet bottom-left">★</div>
            <div className="bar-rivet bottom-right">★</div>

            <div className="command-section far-left-lighting">

                <div 
                    className={`flipper-switch-unit ${!lightPower ? 'unpowered-dull' : ''}`}
                    onClick={onToggleLightPower}
                >

                    <span className="switch-stamped-label">PWR</span>

                    <div className={`flipper-toggle-housing ${lightPower ? "engaged" : ""}`}>
                        <div className="flipper-toggle-lever" />
                    </div>

                </div>

                <div className={`dimmer-knob-unit ${!lightPower ? 'unpowered-dim' : ''}`}>

                    <span className="switch-stamped-label">DIM</span>

                    <ControlKnob 
                        label=""
                        min={0}
                        max={100}
                        value={lightDimmer}
                        onChange={onChangeLightDimmer}
                        size="micro"
                        isPowerOn={lightPower}
                    />

                </div>

            </div>

            <div className="command-section left-center-cuckoo">

                <div 
                    className="cuckoo-vault-housing"
                    onClick={onToggleCuckoo}
                    title="Chrono Automaton Door Vault"
                >
                    

                    <div className={`cuckoo-double-doors ${isCuckooOpen ? "open" : "sealed"}`}>

                        <div className="cuckoo-door left-door">
                            <span className="door-emboss-ring" />
                        </div>

                        <div className="cuckoo-door right-door">
                            <span className="door-emboss-ring" />
                        </div>

                    </div>

                    <div className="cuckoo-hinge-pin top" />
                    <div className="cuckoo-hinge-pin bottom" />


                </div>
                
            </div>

            <div className="command-section center-dance-deck">

                <DanceMechanism 
                    activeMode={activeMode}
                    onSelectMode={onSelectMode}
                    lightPower={lightPower}
                />

            </div>

            <div className="command-section far-right-audio-quad">

                <div className="audio-quad-inverted-grid">

                    <div className="quad-cell controls-inside">
                    
                        <button 
                            className={`audio-push-btn ${soundPower && lightPower ? "active-glow" : ""}`}
                            onClick={onToggleSoundPower}
                            title="Toggle Sound Engine Power"
                            type="button"
                        >
                            <span className="push-inner-ruby" />
                        </button>

                        <span className="quad-stamped-label">SOUND</span>

                    </div>

                    <div 
                        className={`quad-cell controls-inside volume-knob-wrapper ${isMuted ? "knob-muted" : ""}`}
                        onClick={onToggleMute}
                        title="Click to Mute / Unmute"
                        style={{ cursor: "pointer" }}
                    >

                        <ControlKnob 
                            label=""
                            min={0}
                            max={100}
                            value={volume}
                            onChange={onChangeVolume}
                            size="micro"
                        />

                        <span className="quad-stamped-label">
                            {isMuted ? "MUTED" : "VOL"}
                        </span>

                    </div>

                    <div className="quad-cell controls-inside">

                        <ArrowControlKnob 
                            label=""
                            min={0}
                            max={100}
                            value={treble}
                            onChange={onChangeTreble}
                        />

                        <span className="quad-stamped-label">TREB</span>

                    </div>

                    <div className="quad-cell controls-inside">

                        <ControlKnob 
                            label=""
                            min={0}
                            max={100}
                            value={bass}
                            onChange={onChangeBass}
                            size="micro"
                        />

                        <span className="quad-stamped-label">BASS`</span>

                    </div>
                </div>
            </div>

        </div>
    );

}