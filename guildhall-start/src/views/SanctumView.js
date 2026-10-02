import React from "react";
import DMSanctum from '../features/sanctum/DMSanctum.js';
import GuildAccordion from "../components/Navigation/GuildAccordion.js";


export default function DMSanctumView({ currentRoom, onSelectRoom }){
    return(
        <div className="page-view view-sanctum">

            <GuildAccordion currentRoom={currentRoom} onSelectRoom={onSelectRoom} />

            <main className="room-contnet">
                <DMSanctum />
            </main>

        </div>
    );
}