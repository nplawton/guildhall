import React from "react";
import './RoomWeapons.css'

export default function DMSanctumWeapon({ onClick }) {
    return (
        <button
            type="button"
            className="weapon-btn dm-sanctum-btn"
            onClick={onClick}
            title="DM Sanctum"
        >
            <div className="prop-scroll-3d"></div>

            <div className="prop-inkwell-3d">
                <span className="prop-quill-3d">🪶</span>
            </div>
        </button>
    );
}