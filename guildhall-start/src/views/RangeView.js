import React from "react";
import SorcererArcaneRange from '../features/range/StarLitGrotto.js';
import GuildAccordion from "../components/Navigation/GuildAccordion.js";


export default function RangeView({ currentRoom, onSelectRoom }) {
    return(
        <div className="page-view view-range">

            <GuildAccordion currentRoom={currentRoom} onSelectRoom={onSelectRoom} />

            <main className="room-content">
                <SorcererArcaneRange />
            </main>
            
        </div>
    );
}