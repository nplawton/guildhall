import React, {useState} from "react";
import '../styles/EngineCanister.css';

export default function EngineCanisterButton({
    direction,
    onClick,
    isVenting,
    isOverpressured
}) {
    const [isHovered, setIsHovered] = useState(false);
    const isPrevious = direction === 'left' || direction === 'prev';

    return (

        <div className={`engine-canister-housing canister-${direction} ${isVenting ? 'canister-venting' : ''} ${isOverpressured ? 'canister-overpressured' : ''}`}>

            <div className="upper-copper-cap">
                <div className="stove-pipe-stack">
                    <div className="stove-pipe-dome">
                        <div className="steam-vent-port"></div>
                    </div>
                </div>
            </div>
            <div className="upper-bezel-ring"></div>
            <div className="upper-rivet-band">
                <span className="rivet"></span>
                <span className="rivet"></span>
                <span className="rivet"></span>
                <span className="rivet"></span>
                <span className="rivet"></span>
                <span className="rivet"></span>
            </div>

            <div className={`emergency-valve-assembly ${isOverpressured ? 'spinning' : ''}`}></div>

            <div className="cardinal-pipe-assembly">
                <div className="cardinal-pipe nw-pipe"></div>
                <div className="cardinal-pipe ne-pipe"></div>
                <div className="cardinal-pipe sw-pipe"></div>
                <div className="cardinal-pipe se-pipe"></div>
            </div>

            <div className="canister-chassis">

                <div className="canister-body-backdrop"></div>
                
                <div className="canister-top-cap">
                    <div className="brass-rivets-ring">
                        <span className="rivet"></span>
                        <span className="rivet"></span>
                        <span className="rivet"></span>
                        <span className="rivet"></span>
                        <span className="rivet"></span>
                        <span className="rivet"></span>
                    </div>
                </div>

                {/* Inner-Nixie Glass Tube Button */}
                <button
                    type="button"
                    className="nixie-glass-chamber"
                    onClick={onClick}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    aria-label={`Trigger Carousel ${direction}`}
                >

                    <div className="glass-reflection-overlay"></div>
                    <div className="blue-plasma-glow"></div>

                    <div className={`filament-assembly-direction ${isPrevious ? 'flip-arrow' : ''}`}>
                        
                        <div className="arrow-fletching">
                            <span className="feather"></span>
                            <span className="feather"></span>
                            <span className="feather"></span>
                        </div>

                        <div className="arrow-shaft-container">
                            <div className="spliced-cog cog-top-rear"></div>
                            <div className="arrow-shaft"></div>
                            <div className="spliced-cog cog-bottom-front"></div>
                        </div>

                        <div className="arrow-head"></div>

                    </div>

                    <div className="arc-spark spark-top-1"></div>
                    <div className="arc-spark spark-top-2"></div>

                    <div className="arc-spark spark-bottom-1"></div>
                    <div className="arc-spark spark-bottom-2"></div>

                </button>

                <div className="canister-bottom-cap">
                    <div className="brass-rivets-ring">
                        <span className="rivet"></span>
                        <span className="rivet"></span>
                        <span className="rivet"></span>
                        <span className="rivet"></span>
                        <span className="rivet"></span>
                        <span className="rivet"></span>
                    </div>
                </div>

                <div className="temp-gauge-housing">
                    
                    <div className="gauge-face">
                        <div className="gauge-pressure-arc"></div>
                        <div className="gauge-ticks"></div>
                        <div className={`gauge-needle ${isOverpressured ? 'needle-spike' : ''}`}></div>
                        <div className="needle-center-cap"></div>
                        <div className="gauge-foggy-glass"></div>
                    </div>
                    
                </div>

                <div className="scalloped-base-cover">
                    <div className="brass-scrollwork-lip"></div>
                </div>               

            </div>

        </div>
    );
}