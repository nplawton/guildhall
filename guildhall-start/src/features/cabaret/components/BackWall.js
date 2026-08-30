import React from "react";
import '../styles/BackWall.css';

import BalanceSpring from "./BackWall/BalanceSpring";
import GearTrain from "./BackWall/GearTrain";
import LutePendulum from "./BackWall/LutePendulum";

export default function BackWall() {
    return (
        <div className="back-wall-assembly">
            <div className="wall-section left-section">
                <GearTrain />
            </div>

            <div className="wall-section center-section">
                <LutePendulum />
            </div>

            <div className="wall-section right-section">
                <BalanceSpring />
            </div>
        </div>
    );
}