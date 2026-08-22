import React from "react";
import './GuildAccordion.css';
import { ALL_ROOMS } from "./roomsConfig";


export default function GuildAccordion({ currentRoom, onSelectRoom }) {
    return(
        <div id="guildAccordionParent" className={`accordion guild-nav-accordion theme-${currentRoom}`}>
            <div className="accordion-item border-0 bg-transparent">
                <h2 className="accordion-header" id="navHeading">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navCollapse"
                        aria-expanded="false"
                        aria-controls="navCollapse"
                    >
                        <span className="header-iron-bracket bracket-left"></span>
                        <span className="me-2">🏰</span>
                        <span className="nav-title-text">Guild Navigation</span>
                        <span className="header-iron-bracket bracket-right"></span>
                    </button>
                </h2>
                <div 
                    id="navCollapse" 
                    className="accordion-collapse collapse" 
                    data-bs-parent="#guildAccordionParent"
                >
                    <div className="accordion-body p-0 postion-relative">

                        <div className="side-post post-left"></div>
                        <div className="side-post post-right"></div>

                        <div className="list-group list-group-flush bg-transparent nav-rows-wrapper">
                            {ALL_ROOMS.map((room) => (
                                <button
                                    key={room.id}
                                    onClick={() => onSelectRoom(room.id)}
                                    className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${currentRoom === room.id ? 'active' : ''}`}
                                >
                                    <span className="room-symbol ms-2 me-1">{room.symbol}</span>
                                    <span className="room-label">{room.label}</span>
                                    <small className="opacity-75 me-3">{room.owner}</small>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}