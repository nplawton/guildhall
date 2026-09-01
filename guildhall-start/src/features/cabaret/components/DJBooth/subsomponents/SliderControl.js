import React, { useState, useRef } from "react";
import './SliderControl.css';

export default function SliderControl({
    label = "FADER",
    min = 0,
    max = 100,
    value = 50,
    onChange,
    height = 140
}) {

    const trackRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const pct = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

    const updateValueFromY = (clientY) => {
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const offsetY = rect.bottom - clientY;
        const totalHeight = rect.height;
        const rawPct = Math.min(1, Math.max(0, offsetY / totalHeight));
        const newValue = Math.round(min + rawPct * (max - min));

        if(onChange) {
            onChange(newValue);
        }

    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        updateValueFromY(e.clientY);

        const handleMouseMove = (moveEvent) => {
            updateValueFromY(moveEvent.clientY);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleWheel = (e) => {
        e.preventDefault();
        const step = (max - min) / 20;
        const direction = e.deltaY < 0 ? 1 : -1;
        let newValue = value + direction * step;
        newValue = Math.min(max, Math.max(min, Math.round(newValue)));

        if(onChange) {
            onChange(newValue);
        }
    };

    return (

        <div className="slider-control-wrapper" onWheel={handleWheel}>

            <div className="slider-track-container" style={{ height: `${height}px` }}>

                {/* Left Etched Side Tick Marks */}
                <div className="slider-ticks-left">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="slider-tick" />
                    ))}
                </div>
                
                {/* Recessed Center Track Slot */}
                <div
                    ref={trackRef}
                    className="slider-track-slot"
                    onMouseDown={handleMouseDown}
                >
                    <div className="slider-track-fill" style={{ height: `${pct}%` }} />
                </div>
                
                {/* Right Etched Side Tick Marks  */}
                <div className="slider-ticks-right">
                    {Array.from({ length:6 }).map((_, i) => (
                        <div key={i} className="slider-tick" />
                    ))}
                </div>

                {/* Knurled Brass Slider Handle */}
                <div
                    className={`slinder-handle ${isDragging ? "dragging" : ""}`}
                    style={{ bottom: `calc(${pct}% - 12px)` }}
                    onMouseDown={handleMouseDown}
                    title={`${label}: ${value}`}
                >
                    <div className="slider-handle-grip-line" />
                    <div className="slider-handle-grip-line" />
                    <div className="slider-handle-grip-line" />
                </div>

            </div>

            {/* Etched Label Below */}
            {label && <span className="slider-label">{label}</span>}

        </div>

    );

}