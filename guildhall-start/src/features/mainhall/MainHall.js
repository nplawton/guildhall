import React, {useState} from "react";
import './styles/MainHall.css'
import CathedralCeiling from "./components/CathedralCeiling";
import HearthFireplace from "./components/HearthFireplace";
import RoundTable from "./components/RoundTable";


export default function MainHall({ currentRoom, onSelectRoom }) {
    return (
        <div className="main-hall-viewport">

            <div className="timber-wall-background">
                <div className="vertical-beam beam-left"></div>
                <div className="vertical-beam beam-right"></div>

                <div className="horizontal-cross-beam beam-top">
                    <div className="iron-tie-plate plate-left">
                        <span className="hex-bolt bolt-top-left"></span>
                        <span className="hex-bolt bolt-top-right"></span>
                        <span className="hex-bolt bolt-bottom-left"></span>
                        <span className="hex-bolt bolt-bottom-right"></span>
                    </div>
                    <div className="iron-tie-plate plate-right">
                        <span className="hex-bolt bolt-top-left"></span>
                        <span className="hex-bolt bolt-top-right"></span>
                        <span className="hex-bolt bolt-bottom-left"></span>
                        <span className="hex-bolt bolt-bottom-right"></span>
                    </div>
                </div>
                

                <div className="horizontal-cross-beam beam-mid">
                    <div className="iron-tie-plate plate-left">
                        <span className="hex-bolt bolt-top-left"></span>
                        <span className="hex-bolt bolt-top-right"></span>
                        <span className="hex-bolt bolt-bottom-left"></span>
                        <span className="hex-bolt bolt-bottom-right"></span>
                    </div>
                    <div className="iron-tie-plate plate-right">
                        <span className="hex-bolt bolt-top-left"></span>
                        <span className="hex-bolt bolt-top-right"></span>
                        <span className="hex-bolt bolt-bottom-left"></span>
                        <span className="hex-bolt bolt-bottom-right"></span>
                    </div>
                </div>

                <div className="horizontal-cross-beam beam-bottom">
                    <div className="iron-tie-plate plate-left">
                        <span className="hex-bolt bolt-top-left"></span>
                        <span className="hex-bolt bolt-top-right"></span>
                        <span className="hex-bolt bolt-bottom-left"></span>
                        <span className="hex-bolt bolt-bottom-right"></span>
                    </div>
                    <div className="iron-tie-plate plate-right">
                        <span className="hex-bolt bolt-top-left"></span>
                        <span className="hex-bolt bolt-top-right"></span>
                        <span className="hex-bolt bolt-bottom-left"></span>
                        <span className="hex-bolt bolt-bottom-right"></span>
                    </div>
                </div>

            </div>

            <div className="hearth-positioner">
                <HearthFireplace />
            </div>

            <div className="cobblestone-floor"></div>

            <CathedralCeiling />

            <RoundTable onSelectRoom={onSelectRoom} />

        </div>
    );
}