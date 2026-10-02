import React, { useState, useEffect } from "react";
import './styles/KnowledgeFoundry.css';
import MainMonsterCard from './components/MainMonsterCard';
import ControlPanel from './components/ControlPanel';
import FloatingDetailWindow from './components/FloatingDetailWindow';
import CarouselWheel from './components/CarouselWheel';

export default function KnowledgeFoundry() {
    const [monsters, setMonsters] = useState([]);
    const [activeMonsterId, setActiveMonsterId] = useState(1);
    const [activeTab, setActiveTab] = useState('lore');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSpinning, setIsSpinning] = useState(false);
    const [savedDmMonsters, setSavedDmMonsters] = useState([]);
    const [isCustomizing, setIsCustomizing] = useState(false);
    const [loading, setLoading] = useState(true);
    const [selectedTypes, setSelectedTypes] = useState([]);

    //1. Fetch full relational monster dataset mount
    useEffect(() => {
        fetch('http://localhost:5000/api/monsters/full')
        .then((res) => res.json())
        .then((data) => {
            setMonsters(data);
            setLoading(false);
        })
        .catch((err) => console.error("Error loading monsters:", err));
    }, []);

    //2. Active monster derived from state
    const activeMonster = monsters.find((m) => m.id === activeMonsterId) || monsters[0];

    //3 Save to DM Workshop (persists in localStorage)
    const handleSaveToDm = (monsters) => {
        const updated = [...savedDmMonsters, monsters];
        setSavedDmMonsters(updated);
        localStorage.setItem('guildhall_dm_monsters', JSON.stringify(updated));
    };

    //4. Filter monsters array by Both search query & selected types
    const filteredMonsters = monsters.filter((monster) => {
        const matchesSearch = monster.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(monster.type);
        return matchesSearch && matchesType;
    });

    //5. Wheel Spinner Trigger
    const handleSpinWheel = () => {
        if(isSpinning || monsters.length === 0) return;
        setIsSpinning(true);

        //Rapid selection animation simulation before landing
        let speed = 50;
        let counter = 0;
        const totalTicks = 20 + Math.floor(Math.random() * 10);
        
        const spinInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * monsters.length);
            setActiveMonsterId(monsters[randomIndex].id);
            counter++;

            if (counter >= totalTicks){
                clearInterval(spinInterval);
                setIsSpinning(false);
            }
        }, speed)
    };
    
    if (loading) return <div className="library-loading">Entering the Archmage's Knowledge Foundry...</div>

    return(
        <div className="library-room-container">
            <header className="library-header">
                <h1 className="display-3 text-warning font-archmage">The Knowledge Foundry</h1>
                <p className="lead text-gold-muted fst-italic">
                    - The Archmage's Bestiary & Creature Repository -
                </p>
            </header>

            <div className="library-stage">
                {/*CENTER STAGE: the main card*/}
                <MainMonsterCard monster={activeMonster} />

                {/* RIGHT SIDE: Controls & Descriptions */}
                <div className="right-panel-group">
                    <ControlPanel
                        monster={activeMonster}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        selectedTypes={selectedTypes}
                        setSelectedTypes={setSelectedTypes}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        onSavetoDm={ () => handleSaveToDm(activeMonster) }
                        onBuildCustom={ () => setIsCustomizing(true) }
                    />

                    {isCustomizing && (
                        <FloatingDetailWindow
                            monster={activeMonster}
                            onClose={ () => setIsCustomizing(false) }
                            onSaveCustom={handleSaveToDm}
                        />
                    )}
                </div>
            </div>

            {/* BOTTOM: Carousel & Wheel Spinner */}
            <CarouselWheel 
                monsters={filteredMonsters}
                activeMonsterId = {activeMonsterId}
                onSelectMonster={setActiveMonsterId}
                onSpin = {handleSpinWheel}
                isSpinning = {isSpinning}
            />
        </div>
    );

}