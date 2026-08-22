import React from "react";


export default function ControlPanel({
    monster,
    searchQuery,
    setSearchQuery,
    selectedTypes,
    setSelectedTypes,
    activeTab,
    setActiveTab,
    onSavetoDm,
    onBuildCustom
}) {
    
    //The 17 Monster types for the checkbox filter
    const monsterTypes = [
        'Aberration', 'Beast', 'Celestial', 'Construct',
        'Dragon', 'Elemental', 'Fey', 'Fiend',
        'Giant', 'Humanoid', 'Monstrosity', 'Ooze',
        'Plant', 'Undead', 'Vermin',
        'Monstrous Humanoid', 'Goblinoid'
    ];
    
    /*
    const [showTypeFilters, setShowTypeFilters] = useState(false);

    //Clear all filter handler
    const handleClearFilters = () => {
        setSelectedTypes([]);
        setSearchQuery('');
    };
    */

    //Toggle individual type checkbox
    const handleTypeToggle = (type) => {
        if (selectedTypes.includes(type)) {
            setSelectedTypes(selectedTypes.filter((t) => t !== type));
        }else{
            setSelectedTypes([...selectedTypes, type]);
        }
    };

    return (
        <div className="control-panel-container steampunk-frame">
            <h3 className="matrix-title">ARCHMAGE CONTROL MATRIX</h3>
            
            {/* Steampunk Brass Header */}
            <div className="panel-header-plate">
                <span className="panel-rivet top-left"></span>
                <span className="panel-rivet top-right"></span>
            </div>

            {/* 1. Serarch & Type filter Section */}
            <div className="matrix-section">
                {/* 1a. Name Search Input */}
                <label className="matrix-label">SEARCH BESTIARY</label>
                <input 
                    type="text"
                    className="steampunk-input"
                    placeholder="Type Creature Name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>   

            {/* 1b. Monster filter drawer */}
            <details className="type-drawer">
                <summary className="drawer-handle">
                    <span className="drawer-title">CLASSIFICATION FILTERS</span>
                    <span className="drawer-icon">⚙️</span>
                </summary>

                <div className="drawer-content felt-tray">
                    {monsterTypes.map((type) => (
                        <label key={type} className="type-checkbox-label">
                            <input 
                                type="checkbox"
                                checked={selectedTypes.includes(type)}
                                onChange={() => handleTypeToggle(type)}
                                className="brass-checkbox"
                            />
                            <span className="brass-knob-radio"></span>
                            <span className="type-text">{type}</span>
                        </label>
                    ))}
                </div>

            </details>

            {/* 2. Action Fixtures: Scroll & Forge Tools */}
            <div className="action-fixtures-group">
                {/* Save Field Report Fixture */}
                <div className="action-fixture">

                    <button 
                        type="button" 
                        className="brass-knob-btn"
                        onClick={onSavetoDm}
                    >
                        📜
                    </button>

                    <div className="mini-riveted-plaque">
                        <span className="rivet top-left">🔩</span>
                        <span className="rivet top-right">🔩</span>
                        <span className="rivet bottom-left">🔩</span>
                        <span className="rivet bottom-right">🔩</span>

                        <span className="fixture-text">SAVE TO DM FIELD REPORT</span>
                    </div>
                </div>

                {/* Infuse Creature Fixture */}
                <div className="action-fixture">

                    <button 
                        type="button" 
                        className="brass-knob-btn"
                        onClick={onBuildCustom}                        
                    >
                        🛠️
                    </button>

                    <div className="mini-riveted-plaque">
                        <span className="rivet top-left">🔩</span>
                        <span className="rivet top-right">🔩</span>
                        <span className="rivet bottom-left">🔩</span>
                        <span className="rivet bottom-right">🔩</span>

                        <span className="fixture-text">INFUSE CREATURES WITH NEW ABILITIES</span>
                    </div>

                </div>
                                
            </div>

            {/* 3. Three info brackets (auto-populate with Active Monster Data) */}
            <div className="panel-section info-brackets-container">

                {/* Bracket 1: Monster Description */}
                <div className="info-bracket">
                    <div className="bracket-header">
                        <span className="bracket-title">CREATURE ANALYSIS:</span>
                        <div className="bracket-divider"></div>
                    </div>
                    <div className="bracket-content">
                        <p>{monster?.descrip || monster?.description || 'No feild analysis recorded for this entity.'}</p>
                    </div>
                </div>

                {/* Bracket 2: Monster Info */}
                <div className="info-bracket">
                    <div className="bracket-header">
                        <span className="bracket-title">CREATURE LORE:</span>
                        <div className="bracket-divider"></div>
                    </div>
                    <div className="bracket-content">
                        <p>{monster?.info || 'No further details.'}</p>
                    </div>
                </div>

                {/* Bracket 3: Alignment Description */}
                <div className="info-bracket">
                    <div className="bracket-header">
                        <span className="bracket-title">ALIGNMENT ETHOS: {monster?.alignment || 'N/A'} </span>
                        <div className="bracket-divider"></div>
                    </div>
                    <div className="bracket-content">
                        <p>{monster?.a_descrip || monster?.alignment_description || 'No moral alignment telemetry available.'}</p>
                    </div>
                </div>

                {/* Bracket 4: Type Description */}
                <div className="info-bracket">
                    <div className="bracket-header">
                        <span className="bracket-title">TYPE LORE: {monster?.type || 'N/A'} </span>
                        <div className="bracket-divider"></div>
                    </div>
                    <div className="bracket-content">
                        <p>{monster?.t_descrip || monster?.type_description || 'No type classification data loaded.'}</p>
                    </div>
                </div>

            </div>
            
            {/* Footer Rivets */}
            <div className="panel-footer-plate">
                <span className="panel-rivet bottom-left"></span>
                <span className="panel-rivet bottom-right"></span>
            </div>

        </div>
    );
}