import React from "react";
import '../styles/HearthFireplace.css';
import bearImage from '../../../assets/images/mainhall/Bear_Silhouette.png'

export default function HearthFireplace() {
    
    return (
        <div className="hearth-assembly">

            <div className="chimney-stack">

                <div className="banner-rod">
                    <span className="rod-cap cap-left"></span>
                    <span className="rod-cap cap-right"></span>
                </div>

                <div className="coat-of-arms-banner">
                    <div className="banner-emblem">
                       <img 
                            src={bearImage}
                            alt="Heraldic Bear" 
                            className="bear-image" 
                        />
                    </div>
                </div>
            </div>

            <div className="hearth-mantle"></div>

            <div className="fireplace-body">

                <div className="firebox-arch-casing"></div>

                <div className="stone-lintel-assembly">
                    <div className="lintel-top-beam">
                        <div className="stone-block"></div>
                        <div className="stone-block"></div>
                        <div className="keystone-stone"></div>
                        <div className="stone-block"></div>
                        <div className="stone-block"></div>
                    </div>
                    <div className="lintel-side-posts">
                        <div className="post-left">
                            <div className="stone-block"></div>
                            <div className="stone-block"></div>
                            <div className="stone-block"></div>
                        </div>
                        <div className="post-right">
                            <div className="stone-block"></div>
                            <div className="stone-block"></div>
                            <div className="stone-block"></div>
                        </div>
                    </div>
                </div>

                <div className="firebox-chamber">
                
                    <div className="hearth-fire-wrapper">
                        <div className="fire-aura"></div>

                        <div className="hearth-flame flame-outer"></div>
                        <div className="hearth-flame flame-mid"></div>
                        <div className="hearth-flame flame-core"></div>

                        <span className="ember ember-1"></span>
                        <span className="ember ember-2"></span>
                        <span className="ember ember-3"></span>
                    </div>
                    
                    <div className="hearth-grate-asembly">
                        <div className="grate-bar bar-left"></div>
                        <div className="grate-bar bar-right"></div>
                        <div className="grate-bottom-rack"></div>

                        <div className="log-stack">
                            <div className="log log-back">
                                <div className="log-end left-end"></div>
                                <div className="log-end right-end"></div>
                            </div>
                            <div className="log log-front-left">
                                <div className="log-end"></div>
                            </div>
                            <div className="log log-front-right">
                                <div className="log-end"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="hearth-base-step"></div>

        </div>
    );
}