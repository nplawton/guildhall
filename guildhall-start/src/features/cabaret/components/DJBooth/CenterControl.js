import React from "react";
import SteampunkDisplay from "./subsomponents/SteampunkDisplay";
import ControlKnob from "./subsomponents/ControlKnob";
import ArrowControlKnob from "./subsomponents/ArrowControlKnob";
import SliderControl from "./subsomponents/SliderControl";
import DanceMechanism from "./subsomponents/DanceMechanism";
import TimeDisplay from "./subsomponents/TimeDisplay";
import "../../styles/CenterControl.css";

export default function CenterControl({
    activeMode = "I",
    activeModeName = "CLASSIC BRASS",
    bpm = 120,
    onChangeBpm,
    lightSpeed = 50,
    onChangeLightSpeed,
    bass = 50,
    onChangeBass,
    treble = 50,
    onChangeTreble,
    lightDimmer = 100,
    lightPower = true,
    soundPower = true,
    hours = 12,
    minutes = 0,
    onChangeHours,
    onChangeMinutes,
    onSelectMode,
    activePreset = null,
    onSelectPreset
}) {

    const getLitCount = (val) => Math.round((val / 100) * 6);
    const leftLitCount = getLitCount(lightSpeed);
    const rightLitCount = getLitCount(Math.min(100, Math.max(0, ((bpm - 60) / 120) * 100)));

    const METER_COLORS = [
        "#ff6666",
        "#ff4444",
        "#ff2222",
        "#ff0000",
        "#dd0000",
        "#990000"
    ];

    return (

        <div className="center-control-container">

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

            {/* Lower Top Deck: Layers 2, 3, & 4 */}
            <div className="center-lower-top-deck">

                {/* Layer 2: Left Side Lower Top Deck */}
                <div className="deck-column left-column">
                    <ControlKnob 
                        label="BASS"
                        min={0}
                        max={100}
                        value={bass}
                        onChange={onChangeBass}
                        size="small"
                    />

                    <div className="slider-spacer" />

                    <SliderControl 
                        label="LIGHT SPD"
                        min={0}
                        max={100}
                        value={lightSpeed}
                        onChange={onChangeLightSpeed}
                        height={130}
                    />
                </div>

                {/* Layer 3: Center Lower Top Deck */}
                <div className="deck-column center-meter-column">
                    <div className="nixie-meters-frame">
                        <span className="meter-frame-title">
                            RAMP METERS
                        </span>
                        <div className="meters-grid">

                            {/* Column 1: Light Speed Ramp */}
                            <div className="meter-col">
                                {Array.from({ length:6 }).map ((_, i) => {
                                    const level = 6 - i;
                                    const isLit = leftLitCount >= level;
                                    const color = METER_COLORS[level - 1];
                                    return(
                                        <div 
                                            key={i}
                                            className={`mini-nixie-bulb ${isLit ? "lit" : ""}`}
                                            style={{
                                                "--bulb-color": color,
                                                boxShadow: isLit ? `0 0 6px ${color}` : "none"
                                            }}
                                        />
                                    );
                                })}
                                <span className="col-label"> 
                                    L-SPD
                                </span>
                            </div>

                            {/* Column 2: Tempo Ramp */}
                            <div className="meter-col">
                                {Array.from({ length: 6 }).map((_, i) => {
                                    const level = 6 - i;
                                    const isLit = rightLitCount >= level;
                                    const color = METER_COLORS[level - 1];
                                    return (
                                        <div 
                                            key={i}
                                            className={`mini-nixie-bulb ${isLit ? "lit" : ""}`}
                                            style={{
                                                "--bulb-color": color,
                                                boxShadow: isLit ? `0 0 6px ${color}` : "none"
                                            }}
                                        />
                                    );
                                })}
                                <span className="col-label">
                                    TEMPO
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Layer 4: Right Lower Top Deck */}
                <div className="deck-column right-column">
                    <ArrowControlKnob 
                        label="TREBLE"
                        min={0}
                        max={100}
                        value={treble}
                        onChange={onChangeTreble}
                    />

                    <div className="slider-spacer" />
                    
                    <SliderControl 
                        label="TEMPO RAMP"
                        min={60}
                        max={180}
                        value={bpm}
                        onChange={onChangeBpm}
                        height={130}
                    />

                </div>

            </div>

            {/* Layer 5: DanceMechanism */}
            <div className="center-layer layer-5">
                <DanceMechanism 
                    activeMode={activeMode}
                    onSelectMode={onSelectMode}
                />
            </div>

            {/* Layer 6: Time Display */}
            <div className="center-layer layer-6">
                <TimeDisplay 
                    hours={hours}
                    minutes={minutes}
                    onChangeHours={onChangeHours}
                    onChangeMinutes={onChangeMinutes}
                />
            </div>

            {/* Layer 7: Oval Brass Prsets */}
            <div className="center-layer layer-7">
                <div className="presets-plate">
                    <span className="presets-label">
                        SCENE PRESETS:
                    </span>
                    <div className="preset-buttons-row">
                        {[1, 2, 3, 4].map((num) => (
                            <button 
                                key={num}
                                className={`oval-preset-btn ${activePreset === num ? "active" : ""}`}
                                onClick={() => onSelectPreset && onSelectPreset(num)}
                                title={`Recall Scene Preset ${num}`}
                            >
                                <span className="preset-num">
                                    {num}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

        </div>

    );

}