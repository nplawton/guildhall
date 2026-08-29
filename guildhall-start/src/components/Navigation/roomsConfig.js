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
        weapon: WhisperingCasketWeapon
    },
    {
        id: 'cabaret', label: 
        'Clockwork Cabaret', 
        owner: 'The Bard', 
        symbol: '🕰️',
        angle: 225,
        type: 'room',
        isTableStation: true,
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
        weapon: KnowledgeFoundryWeapon
    },  
];

export const TABLE_STATIONS = ALL_ROOMS.filter(room => room.isTableStation);