import React, {useState, useEffect, useRef} from "react";
import EngineCanisterButton from "./EngineCanisterButton";
import LeverBracket from "./LeverBracket";

export default function CarouselWheel({
    monsters = [],
    activeMonsterId,
    onSelectMonster,
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLeverPulled, setIsLeverPulled] = useState(false);
    const [activeVent, setActiveVent] = useState(null);
    const [isOverpressured, setIsOverpressured] = useState(false);
    const [cogRotation, setCogRotation] = useState(0);

    const ventTimerRef = useRef(null);

    useEffect(() => {
        if(!monsters.length) return;

        const targetId = typeof activeMonsterId === 'object' && activeMonsterId !== null 
            ? (activeMonsterId.id || activeMonsterId._id || activeMonsterId.index)
            : activeMonsterId
        ;

        const foundIdx = monsters.findIndex(m => 
            m.id === targetId ||
            m._id === targetId ||
            m.index === targetId ||
            m === targetId
        );

        if(foundIdx !== -1) {
            setCurrentIndex(prevIdx => (prevIdx !== foundIdx ? foundIdx : prevIdx));
        }        

    }, [activeMonsterId, monsters]);

    if (!monsters || monsters.length === 0) {
        return (
            <div className="no-monsters-plate">
                <span className="fixture-text">NO CREATURE CARD LOADED</span>
            </div>
        );
    };

    const activeMonster = monsters[currentIndex] || monsters[0] || {};

    const currentMonsterData = {
        name: activeMonster.name || activeMonster.monster_name || activeMonster.title || "NO MONSTER DETECTED",
        alignment: activeMonster.alignment || activeMonster.align || "UNALIGNED",
        type: activeMonster.type || activeMonster.monster_type || "UNKNOWN",
        img_url: activeMonster.img_url || activeMonster.image || activeMonster.img || "/placeholder-monster.jpg"
    };

    // Helper to notify parent with ID (or object depending on parent expectation)
    const notifyParentSelect = (monster) => {
        if (typeof onSelectMonster === 'function') {
            const targetId = monster.id || monster._id || monster.index || monster;
            onSelectMonster(targetId);
        }
    };

    console.log("Carousel activeMonster prop:", activeMonsterId);
    console.log("Carousel monsters array:", monsters);

    const handlePrev = () => {
        const nextIdx = (currentIndex - 1 + monsters.length) % monsters.length;
        setCurrentIndex(nextIdx);
        notifyParentSelect(monsters[nextIdx]);

        setActiveVent('left');
        setTimeout(() => setActiveVent(null), 500);
        if(isLeverPulled) return;
        setCogRotation(prev => prev - 45)
    };

    const handleNext = () => {
        const nextIdx = (currentIndex + 1) % monsters.length;
        setCurrentIndex(nextIdx);
        notifyParentSelect(monsters[nextIdx])
        setActiveVent('right');
        setTimeout(() => setActiveVent(null), 500);
        if(isLeverPulled) return;
        setCogRotation(prev => prev + 45)

    };

    const handleSelect = (idx) => {
        setCurrentIndex(idx);
        notifyParentSelect(monsters[idx])
    };

    const handlePullLever = () => {
        if (isLeverPulled || !monsters.length) return;
        if (ventTimerRef.current) clearTimeout(ventTimerRef.current);
        
        setIsLeverPulled(true);
        setActiveVent('both');
        setIsOverpressured(true);

        setCogRotation(prev => prev +720)

        let spins = 0;
        
        const interval = setInterval(() => {
            const randomIdx = Math.floor(Math.random() * monsters.length);
            setCurrentIndex(randomIdx);
            spins++;

            if (spins > 12) {
                clearInterval(interval);
                const finalIdx = Math.floor(Math.random() * monsters.length);
                setCurrentIndex(finalIdx);
                notifyParentSelect(monsters[finalIdx]);

                setIsLeverPulled(false);
                ventTimerRef.current = setTimeout(() => {
                    setActiveVent(null);
                    setIsOverpressured(false);
                }, 1200);
            }
        }, 70);
    };

    return (
        <div className="carousel-workshop-container">

            <EngineCanisterButton 
                direction="left"
                onClick={handlePrev}
                isVenting={activeVent === 'left' || activeVent === 'both'}
                isOverpressured={isOverpressured}
            />

            {/* Gear Base & Crystal Orb Energy Stage */}
            <div className="carousel-stage-base">
                {/* Dark Recessed Mechanical Engine Pit */}
                <div className="engine-pit-housing"></div>

                {/* 3D titlted Rotating Cog Base */}
                <div 
                    className="gear-3d-assembly"
                    style={{
                        transform: `translateY(40px) rotateX(68deg) rotate(${cogRotation}deg)`,
                        transition: isLeverPulled 
                            ? 'transform 2s cubic-bezier(0.25, 1, 0.5, 1)'
                            : 'transform 0.4s ease-out'
                    }}
                
                >
                    <svg className="steampunk-cog-svg" viewBox="0 0 200 200">
                        <defs>
                            <linearGradient id="brassMetallic" x1="0%" y1="0%" x2="200" y2="200">
                                <stop offset="0%" stopColor="#f3e08c" />
                                <stop offset="35%" stopColor="#b8860b" />
                                <stop offset="70%" stopColor="#7a5217" />
                                <stop offset="100%" stopColor="#2b1a08" />
                            </linearGradient>
                            <radialGradient id="spokeHoleGrad" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#080402" />
                                <stop offset="100%" stopColor="#1a0d05" />
                            </radialGradient>
                        </defs>

                        {/* Outer Toothed Gear Cog Wheel */}
                        <path 
                            fill="url(#brassMetallic)"
                            stroke="#1a0c03"
                            strokeWidth="1.5"
                            d="M 92,10 L 108,10 L 110,22 A 78,78 0 0,1 125,28 L 135,20 L 147,28 L 141,40 A 78,78 0 0,1 153,50 L 165,45 L 172,58 L 161,68 A 78,78 0 0,1 168,81 L 180,83 L 182,98 L 169,103 A 78,78 0 0,1 168,118 L 180,123 L 173,137 L 161,131 A 78,78 0 0,1 153,144 L 162,156 L 150,165 L 138,156 A 78,78 0 0,1 125,164 L 128,178 L 112,182 L 107,169 A 78,78 0 0,1 92,169 L 87,182 L 71,178 L 74,164 A 78,78 0 0,1 61,156 L 49,165 L 37,156 L 46,144 A 78,78 0 0,1 39,131 L 27,137 L 20,123 L 32,118 A 78,78 0 0,1 31,103 L 18,98 L 20,83 L 32,81 A 78,78 0 0,1 39,68 L 28,58 L 35,45 L 47,50 A 78,78 0 0,1 59,40 L 53,28 L 65,20 L 75,28 A 78,78 0 0,1 90,22 Z"
                        />

                        {/* Inner Spoke Ring Cutouts */}
                        <circle cx="100" cy="100" r="62" fill="url(#spokeHoleGrad)" stroke="#b8860b" strokeWidth="2" />
                        <circle cx="100" cy="100" r="32" fill="url(#brassMetallic)" stroke="#1a0c03" strokeWidth="1.5" />
                        
                        {/* Mechanical Spoke Lines */}
                        <line x1="100" y1="38" x2="100" y2="68" stroke="#3a2208" strokeWidth="4" />
                        <line x1="100" y1="132" x2="100" y2="162" stroke="#3a2208" strokeWidth="4" />
                        <line x1="38" y1="100" x2="68" y2="100" stroke="#3a2208" strokeWidth="4" />
                        <line x1="132" y1="100" x2="162" y2="100" stroke="#3a2208" strokeWidth="4" />
                        <line x1="56" y1="56" x2="77" y2="77" stroke="#3a2208" strokeWidth="4" />
                        <line x1="123" y1="123" x2="144" y2="144" stroke="#3a2208" strokeWidth="4" />
                        <line x1="144" y1="56" x2="123" y2="77" stroke="#3a2208" strokeWidth="4" />
                        <line x1="77" y1="123" x2="56" y2="144" stroke="#3a2208" strokeWidth="4" />                        
                    </svg>
                </div>

                {/* Lever Bracket */}
                <LeverBracket 
                    onPull={handlePullLever}
                    isPulled={isLeverPulled}
                    isOverpressured={isOverpressured}
                />

                {/* Floating Crystal Blue Energy Orb Core */}
                <div className="crystal-orb-assembly">
                    <div className="blue-mist-flare"></div>
                    <div className="crystal-orb-core"></div>
                    <div className="energy-ring-pulse"></div>
                </div>

                {/* 3D Orbiting Leather Tomes Ring */}
                <div className="book-orbit-ring">
                    {monsters.map((monster, index) => {
                        const total = monsters.length;
                        //Determine relative position active index (0 to total-1)
                        const rawOffset = (index - currentIndex + total) % total;

                        if (rawOffset === 0) return null;

                        return ( 
                            <div
                                key={monster.id || index}
                                className={`orbit-tome-node slot-pos-${rawOffset}`}
                                onClick={() => handleSelect(index)}
                                title={`Select ${monster.name}`}
                            >
                                <div className="tome-3d-wrapper">
                                    <div className="leather-tome-spine">
                                        <div className="ribbed-spine-band"></div>
                                        <div className="spine-text-container">
                                            <span className="spine-monster-name">{monster.name}</span>
                                            <span className="spine-monster-align">{monster.alignment || 'Neutral'}</span>
                                        </div>
                                        <div className="ribbed-spine-band"></div>
                                    </div>

                                    {/* Leather Cover Binding */}
                                    <div className="tome-back-cover">
                                        <div className="cover-emboss-pattern"></div>
                                    </div>

                                    {/* Page Block Side (Visible on back) */}
                                    <div className="tome-pages-block"></div>

                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

            {/* Center Active Tome Display */}
            <div className="open-tome-stage">
                <div className="open-tome-container">

                    <div className="hinge-spine-column">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="brass-hinge-joint">
                                <div className="hinge-pin"></div>
                                <div className="hinge-plate left-plate"></div>
                                <div className="hinge-plate right-plate"></div>
                            </div>
                        ))}
                    </div>

                    <div className="open-cover-frame">
                        <div className="brass-corner-hardware top-left"></div>
                        <div className="brass-corner-hardware top-right"></div>
                        <div className="brass-corner-hardware bottom-left"></div>
                        <div className="brass-corner-hardware bottom-right"></div>

                        <div className="side-runner left-runner"></div>
                        <div className="side-runner right-runner"></div>
                    </div>

                    <div className="parchment-page left-page">
                        <div className="page-joint-indent"></div>

                        <div className="monster-info-block">
                            <h2 className="monster-name-mist">{currentMonsterData.name || 'NO MONSTER DETECTED'}</h2>
                            <div className="stat-line">
                                <span className="stat-label">ALIGNMENT:</span>
                                <span className="arcane-text">{currentMonsterData.alignment || 'UNALIGNED'}</span>
                            </div>
                            <div className="stat-line">
                                <span className="stat-label">TYPE:</span>
                                <span className="arcane-text">{currentMonsterData.type || 'UNKNOWN'} </span>
                            </div>
                        </div>
                    </div>

                    <div className="parchment-page right-page">
                        <div className="page-joint-indent"></div>

                        <div className="monster-illustration-frame">
                            <img 
                                src={currentMonsterData.img_url}
                                alt={currentMonsterData.name}
                                className="monster-portrait"
                            />
                        </div>
                    </div>

                </div>
            </div>

            <EngineCanisterButton 
                direction="right"
                onClick={handleNext}
                isVenting={activeVent === 'right' || activeVent === 'both'}
                isOverpressured={isOverpressured}
            />

        </div>
    );
}