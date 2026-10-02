import React, {useState} from "react";
import './GuildAccordion.css';
import RoomAccentHardware from "../subcomponenets/RoomAccentHardware";
import { ALL_ROOMS } from "./roomsConfig";


export default function GuildAccordion({ currentRoom = "mainhall", onSelectRoom }) {
    
    const [coinSide, setCoinSide] = useState('heads');
    const [isFlipping, setIsFlipping] = useState(false);
    const [isGearSpinning, setIsGearSpinning] = useState(false);
    const [isSwitchFlipped, setIsSwitchFlipped] = useState(false);

    const handleCasketToggle = () => {
        setIsFlipping(true);
        const nextSide = Math.random() < 0.5 ? 'heads' : 'tails';

        setTimeout(() => {
            setCoinSide(nextSide);
            setIsFlipping(false);
        }, 600);
    };

    const handleFoundryToggle = () => {
        setIsGearSpinning(true);
        setTimeout(() => {
            setIsGearSpinning(false);
        }, 600);
    };

    const handleCabaretToggle = () => {
        setIsSwitchFlipped((prev) => !prev);
    };
    
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
                        onClick={() => {
                            if (currentRoom === 'casket') handleCasketToggle();
                            if (currentRoom === 'bestiary') handleFoundryToggle();
                            if (currentRoom === 'cabaret') handleCabaretToggle();
                        }}
                    >
                        <span className="header-iron-bracket bracket-left"></span>

                       <div className="nav-header-brand">

                            <span className="me-2">🏰</span>
                            <span className="nav-title-text">Guild Navigation</span>

                       </div>

                       {currentRoom === 'casket' && (
                            <div className={`casket-coin-wrapper ${isFlipping ? 'spinning' : ''} side-${coinSide}`}>
                                <div className="coin-face coin-heads">⚰️</div>
                                <div className="coin-face coin-tails">🍾</div>
                            </div>
                        )}

                        {currentRoom === 'bestiary' && (
                            <div className="foundry-gear-wrapper" title="Foundry Arcane Engine">
                                <div className={`foundry-gear ${isGearSpinning ? 'power-up-spin' : ''}`}>⚙</div>
                            </div>
                        )}

                        {currentRoom === 'cabaret' && (
                            <div 
                                className="cabaret-switch-wrapper" 
                                title="Stage Main Knife Switch"
                            >
                                <div className={`industrial-knife-switch ${isSwitchFlipped ? 'open-down' : 'closed-up'}`}>
                                    <div className="switch-mounting-plate">
                                        <div className="notch-guide guide-left"></div>
                                        <div className="notch-guide guide-right"></div>
                                        <div className="pivot-hex-bolt"></div>

                                        <div className="knife-lever-arm">
                                            <div className="lever-slot"></div>
                                            <div className="copper-cylinder-handle">
                                                <div className="handle-bolt-head"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

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
                            {ALL_ROOMS.map((room) => {

                                const isActive = currentRoom === room.id;

                                return(
                                    <button
                                        key={room.id}
                                        onClick={() => onSelectRoom && onSelectRoom(room.id)}
                                        className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${isActive ? 'active' : ''}`}
                                        style={{ '--room-acent-color': room.tubeColor }}
                                    >
                                        
                                        <div className="row-left-group">

                                            <RoomAccentHardware 
                                                roomTheme={currentRoom}
                                                isActive={isActive}
                                                color={room.tubeColor}
                                            />

                                             <span className="room-symbol me-2">
                                                {room.symbol}
                                            </span>

                                        </div>

                                        <span className="room-label">
                                            {room.label}
                                        </span>

                                        <div className="row-right-group">

                                            <small className="owner-tag opacity-75 me-3">{room.owner}</small>

                                            <div className="row-accent-slot right">

                                                <RoomAccentHardware 
                                                    roomTheme={currentRoom}
                                                    isActive={isActive}
                                                    color={room.tubeColor}
                                                />

                                            </div>
                                        </div>

                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}