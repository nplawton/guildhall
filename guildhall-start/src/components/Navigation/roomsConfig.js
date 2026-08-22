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
        isTableStation: true
    },
    {
        id: 'range', 
        label: 'Star-Lit Grotto', 
        owner: 'The Sorcerer', 
        symbol: '🔮',
        angle: 45,
        type: 'room',
        isTableStation: true
    },
    {
        id: 'casket', 
        label: 'Whispering Casket', 
        owner: "The Rogue", 
        symbol: '🎲',
        angle: 135,
        type: 'room',
        isTableStation: true
    },
    {
        id: 'cabaret', label: 
        'Clockwork Cabaret', 
        owner: 'The Bard', 
        symbol: '🕰️',
        angle: 225,
        type: 'room',
        isTableStation: true
    },
    {
        id: 'bestiary', 
        label: 'Knowledge Foundry', 
        owner: 'The Archmage', 
        symbol: '⚙️',
        angle: 315,
        type: 'room',
        isTableStation: true
    },  
];

export const TABLE_STATIONS = ALL_ROOMS.filter(room => room.isTableStation);