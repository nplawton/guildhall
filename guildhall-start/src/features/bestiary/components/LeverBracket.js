import React, {useState} from "react";
import '../styles/LeverBracket.css';

export default function LeverBracket({
    onPull,
    isPulled,
    isOverpressured
}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="lever-bracket-assembly">

            <div className="data-plate-assembly">

                <div className="plate-gear-cap cap-left">
                    <div className="gear-teeth-ring"></div>
                    <div className="brass-dome-base">
                        <div className="center-medium-rivet"></div>
                    </div>
                </div>

                <div className="brass-plaque-body">
                    <div className="hex-rivet rivet-top-left"></div>
                    <div className="hex-rivet rivet-top-right"></div>
                    <div className="hex-rivet rivet-bottom-left"></div>
                    <div className="hex-rivet rivet-bottom-right"></div>

                    <span className="stamped-brass-text">TURN THE COG</span>
                </div>

                <div className="plate-gear-cap cap-right">
                    <div className="gear-teeth-ring"></div>
                    <div className="brass-dome-base">
                        <div className="center-medium-rivet"></div>
                    </div>
                </div>

            </div>

            {/* Section 20 Metallic-Marble Main Center Plate */}
            <div className="bracket-main-plate">

                <div className="compass-bezel-ring">
                    <div className="compass-rivet pos-0"></div>
                    <div className="compass-rivet pos-1"></div>
                    <div className="compass-rivet pos-2"></div>
                    <div className="compass-rivet pos-3"></div>
                    <div className="compass-rivet pos-4"></div>
                    <div className="compass-rivet pos-5"></div>
                    <div className="compass-rivet pos-6"></div>
                    <div className="compass-rivet pos-7"></div>

                    <div className="bezel-inner-recess">
                        
                        <div className={`recessed-gear-slot ${isOverpressured ? 'venting-pink-mist' : ''}`}>

                           <div className="pink-mist-vent"></div>

                           <div className="recessed-spoked-gear">
                                <div className="gear-spoke-hole hole-top-left"></div>
                                <div className="gear-spoke-hole hole-top-right"></div>
                                <div className="gear-spoke-hole hole-bottom-left"></div>
                                <div className="gear-spoke-hole hole-bottom-right"></div>
                            </div> 

                            <div className={`lever-arm-assembly ${isPulled ? 'pulled' : ''}`}>
                                
                                <button 
                                    type="button"
                                    className="ruby-fletching-gem"
                                    onClick={onPull}
                                    disabled={isPulled}
                                    title="Trigger Lever Mechanism"
                                    aria-label="Pull Lever"
                                >
                                    <div className="fletching-vane vane-top"></div>
                                    <div className="fletching-vane vane-bottom"></div>
                                </button>
                                
                                <div className="arrow-lever-body"></div>

                                <div className="frustum-center-hub">
                                    <div className="frustum-top-cap"></div>
                                </div>

                                <div className="central-retaining-rivet"></div>

                            </div>

                        </div>
                    </div>
                </div>
                
                <div className="plate-corner-rivets">
                    <div className="corner-strip-rivet top-left"></div>
                    <div className="corner-strip-rivet top-right"></div>
                    <div className="corner-strip-rivet bottom-left"></div>
                    <div className="corner-strip-rivet bottom-right"></div>
                </div>
            
            </div>  

            <div className={`bottom-data-plate-assembly ${isOverpressured ? 'overpressured' : ''}`}>

                <div className="brass-ear-backing ear-left"></div>
                <div className="brass-ear-backing ear-right"></div>

                <div className="bottom-cap cap-left">
                    <svg viewBox="0 0 100 100" className="cap-svg">
                        <defs>
                           
                            <radialGradient id="hubGradient" cx="35%" cy="35%" r="65%">
                                <stop offset="0%" stopColor="#dca96c" />
                                <stop offset="50%" stopColor="#996f3a" />
                                <stop offset="85%" stopColor="#523616" />
                                <stop offset="100%" stopColor="#2e1c0a" />
                            </radialGradient>
                            <radialGradient id="screwGradient" cx="35%" cy="35%" r="65%">
                                <stop offset="0%" stopColor="#e6b875" />
                                <stop offset="100%" stopColor="#523616" />
                            </radialGradient>
                        </defs>

                        
                        <circle 
                            cx="50" cy="50" r="42" 
                            fill="none" 
                            stroke="#b88a4c" 
                            strokeWidth="8" 
                            strokeDasharray="2 3" 
                        />

                        
                        <circle cx="50" cy="50" r="34" fill="url(#hubGradient)" />

                        
                        <rect x="47.5" y="16" width="5" height="68" fill="#523616" opacity="0.6" />
                        <rect x="16" y="47.5" width="68" height="5" fill="#523616" opacity="0.6" />

                        
                        <circle cx="50" cy="50" r="12" fill="url(#screwGradient)" stroke="#1a0f05" strokeWidth="1" />
                        <line x1="42" y1="50" x2="58" y2="50" stroke="#1a0f05" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                </div>

                <div className="brass-glass-frame">
                    <div className="glass-conduit">
                        <div className="pink-sparks-container">
                            <svg className="spark-svg" viewBox="0 0 200 40">
                                <path className="spark-bolt spark-1" d="M 10 20 Q 40 5, 75 22 T 140 12 T 190 25" />
                                <path className="spark-bolt spark-2" d="M 25 30 Q 80 35, 110 18 T 175 28" />
                            </svg>
                        </div>
                        <span className="ominous-fate-text">See What Fate Brings</span>
                    </div>

                    <div className="frame-screw screw-top-left">
                        <div className="flathead-slot"></div>
                    </div>
                    <div className="frame-screw screw-top-right">
                        <div className="flathead-slot"></div>
                    </div>
                    <div className="frame-screw screw-bottom-left">
                        <div className="flathead-slot"></div>
                    </div>
                    <div className="frame-screw screw-bottom-right">
                        <div className="flathead-slot"></div>
                    </div>

                </div>

                <div className="bottom-cap cap-right">
                    <svg viewBox="0 0 100 100" className="cap-svg">
                        <defs>
                           
                            <radialGradient id="hubGradient" cx="35%" cy="35%" r="65%">
                                <stop offset="0%" stopColor="#dca96c" />
                                <stop offset="50%" stopColor="#996f3a" />
                                <stop offset="85%" stopColor="#523616" />
                                <stop offset="100%" stopColor="#2e1c0a" />
                            </radialGradient>
                            <radialGradient id="screwGradient" cx="35%" cy="35%" r="65%">
                                <stop offset="0%" stopColor="#e6b875" />
                                <stop offset="100%" stopColor="#523616" />
                            </radialGradient>
                        </defs>

                        
                        <circle 
                            cx="50" cy="50" r="42" 
                            fill="none" 
                            stroke="#b88a4c" 
                            strokeWidth="8" 
                            strokeDasharray="2 3" 
                        />

                        
                        <circle cx="50" cy="50" r="34" fill="url(#hubGradient)" />

                        
                        <rect x="47.5" y="16" width="5" height="68" fill="#523616" opacity="0.6" />
                        <rect x="16" y="47.5" width="68" height="5" fill="#523616" opacity="0.6" />

                        
                        <circle cx="50" cy="50" r="12" fill="url(#screwGradient)" stroke="#1a0f05" strokeWidth="1" />
                        <line x1="42" y1="50" x2="58" y2="50" stroke="#1a0f05" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                </div>
            
            </div>         

        </div>
    );

}