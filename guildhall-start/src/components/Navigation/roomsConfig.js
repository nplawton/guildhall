import DMSanctumWeapon from "./weapons/DmSanctumWeapon";
import StarLitGrottoWeapon from "./weapons/StarLitGrottoWeapon";
import WhisperingCasketWeapon from "./weapons/WhisperingCasketWeapon";
import ClockworkCabaretWeapon from "./weapons/ClockworkCabretWeapon";
import KnowledgeFoundryWeapon from "./weapons/KnowledgeFoundryWeapon";

export const ALL_ROOMS = [
    {
        id: 'mainhall', 
        label: 'Main Hall', 
        owner: 'The Party', 
        symbol: '🍻',
        tubeColor: '#ffBf00',
        glowColor: 'rgba(255, 191, 0, 0.8)',
        isTableStation: false
    },
    {
        id: 'sanctum', 
        label: 'DM Sanctum', 
        owner: "The DM", 
        symbol: '📜',
        angle: 0,
        type: 'anchor',
        isTableStation: true,
        tubeColor:'#fef08a',
        glowColor: 'rgba(254, 240, 138, 0.8)',
        weapon: DMSanctumWeapon
    },
    {
        id: 'range', 
        label: 'Star-Lit Grotto', 
        owner: 'The Sorcerer', 
        symbol: '🔮',
        angle: 45,
        type: 'room',
        isTableStation: true,
        tubeColor: '#38bdf8',
        glowColor: 'rgba(56, 189, 248, 0.8)',
        weapon: StarLitGrottoWeapon
    },
    {
        id: 'casket', 
        label: 'Whispering Casket', 
        owner: "The Rogue", 
        symbol: '🎲',
        angle: 135,
        type: 'room',
        isTableStation: true,
        tubeColor: '#d97706',
        glowColor: 'rgba(217, 119, 6, 0.8)',
        weapon: WhisperingCasketWeapon
    },
    {
        id: 'cabaret', 
        label: 'Clockwork Cabaret', 
        owner: 'The Bard', 
        symbol: '🕰️',
        angle: 225,
        type: 'room',
        isTableStation: true,
        tubeColor: '#ef4444',
        glowColor: 'rgba(239, 68, 68, 0.8)',
        weapon: ClockworkCabaretWeapon 
    },
    {
        id: 'bestiary', 
        label: 'Knowledge Foundry', 
        owner: 'The Archmage', 
        symbol: '⚙️',
        angle: 315,
        type: 'room',
        isTableStation: true,
        tubeColor: '#00d4ff',
        glowColor: 'rgba(0, 212, 255, 0.8)',
        weapon: KnowledgeFoundryWeapon
    },  
];

export const TABLE_STATIONS = ALL_ROOMS.filter(room => room.isTableStation);