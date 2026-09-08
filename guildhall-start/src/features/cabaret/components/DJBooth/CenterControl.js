import React from "react";
import SliderControl from "./subsomponents/SliderControl";
import DanceMechanism from "./subsomponents/DanceMechanism";
import "../../styles/CenterControl.css";

export default function CenterControl({
    bpm = 120,
    onChangeBpm,
    lightSpeed = 50,
    onChangeLightSpeed,
    activeMode = "I",
    onSelectMode
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

            <div className="center-sliders-meter-deck">

                <div className="deck-column left-slider-col">

                    <SliderControl 
                        label=""
                        min={0}
                        max={100}
                        value={lightSpeed}
                        onChange={onChangeLightSpeed}
                        height={120}
                    />

                    <div className="flipper-cast-plaque">
                        <span className="plaque-star-rivet">★</span>
                        <span className="plaque-text">L-SPD</span>
                        <span className="plaque-star-rivet">★</span>
                    </div>

                </div>

                <div className="deck-column ceneter-meter-col">

                    <div className="nixie-meters-frame">

                        <div className="flipper-cast-plaque">
                            <span className="plaque-star-rivet">★</span>
                            <span className="plaque-text">METERS</span>
                            <span className="plaque-star-rivet">★</span>
                        </div>

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
                            </div>

                        </div>
                    </div>

                </div>

                <div className="deck-column right-slider-col">

                    <SliderControl 
                        label=""
                        min={60}
                        max={180}
                        value={bpm}
                        onChange={onChangeBpm}
                        height={120}
                    />

                    <div className="flipper-cast-plaque">
                        <span className="plaque-star-rivet">★</span>
                        <span className="plaque-text">TEMPO</span>
                        <span className="plaque-star-rivet">★</span>
                    </div>

                </div>

            </div>

            <div className="center-dance-mechanism-deck">
                <DanceMechanism 
                    activeMode={activeMode}
                    onSelectMode={onSelectMode}
                />
            </div>            
            
        </div>

    );

}