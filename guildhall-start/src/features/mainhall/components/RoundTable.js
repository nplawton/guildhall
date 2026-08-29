import React from "react";
import '../styles/RoundTable.css'
import { TABLE_STATIONS } from "../../../components/Navigation/roomsConfig";

export default function RoundTable({ onSelectRoom }) {
    return (

        <div className="table-assembly">

            <div className="tabletop-container">
                <div className="tabletop-under-rim"></div>
                <div className="tabletop-surface"></div>

                <div className="nat1-center-die">
                    <div className="d20-face">
                        <span className="die-number">1</span>
                    </div>
                </div>

                <div className="compass-center-hub"></div>

                {TABLE_STATIONS.map((station) => {
                    const trueNorthAngle = station.angle - 90;
                    const isLeftHalf = station.angle > 180 && station.angle < 3060;
                    const WeaponComponent = station.weapon;

                    return (
                        <div
                            key={station.id}
                            className="radial-station-ray"
                            style={{transform: `translate(0%, -50%) rotate(${trueNorthAngle}deg)`}}
                        >

                            <div className={`radial-label-wrapper ${isLeftHalf ? 'flip-left' : ''}`}>

                                <div className="title-text-box">

                                    <span className="station-room-title">{station.label}</span>

                                </div>

                                {WeaponComponent && (
                                    <div className="weapon-prop-slot">
                                        <WeaponComponent onClick={() => onSelectRoom(station.id)} />
                                    </div>
                                )}

                            </div>

                        </div>
                    );
                })}

            </div>

            <div className="table-pedestal-assembly">
                <svg className="table-pedestal-svg" viewBox="0 0 200 180">
                    <defs>
                        <linearGradient id="pedestalWood" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#150c07" />
                            <stop offset="25%" stopColor="#3b2415" />
                            <stop offset="50%" stopColor="#5a3a24" />
                            <stop offset="75%" stopColor="#2d1a0e" />
                            <stop offset="100%" stopColor="#0d0704" />
                        </linearGradient>

                        <linearGradient id="ringWood" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#6b442a" />
                            <stop offset="70%" stopColor="#2d1a0e" />
                            <stop offset="100%" stopColor="#100804" />
                        </linearGradient>
                    </defs>

                    <path d="M 82,110 Q 55,105 38,118 L 48,126 Q 65,116 85,120 Z" fill="#120a05" opacity="0.65" />
                    <path d="M 118,110 Q 145,105 162,118 L 152,126 Q 135,116 115,120 Z" fill="#120a05" opacity="0.65" />

                    <rect x="78" y="0" width="44" height="135" rx="3" fill="url(#pedestalWood)" stroke="#0d0704" strokeWidth="1.2" />

                    <rect x="72" y="20" width="56" height="14" rx="3" fill="url(#ringWood)" stroke="#0d0704" strokeWidth="0.8" />
                    <rect x="70" y="65" width="60" height="18" rx="4" fill="url(#ringWood)" stroke="#0d0704" strokeWidth="0.8" />
                    <rect x="72" y="105" width="56" height="14" rx="3" fill="url(#ringWood)" stroke="#0d0704" strokeWidth="0.8" />

                    <path d="M 80,115 C 65,120 45,145 25,155 L 30,168 C 55,158 72,138 82,130 Z" fill="url(#pedestalWood)" stroke="#0d0704" strokeWidth="1.2" />
                    <path d="M 120,115 C 135,120 155,145 175,155 L 170,168 C 145,158 128,138 118,130 Z" fill="url(#pedestalWood)" stroke="#0d0704" strokeWidth="1.2" />

                </svg>
            </div>

        </div>

    );
}