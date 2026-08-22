import React from "react";
import '../styles/Chandelier.css'

export default function Chandelier() {
    const candleCount = 6;

    return (
        <div className="chandelier-container">

            <div className="chandelier-chain chain-left"></div>
            <div className="chandelier-chain chain-right"></div>

            <div className="chandelier-ring">
                {[...Array(candleCount)].map((_, index) => {
                    
                    const angleDeg = (360 / candleCount) * index;

                    return (
                        <div
                            key={index}
                            className="chandelier-candle-wrapper"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-25px',
                                marginLeft: '-7px',
                                transform: `rotate(${angleDeg}deg) translate(110px) rotate(-${angleDeg}deg) rotateX(-75deg)`,
                                transformOrigin: 'center bottom',
                            }}
                        >
                            <div className="mini-flame"></div>
                            <div className="mini-wick"></div>
                            <div className="mini-wax"></div>
                        </div>
                    );
                    
                })}
            </div>
        </div>
    );
}