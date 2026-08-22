import React from "react";
import Chandelier from "./Chandeliar";
import '../styles/CathedralCeiling.css'

export default function CathedralCeiling() {
    return (
        <div className="cathedral-ceiling-container">

            <div className="ridge-beam"></div>

            <div className="beam-structure">

                <div className="beam rafter-left"></div>
                <div className="beam rafter-right"></div>

                <div className="iron-knee-plate knee-left">
                    <span className="iron-bolt bolt-tl"></span>
                    <span className="iron-bolt bolt-tr"></span>
                </div>

                <div className="iron-knee-plate knee-right">
                    <span className="iron-bolt bolt-tl"></span>
                    <span className="iron-bolt bolt-tr"></span>
                </div>

                <div className="iron-apex-plate apex-left">
                    <span className="iron-bolt bolt-tl"></span>
                    <span className="iron-bolt bolt-tr"></span>
                </div>

                <div className="iron-apex-plate apex-right">
                    <span className="iron-bolt bolt-tl"></span>
                    <span className="iron-bolt bolt-tr"></span>
                </div>

                <div className="collar-beam"></div>

                <div className="iron-tie-plate collar-joint-left">
                    <span className="iron-bolt bolt-tl"></span>
                    <span className="iron-bolt bolt-tr"></span>
                    <span className="iron-bolt bolt-bl"></span>
                    <span className="iron-bolt bolt-br"></span>
                </div>

                <div className="iron-tie-plate collar-joint-right">
                    <span className="iron-bolt bolt-tl"></span>
                    <span className="iron-bolt bolt-tr"></span>
                    <span className="iron-bolt bolt-bl"></span>
                    <span className="iron-bolt bolt-br"></span>
                </div>
                
                <div className="iron-mount">
                    <span className="iron-bolt bolt-tl"></span>
                    <span className="iron-bolt bolt-tr"></span>
                    <span className="iron-bolt bolt-bl"></span>
                    <span className="iron-bolt bolt-br"></span>
                </div>

            </div>

            <div className="chandelier-anchor">
                <Chandelier />
            </div>

        </div>
    );
}