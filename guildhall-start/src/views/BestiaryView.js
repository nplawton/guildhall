import React from "react";
import KnowledgeFoundry from '../features/bestiary/KnowledgeFoundry';
import GuildAccordion from "../components/Navigation/GuildAccordion.js";


export default function FoundryView({ currentRoom, onSelectRoom }) {
    return(
        <div className="page-view view-bestiary">

            <GuildAccordion currentRoom={currentRoom} onSelectRoom={onSelectRoom} />

            <main className="room-content">
                <KnowledgeFoundry />
            </main>
            
        </div>
    );
}