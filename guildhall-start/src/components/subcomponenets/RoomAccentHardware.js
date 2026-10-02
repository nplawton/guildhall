import React from "react";

export default function RoomAccentHardware({ roomTheme, isActive, color}) {
    switch (roomTheme) {
        case 'sanctum': 
            return (
                <div className={`sanctum-wax-stud ${isActive ? 'lit' : ''}`} title="Wax Seal Stud">
                    <div className="wax-body" />
                    <div className="brass-center-pin" />
                </div>
            );
        case 'range':
            return (
                <div className={`grotto-crystal-stud ${isActive ? 'sparkling' : ''}`} title="Celestial Star">
                    <div className="crystal-facet" />
                </div>
            );
        case 'casket':
            return (
                <div className={`casket-d20-stud ${isActive ? 'nat-20' : ''}`} title={`${isActive ? 'NAT 20!' : 'Nat 1'}`}>
                    <span className="d20-number">{isActive ? "20" : "1"}</span>
                </div>
            );
        case 'cabaret':
            return (
                <div 
                    className={`mini-vacuum-tube-wrapper ${isActive ? 'lit' : ''}`} 
                    style={{ '--tube-glow-color': color || '#ef4444' }}
                    title="Vacuum Tube"
                >
                    <div className="glass-bulb">
                        <div className="tube-filament" />
                    </div>
                    <div className="brass-tube-base"></div>
                </div>
            );
        case 'bestiary':
            return (
                <div 
                    className={`foundry-conduit-rivet ${isActive ? 'glowing' : ''}`} 
                    title="Conduit Rivet"
                />
            );
        case 'mainhall':
        default:
            return null;
    }
}