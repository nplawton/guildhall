import React from "react";
import '../styles/RoundTable.css'
import { TABLE_STATIONS } from "../../../components/Navigation/roomsConfig";
import DMSanctumWeapon from "../../../components/Navigation/weapons/DmSanctumWeapon";
import StarLitGrottoWeapon from "../../../components/Navigation/weapons/StarLitGrottoWeapon";
import WhisperingCasketWeapon from "../../../components/Navigation/weapons/WhisperingCasketWeapon";

const WEAPON_COMPONENTS = {
    sanctum: DMSanctumWeapon,
    range: StarLitGrottoWeapon,
    casket: WhisperingCasketWeapon,
}

export default function RoundTable({ onSelectRoom }) {
    return (
        <div className="table-assembly">

            <div className="tabletop-container">
                <div className="table-under-rim"></div>
                <div className="tabletop-surface"></div>

                <div className="nat1-center-die">
                    <div className="d20-face">
                        <span className="die-number">1</span>
                    </div>
                </div>

                <div className="compass-center-hub"></div>
                {TABLE_STATIONS.map((station) => {

                    const trueNorthAngle = station.angle - 90;
                    const isLeftHalf = station.angle > 180 && station.angle < 360;
                    const WeaponComponent = WEAPON_COMPONENTS[station.id];
                    
                    return (
                        <div
                            key={station.id}
                            className="radial-station-ray"
                            style={{ transform: `translate(0%, -50%) rotate(${trueNorthAngle}deg)` }}
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
                <div className=" curved-foot foot-back-left"></div>
                <div className="curved-foot foot-back-right"></div>

                <div className="turned-column-pillar">
                    <div className="column-turn-ring ring-top"></div>
                    <div className="column-turn-ring ring-mid"></div>
                    <div className="column-turn-ring ring-bottom"></div>    
                </div> 

                <div className=" curved-foot foot-front-left"></div>
                <div className="curved-foot foot-front-right"></div>
            </div>

        </div>
    );
}