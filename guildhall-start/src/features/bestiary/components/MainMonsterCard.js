import React from "react";

export default function MainMonsterCard({ monster }) {
    if (!monster) return <div className="card-placeholder">Select a Creature...</div>;

    return(
        <div className="main-monster-card steampunk-frame">
            {/* Top Header: Name */}
            <div className="card-holder">
                <h2 className="monster-name">{monster.name}</h2>
                <p className="monster-meta">
                    {monster.size || 'Medium'} &bull; {monster.type } &bull; {monster.alignment}
                </p>
            </div>

            <hr className="card-divider" />

            <div className="card-scrollable-content">

                <div className="card-body-grid">

                    {/* LEFT COLUMN: Stats, Vitals, & Attributtes */}
                    <div className="card-vitals-column">
                        
                        {/* Row 2: Vitals Block (Armor Class, HP, & Speed) */}
                        <p><strong>Armor Class:</strong> {monster.armor_class} </p>
                        <p><strong>Hit Points:</strong> {monster.hit_points} </p>
                        <p><strong>Speed:</strong> {monster.speed} </p>
                        
                        {/* Row 3: Abilities Block (stat Abbreviations on top, values underneath) */}
                        <div className="ability-score-grid">
                            <div className="ability-badge">
                                <span className="stat-label">STR</span>
                                <span className="stat-value">{monster.str}</span>
                            </div>
                            <div className="ability-badge">
                                <span className="stat-label">DEX</span>
                                <span className="stat-value">{monster.dex}</span>
                            </div>
                            <div className="ability-badge">
                                <span className="stat-label">CON</span>
                                <span className="stat-value">{monster.con}</span>
                            </div>
                            <div className="ability-badge">
                                <span className="stat-label">INT</span>
                                <span className="stat-value">{monster.int}</span>
                            </div>
                            <div className="ability-badge">
                                <span className="stat-label">WIS</span>
                                <span className="stat-value">{monster.wis}</span>
                            </div>
                            <div className="ability-badge">
                                <span className="stat-label">CHA</span>
                                <span className="stat-value">{monster.cha}</span>
                            </div>

                        </div>

                        <p><strong>Challenge Rating:</strong> {monster.challenge_rating} | <strong>XP:</strong> {monster.experience_points} </p>

                    </div>

                    {/* RIGHT COLUMN: Monster Image */}
                    <div className="monster-portrait-frame">
                        <img
                            src={monster.img_url || 'https://via.placeholder.com/250x300?text=No+Creature+Art'}
                            alt={monster.name}
                            className="monster-portrait-img"
                        />
                    </div>
                </div>

                {/* Divider Line */}
                <hr className="card-divider" />

                {/* BOTTOM SECTION: Attacks & Special Actions */}
                <div className="card-attacks-section">
                    <h3>Attacks & Actions</h3> 
                    <ul className="attacks-list">
                        {monster.atk1_name && (
                            <li className="attack-item">
                                <strong>{monster.atk1_name}:</strong> {monster.atk1_descrip}
                            </li>
                        )}
                        {monster.atk2_name && (
                            <li className="attack-item">
                                <strong>{monster.atk2_name}:</strong> {monster.atk2_descrip}
                            </li>
                        )}
                        {monster.atk3_name && (
                            <li className="attack-item">
                                <strong>{monster.atk3_name}:</strong> {monster.atk3_descrip}
                            </li>
                        )}
                        {monster.atk4_name && (
                            <li className="attack-item">
                                <strong>{monster.atk4_name}:</strong> {monster.atk4_descrip}
                            </li>
                        )}
                    </ul>
                </div>

                {(monster.spatk1_name || monster.special_trait) && (
                    <div className="card-trait-section">
                        <h3 className="section-title">Special Traits</h3>
                        <ul className="traits-list">
                            {monster.spatk1_name && (
                                <li className="trait-item">
                                    <strong>{monster.spatk1_name}:</strong> {monster.spatk1_descrip}
                                </li>
                            )}
                            {monster.spatk2_name && (
                                <li className="trait-item">
                                    <strong>{monster.spatk2_name}:</strong> {monster.spatk2_descrip}
                                </li>
                            )}
                            {monster.spatk3_name && (
                                <li className="trait-item">
                                    <strong>{monster.spatk3_name}:</strong> {monster.spatk3_descrip}
                                </li>
                            )}
                            {monster.spatk4_name && (
                                <li className="trait-item">
                                    <strong>{monster.spatk4_name}:</strong> {monster.spatk4_descrip}
                                </li>
                            )}
                        </ul>
                    </div>
                )}
                
            </div>

        </div>
    );
}