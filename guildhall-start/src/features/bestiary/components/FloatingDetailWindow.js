import React, {useState} from "react";

export default function FloatingDetailWindow({ monster, onClose, onSaveCustom }) {
    //Initalize state with current active monster's base stats
    const [customForm, setCustomForm] = useState({
        name: `${monster?.name || 'Creature'} (Variant)`,
        type: monster?.type || 'Humanoid',
        alignment: monster?.alignment || 'Neutral',
        armor_class: monster?.armor_class || monster?.ac || 23,
        hit_points: monster?.hit_points || monster?.hp || 22,
        speed: monster?.speed || '30 ft.',
        str: monster?.str || 10,
        dex: monster?.dex || 10,
        con: monster?.con || 10,
        int: monster?.int || 10,
        wis: monster?.wis || 10,
        cha: monster?.cha || 10,
        challenge_rating: monster?.challenge_rating || '1/4',
        experience_points: monster?.experience_points || 50,
        atk1_name: monster?.atk1_name || 'Basic Attack',
        atk1_descrip: monster?.atk1_descrip || 'Melee Weapon Attack: +3 to hit, reach 5ft., 1d6+1 damage.',
        custom_notes: 'Custom variant notes for DM Field Report...'
    });

    const [d20Value, setD20Value] = useState(20);
    const [isRolling, setIsRolling] = useState(false);

    const handleRollD20 = () => {
        if (isRolling) return;
        setIsRolling(true);

        let count = 0;

        const interval = setInterval(() => {
            const tempRoll = Math.floor(Math.random() * 20) + 1;
            setD20Value(tempRoll);
            count++;

            if (count > 12) {
                clearInterval(interval);
                const finalRoll = Math.floor(Math.random() * 20) + 1;
                setD20Value(finalRoll);
                setIsRolling(false);
            }
        }, 50);
    };

    const handleChange = (e) => {
        const{ name, value } = e.target;
        setCustomForm((prev) => ({ ...prev, [name]: value }));
    };

    //Calculate d20 ability modifier string dynamically
    const getModifier = (score) => {
      const mod = Math.floor((Number(score) - 10) / 2);
      return mod >= 0 ? `+${mod}` : `${mod}`;  
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCustomMonster = {
            ...monster,
            ...customForm,
            id: `custom_${Date.now()}` //Unique ID for custom variants
        };

        if (onSaveCustom){
            onSaveCustom(newCustomMonster);
        } else {
            //Default: Save directly to localStorage feild report
            const existing = JSON.parse(localStorage.getItem('guildhall_dm_monsters') || '[]');
            localStorage.setItem('guildhall_dm_monsters', JSON.stringify([...existing, newCustomMonster]));
        }

        alert(`"${customForm.name}" has been logged in your DM Field Report!`);
    };

    const isFieldModified = (fieldName) => {
        const originalValue = monster?.[fieldName] ?? '';
        return String(customForm[fieldName]) !== String(originalValue);
    };

    return(
        <div className="floating-window-overlay">
            <div className="floating-window-container steampunk-frame">

                {/* Header */}
                <div className="window-header">
                    <h2>🛠️ CREATURE FORGE & FIELD WORKSHOP</h2>

                    <button 
                        type="button"
                        className="ruby-lens-btn"
                        onClick={onClose}
                        aria-label="Close Window"
                    >
                        <span className="ruby-gem"></span>
                    </button>

                </div>

                <div className="header-title-assembly">
                    <div className="mini-riveted-plaque static-label-plaque">
                        <span className="rivet top-left">🔩</span>
                        <span className="rivet top-right">🔩</span>
                        <span className="rivet bottom-left">🔩</span>
                        <span className="rivet bottom-right">🔩</span>

                        <span className="fixture-text">INSPECTING & INFUSING BASE MATRIX OF:</span>
                    </div>
                    
                    {/* Ornate Victorian Bezel Display for the Creature Name */}
                    <div className="ornate-nixie-badge">
                        <span className="rivet top-left">🔩</span>
                        <span className="rivet top-right">🔩</span>
                        <span className="rivet bottom-left">🔩</span>
                        <span className="rivet bottom-right">🔩</span>
                        <div className="glass-reflection"></div>

                        <span className="nixie-creature-name nixie-flicker">
                            {monster?.name || "No Creature"}
                        </span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="custom-creature-form">

                    <div className="forge-section">
                        {/* Identity Group */}
                        <h4 className="section-header-title">CREATURE IDENTITY</h4>
                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>Variant Creature Name</label>
                                <input 
                                    type="text"
                                    name="name"
                                    value={customForm.name}
                                    onChange={handleChange}
                                    required
                                    className={`steampunk-input ${isFieldModified('name') ? 'modified' : ''}`}
                                />
                            </div>

                            <div className="form-group">
                                <label>Classification Type</label>
                                <input 
                                    type="text"
                                    name="type"
                                    value={customForm.type}
                                    onChange={handleChange}
                                    className={`steampunk-input ${isFieldModified('type') ? 'modified' : ''}`}
                                />
                            </div>

                            <div className="form-group">
                                <label>Ethos Alignment</label>
                                <input 
                                    type="text"
                                    name="alignment"
                                    value={customForm.alignment}
                                    onChange={handleChange}
                                    className={`steampunk-input ${isFieldModified('alignment') ? 'modified' : ''}`}
                                />
                            </div>
                        </div>
                    </div>    

                    {/* Vitals Group */}
                    <div className="forge-section">
                        <h4 className="section-header-title">VITALS & SPEED</h4>
                        <div className="form-grid quad-cols">

                            <div className="form-group">
                                <label>Armor Class (AC)</label>
                                <input 
                                    type="number"
                                    name="armor_class"
                                    value={customForm.armor_class}
                                    onChange={handleChange}
                                    className={`steampunk-input ${isFieldModified('armor_class') ? 'modified' : ''}`}
                                />
                            </div>

                            <div className="form-group">
                                <label>Hit Points (HP)</label>
                                <input 
                                    type="number"
                                    name="hit_points"
                                    value={customForm.hit_points}
                                    onChange={handleChange}
                                    className={`steampunk-input ${isFieldModified('hit_points') ? 'modified' : ''}`}
                                />
                            </div>

                            <div className="form-group">
                                <label>Movement Speed</label>
                                <input 
                                    type="text"
                                    name="speed"
                                    value={customForm.speed}
                                    onChange={handleChange}
                                    className={`steampunk-input ${isFieldModified('speed') ? 'modified' : ''}`}
                                />
                            </div>

                            <div className="form-group">
                                <label>Challenge Rating (CR)</label>
                                <input 
                                    type="text"
                                    name="challenge_rating"
                                    value={customForm.challenge_rating}
                                    onChange={handleChange}
                                    className={`steampunk-input ${isFieldModified('challenge_rating') ? 'modified' : ''}`}
                                />
                            </div>

                        </div>

                    </div>

                    {/* Section 3: Ability Scores w/ Pneumatic D20 Bubble Gauge */}
                    <div className="forge-section">
                        <div className="section-header-with-gauge">
                            <h4 className="section-header-title">CORE ATTRIBUTES & ENHANCEMENT ROLLS</h4>
                            
                            {/* D20 Roller Fixture */}
                            <div 
                                className="nixie-d20-assembly" 
                                onClick={handleRollD20}
                                title="Engage Gear to Roll d20"
                            >
                                <button
                                    type="button"
                                    className={`gear-trigger-btn ${isRolling ? 'gear-spinning' : ''}`}
                                >
                                    ⚙️
                                </button>

                                <div className="nixie-display-housing">
                                    {/* Digit 1 Tube (tens) */}
                                    <div className="nixie-tube">
                                        <div className="glass-reflection"></div>
                                        <span className={`nixie-digit ${isRolling ? 'nixie-flicker' : ''}`}>
                                            {d20Value < 10 ? '0' : String(d20Value)[0] }
                                        </span>
                                    </div>

                                    {/* Digit 2 Tube (ones) */}
                                    <div className="nixie-tube">
                                        <div className="glass-reflection"></div>
                                        <span className={`nixie-digit ${isRolling ? 'nixie-flicker' : '' }`}>
                                            {d20Value < 10 ? d20Value: String(d20Value)[1] }
                                        </span>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="stats-3col-grid">
                            {[
                                {key: 'str', label: 'STR'},
                                {key: 'dex', label: 'DEX'},
                                {key: 'con', label: 'CON'},
                                {key: 'int', label: 'INT'},
                                {key: 'wis', label: 'WIS'},
                                {key: 'cha', label: 'CHA'},
                            ].map(({ key, label }) => (
                                <div key={key} className={`stat-input-card ${isFieldModified(key) ? 'modified-card' : ''}`}>
                                    <div className="stat-card-header">
                                        <span className="stat-card-title">{label}</span>
                                        <span className="dice-tag" title="Check / Save Roll">
                                            🎲 1d20{getModifier(customForm[key])}
                                        </span>
                                    </div>

                                    <div className="stat-input-wrapper">
                                        <input 
                                            type="number"
                                            name={key}
                                            value={customForm[key]}
                                            onChange={handleChange}
                                            className="stat-number-input"
                                        />
                                    </div>
                                
                                </div>
                                
                            ))}
                        </div>

                    </div>

                    {/* Main Attack Customizer */}
                    <div className="forge-section">
                        <h4 className="section-header-title">INFUSED ATTACKS & DM RESEARCH</h4>
                        <div className="form-grid">
                            <div className="form-group full-width">
                                <label>Primary Attack Name</label>
                                <input 
                                    type="text"
                                    name="atk1_name"
                                    value={customForm.atk1_name}
                                    onChange={handleChange}
                                    className={`steampunk-input ${isFieldModified('atk1-name') ? 'modified' : ''}`}
                                />
                            </div>

                            <div className="form-group full-width">
                                <label>Primary Attack Description</label>
                                <textarea 
                                    name="atk1_descrip"
                                    rows="2"
                                    value={customForm.atk1_descrip}
                                    onChange={handleChange}
                                    className={`steampunk-input ${isFieldModified('atk1_descrip') ? 'modified' : ''}`}
                                />
                            </div>

                            <div className="form-group full-width">
                                <label>Field Research & DM Notes</label>
                                <textarea 
                                    name="custom_notes"
                                    rows="3"
                                    value={customForm.custom_notes}
                                    onChange={handleChange}
                                    className={`steampunk-input ${isFieldModified('custom_notes') ? 'modified' : ''}`}
                                />
                            </div>

                        </div>
                        
                    </div>                  
                    

                    {/* Action Fixtures */}
                    <div className="action-fixtures-group modal-fixtures">
                        {/* Recycle / Purge Fixture */}
                        <div className="action-fixture danger-fixture">
                            <button 
                                type="button" 
                                className="brass-knob-btn skull-btn"
                                onClick={onClose} 
                                title="Recycle/Purge Variant"
                            >
                                ☠️
                            </button>

                            <div className="mini-riveted-plaque glass-plaque">
                                <span className="rivet top-left">🔩</span>
                                <span className="rivet top-right">🔩</span>
                                <span className="rivet bottom-left">🔩</span>
                                <span className="rivet bottom-right">🔩</span>

                                <span className="fixture-text">RECYCLE / PURGE VARIANT</span>
                            </div>
                            
                        </div>
                        
                        {/* Save Variant */}
                        <div className="action-fixture success-fixture" >
                            <button 
                                type="submit" 
                                className="brass-knob-btn scroll-btn"
                                title="Save Variant to Feild Report"
                            >
                                📜
                            </button>
                            <div className="mini-riveted-plaque glass-plaque">
                                <span className="rivet top-left">🔩</span>
                                <span className="rivet top-right">🔩</span>
                                <span className="rivet bottom-left">🔩</span>
                                <span className="rivet bottom-right">🔩</span>

                                <span className="fixture-text">SAVE VARIANT TO FIELD REPORT</span>
                            </div>
                        </div>

                    </div>

                </form>

            </div>
        </div>
    );

}