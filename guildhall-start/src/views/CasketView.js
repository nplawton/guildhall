import React from "react";
import WhisperingCasketTavern from '../features/casket/WhisperingCasket.js';
import GuildAccordion from "../components/Navigation/GuildAccordion.js";


export default function CasketView({ currentRoom, onSelectRoom }) {
    return(
        <div className="page-view view-casket">

            <GuildAccordion currentRoom={currentRoom} onSelectRoom={onSelectRoom} />

            <main className="room-content">
                <WhisperingCasketTavern />
            </main>
            
        </div>
    );
}