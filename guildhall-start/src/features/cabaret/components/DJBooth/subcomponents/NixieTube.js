import React from "react";
import './NixieTube.css';

export default function NixieTube({ 
    value, 
    color = "#ffaa00", 
    active = true,
    isPowerOn = true, 
    size = "medium" 
}) {

    const glowStyle = (isPowerOn && active)
    ? {
        color: color,
        textShadow: `0 0 4px ${color}, 0 0 10px ${color}, 0 0 18px ${color}`,
        borderColor: color
      }
    : isPowerOn
    ? {
        color: "rgba(160, 100, 40, 0.45)",
        textShadow: "0 0 2px rgba(160, 100, 40, 0.2)"
      }
    : {
        color: "rgba(40, 25, 10, 0.15)",
        textShadow: "none"
    };

    return (
        <div className={`nixie-tube-container ${size} ${!isPowerOn ? 'unpowered' : ''}`}>
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