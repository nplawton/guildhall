import React from "react";
import './NixieTube.css';

export default function NixieTube({ value, color = "#ffaa00", active = true, size = "medium" }) {

    const glowStyle = active
    ? {
        color: color,
        textShadow: `0 0 4px ${color}, 0 0 10px ${color}, 0 0 18px ${color}`,
        borderColor: color
      }
    : {
        color: "rgba(80, 50, 20, 0.3",
        textShadow: "none"
      };

    return (
        <div className={`nixie-tube-container ${size}`}>
            <div className="nixie-glass-envelope">
                <div className="nixie-mesh-grid" />
                
                <div className="nixie-filament-bg">9</div>

                <div className="nixie-filament-active" style={glowStyle}>
                    {value}
                </div>

                <div className="nixie-glass-shine" />

            </div>

            <div className="nixie-brass-base" />

        </div>
    );

}