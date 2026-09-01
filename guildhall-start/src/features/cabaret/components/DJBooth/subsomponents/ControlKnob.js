import React, { useState, useRef } from "react";
import './ControlKnob.css';

export default function ControlKnob({
    label = "KNOB",
    min = 0,
    max = 100,
    value = 50,
    onChange,
    size = "medium"
}) {

    const knobRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const dragStartY = useRef(0);
    const dragStartValue = useRef(value);

    const valueToDregrees = (val) => {
        const pct = (val - min) / (max - min);
        return -135 + pct * 270;
    }

    const currentDegrees = valueToDregrees(value);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        dragStartY.current = e.clientY;
        dragStartValue.current = value;

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e) => {
        const deltaY = dragStartY.current - e.clientY;
        const range = max - min;
        const sensitivity = 0.5;
        let newValue = dragStartValue.current + (deltaY * sensitivity * (range / 100));

        newValue = Math.min(max, Math.max(min, Math.round(newValue)));

        if (onChange) {
            onChange(newValue);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
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

        <div className={`control-knob-wrapper ${size}`}>
            {/* Rotating Dial Control */}
            <div
                ref={knobRef}
                className={`control-knob-body ${isDragging ? "dragging" : ""}`}
                onMouseDown={handleMouseDown}
                onWheel={handleWheel}
                style={{ transform: `rotate(${currentDegrees}deg)` }}
                title={`${label}: ${value}`}
            >

                <svg viewBox="0 0 100 100" className="knob-svg">
                    <defs>
                        <radialGradient id="knobEdgeGrad" cx="50%" cy="50%" r="50%">
                            <stop offset="70%" stopColor="#574219" />
                            <stop offset="90%" stopColor="#2b1f09" />
                            <stop offset="100%" stopColor="#0f0b03" />
                        </radialGradient>

                        <radialGradient id="knobFaceGrad" cx="35%" cy="35%" r="65%">
                            <stop offset="0%" stopColor="#fff2be" />
                            <stop offset="35%" stopColor="#d4af37" />
                            <stop offset="75%" stopColor="#7a5510" />
                            <stop offset="100%" stopColor="#332002" />
                        </radialGradient>
                    </defs>

                    <circle cx="50" cy="50" r="48" fill="url(#knobEdgeGrad)" stroke="#1a1205" strokeWidth="2" />

                    {Array.from({ length: 12 }).map((_, i) => (
                        <line 
                            key={i}
                            x1="50" y1="5" x2="50" y2="10"
                            stroke="#f7d08b" strokeWidth="2" opacity="0.6"
                            transform={`rotate(${i * 30} 50 50)`}
                        />
                    ))}

                    <circle cx="50" cy="50" r="38" fill="irl(#knobFaceGrad)" stroke="#241402" strokeWidth="1.5" />
                    <circle cx="50" cy="50" r="34" fill="none" stroke="#f7d08b" strokeWidth="1" opacity="0.8" />

                    <line x1="50" y1="16" x2="50" y2="34" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                    <line x1="50" y1="16" x2="50" y2="34" stroke="#1a0c02" strokeWidth="1" strokeLinecap="round" />

                </svg>

            </div>

            {label && <span className="knob-label">{label}</span>}

        </div>

    );

}