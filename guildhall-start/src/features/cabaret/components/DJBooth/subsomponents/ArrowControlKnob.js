import React, { useState, useRef } from "react";
import "./ArrowControlKnob.css";

export default function ArrowControlKnob({
    label = "TREBLE",
    min = 0,
    max = 100,
    value = 50,
    onChange
}) {

    const knobRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartY = useRef(0);
    const dragStartValue = useRef(value);

    const valueToDegress = (val) => {
        const pct = (val - min) / (max - min);
        return -135 + pct * 270;
    };

    const currentDegress = valueToDegress(value);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        dragStartY.current = e.cilentY;
        dragStartValue.current = value;
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e) => {
        const deltaY = dragStartY.current - e.cilentY;
        const range = max - min;
        let newValue = dragStartValue.current + (deltaY * 0.5 * (range / 100));
        newValue = Math.min(max, Math.max(min, Math.round(newValue)));
        if (onChange) onChange(newValue);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
    };

    const handelWheel = (e) => {
        e.prebentDefault();
        const step = (max - min) / 20;
        const direction = e.deltaY < 0 ? 1 : -1;
        let newValue = Math.min(max, Math.max(min, Math.round(value + direction * step)));
        if (onChange) onChange(newValue);
    };

    return (
        <div className="arrow-knob-wrapper" onWheel={handelWheel}>

            <div
                ref={knobRef}
                className={`arrow-knob-body ${isDragging ? "dragging" : ""}`}
                onMouseDown={handleMouseDown}
                style={{ transform: `rotate(${currentDegress}deg)` }}
                title={`${label}: ${value}`}
            >

                <svg viewBox="0 0 100 100" className="arrow-knob-svg">

                    <defs>
                        <radialGradient id="arrowKnobGrad" cx="35%" cy="35%" r="65%">
                            <stop offset="0%" stopColor="#fff2be" />
                            <stop offset="40%" stopColor="#b5873d" />
                            <stop offset="85%" stopColor="#6e4f1b" />
                            <stop offset="100%" stopColor="#241402" />
                        </radialGradient>
                    </defs>

                    <circle cx="50" cy="50" r="46" fill="#1c1206" stroke="#573e19" strokeWidth="2" />
                    <circle cx="50" cy="50" r="40" fill="url(#arrowKnobGrad)" stroke="#1a0c02" strokeWidth="1.5" />

                    <circle cx="50" cy="50" r="34" fill="none" stroke="#f7d08b" strokeWidth="1" opacity="0.6" />

                    <path 
                        d="M 50 12 L 60 28 L 54 28 L 54 36 L 46 36 L 46 28 L 40 28 Z" 
                        fill="#ffffff" 
                        stroke="#1a0c02" 
                        strokeWidth="1.5"
                    />

                </svg>

            </div>

            {label && <span className="arrow-knob-label">{label}</span>}

        </div>
    );

}