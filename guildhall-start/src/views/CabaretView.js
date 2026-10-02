import React from "react";
import ClockworkCabaret from '../features/cabaret/ClockworkCabaret';
import GuildAccordion from "../components/Navigation/GuildAccordion.js";


export default function CabaretView({ currentRoom, onSelectRoom }) {
    return (
        <div className="page-view view-bard">

            <GuildAccordion currentRoom={currentRoom} onSelectRoom={onSelectRoom} />

            <main className="room-content">
                <ClockworkCabaret />
            </main>

        </div>
    );
}