import React from "react";
import './DiceButton.css';

export default function DiceButton({ type = "D6", label, active = false, onClick }) {

    const renderDicePath = () => {
        switch (type) {
            case "D4":
                return (
                    <polygon points="50,10 90,85 10,85" />
                );
            case "D6":
                return (
                    <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" />
                );
            case "D8":
                return (
                    <polygon points="50,8 90,50 50,92 10,50" />
                );
            case "D10":
                return (
                    <polygon points="50,8 88,38 50,92 12,38" />
                );
            case "D12":
                return (
                    <polygon points="50,10 88,38 73,85 27,85 12,38" />
                );
            case "D20":
            default:
                return (
                    <polygon points="50,6 92,30 92,75 50,96 8,75 8,30" />
                );
        }
    };

    return (
        <button
            className={`dice-button-container ${type} ${active ? "active" : ""}`}
            onClick={onClick}
            title={`${type}: ${label}`}
        >

            <svg viewBox="0 0 100 100" className="dice-svg">
                <defs>

                    <radialGradient id="diceBrassGrad" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#f7d08b" />
                        <stop offset="50%" stopColor="#b5873d" />
                        <stop offset="85%" stopColor="#6e4f1b" />
                        <stop offset="100%" stopColor="#241402" />
                    </radialGradient>

                    <radialGradient id="diceActiveGrad" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#fff2be" />
                        <stop offset="60%" stopColor="#d4af37" />
                        <stop offset="100%" stopColor="#7a5510" />
                    </radialGradient>

                </defs>

                <g className="dice-body">
                    {React.cloneElement(renderDicePath(), {
                        className:"dics-shape-base",
                        fill: active ? "url(#diceActiveGrad)" : "url(#diceBrassGrad)",
                        stroke: active ? "#ffd700" : "#1a1205",
                        strokeWidth: "4"
                    })}
                </g>

            </svg>

            <span className="dice-label">{type}</span>

        </button>
    );

}