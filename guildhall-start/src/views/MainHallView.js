import React from "react";
import MainHall from '../features/mainhall/MainHall.js';
import GuildAccordion from "../components/Navigation/GuildAccordion.js";


export default function MainHallView({ currentRoom, onSelectRoom}) {
    return (
        <div className="page-view view-party">

            <GuildAccordion currentRoom={currentRoom} onSelectRoom={onSelectRoom} />

            <main className="room-content">
                <MainHall currentRoom={currentRoom} onSelectRoom={onSelectRoom}/>
            </main>

        </div>
    );
}