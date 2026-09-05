export const MODES = [
    {
        code: "CY",
        modeNum: 1,
        label: "1",
        name: "Days Fly",
        color: "#00ffff",
        burnRate: 2.5,
        defaultBpm: 120,
        initialTime:{ hours: 9, minutes: 15 }
    },
    {
        code: "PI",
        modeNum: 2,
        label: "2",
        name: "Chaos Glitch",
        color: "#ff69b4",
        burnRate: "8.5",
        defaultBpm: 140,
        initialTime: null
    },
    {
        code: "BU",
        modeNum: 3,
        label: "3",
        name: "Beam Tracking",
        color: "#0099ff",
        burnRate: 3.5,
        defaultBpm: 128,
        initialTime: { hours: 3, minutes: 0 }
    },
    {
        code: "G",
        modeNum: 4,
        label: "4",
        name: "Counter Retrace",
        color: "#00ff66",
        burnRate: 5.0,
        defaultBpm: 110,
        initialTime: { hours: 12, minutes: 55 }
    },
    {
        code: "PU",
        modeNum: 5,
        label: "5",
        name: "Lunar Eclipse",
        color: "#9933ff",
        burnRate: 1.0,
        defaultBpm: 95,
        initialTime: { hours: 6, minutes: 0 }
    },
    {
        code: "O",
        modeNum: 6,
        label: "6",
        name: "Solar Flare",
        color: "#ff6600",
        burnRate: 7.0,
        defaultBpm: 135,
        initialTime: { hours: 12, minutes: 30 }
    },
    {
        code: "Y",
        modeNum: 7,
        label: "7",
        name: "Matrix Showcase",
        color: "#ffd700",
        burnRate: 0.5,
        defaultBpm: 124,
        initialTime: { hours: 9, minutes: 25 }
    },
    {
        code: "R",
        modeNum: 7,
        label: "7",
        name: "Midnight Theater",
        color: "#ff0055",
        burnRate: 10.0,
        defaultBpm: 170,
        initialTime: { hours: 1, minutes: 0 }
    },
];

export const getModeByCode = (code) => MODES.find((m) => m.code === code) || MODES[0];