export const DEFAULT_MODE_CODE = null;

export const MODES = [
    {
        code: "I",
        modeNum: 0,
        label: "I",
        name: "CLASSIC BRASS",
        color: "#b5873d",
        burnRate: 0.5,
        defaultBpm: 120,
        secondaryHour: "#b5873d",
        halfHour: "#d4af37",
        initialTime:{ hours: 10, minutes: 10 },
        mechanismType: "STANDARD_TICKS"
    },
    {
        code: "C",
        modeNum: 1,
        label: "I",
        name: "Checkerboard Matrix",
        color: "#b87333",
        burnRate: 0.5,
        defaultBpm: 124,
        secondaryHour: "#8b5a2b",
        halfHour: "#4a2e16",
        initialTime: { hours: 2, minutes: 40 },
        mechanismType: "CHECKERBOARD_GRID"
    },
    {
        code: "PI",
        modeNum: 2,
        label: "II",
        name: "Chaos Glitch",
        color: "#ff69b4",
        burnRate: 8.5,
        defaultBpm: 140,
        secondaryHour: "#ff0080",
        halfHour: "#ffb8d8",
        initialTime: null,
        mechanismType: "THE_GLITCH"
    },
    {
        code: "PU",
        modeNum: 3,
        label: "III",
        name: "Lunar Eclipse",
        color: "#9933ff",
        burnRate: 1.0,
        defaultBpm: 95,
        secondaryHour: "#6900d1",
        halfHour: "#c48aff",
        initialTime: { hours: 6, minutes: 0 },
        mechanismType: "LUNAR_ECLIPSE"
    },
    {
        code: "G",
        modeNum: 4,
        label: "IV",
        name: "Counter Retrace",
        color: "#00ff66",
        burnRate: 5.0,
        defaultBpm: 110,
        secondaryHour: "#00a341",
        halfHour: "#5cff9d",
        initialTime: { hours: 12, minutes: 55 },
        mechanismType: "COUNTER_RETRACE"
    },
    {
        code: "BU",
        modeNum: 5,
        label: "V",
        name: "Beam Tracking",
        color: "#0099ff",
        burnRate: 3.5,
        defaultBpm: 128,
        secondaryHour: "#0062a3",
        halfHour: "#5cbeff",
        initialTime: { hours: 3, minutes: 0 },
        mechanismType: "BOLDLY_GO"
    },
    {
        code: "O",
        modeNum: 6,
        label: "VI",
        name: "Solar Flare",
        color: "#ff6600",
        burnRate: 7.0,
        defaultBpm: 135,
        secondaryHour: "#d15400",
        halfHour: "#ff9d5c",
        initialTime: { hours: 12, minutes: 30 },
        mechanismType: "SOLAR_FLARE"
    },
    {
        code: "CY",
        modeNum: 7,
        label: "VII",
        name: "Days Fly",
        color: "#00ffff",
        burnRate: 2.5,
        defaultBpm: 120,
        secondaryHour: "#00a3a3",
        halfHour: "#5cffff",
        initialTime:{ hours: 9, minutes: 15 },
        mechanismType: "DAYS_FLY_BY"
    },
    {
        code: "Y",
        modeNum: 8,
        label: "VIII",
        name: "Origins & Progressions",
        color: "#ff69b4",
        burnRate: 4.0,
        defaultBpm: 128,
        secondaryHour: "#ffd700",
        halfHour: "#b5873d",
        initialTime:{ hours: 9, minutes: 0 },
        mechanismType: "LEGACY_TRANSITION"
    },
    {
        code: "R",
        modeNum: 9,
        label: "IX",
        name: "Midnight Theater",
        color: "#ff0055",
        burnRate: 10.0,
        defaultBpm: 170,
        secondaryHour: "#b5873d",
        halfHour: "#d4af37",
        initialTime: { hours: 1, minutes: 0 },
        mechanismType: "MIDNIGHT_THEATER"
    },
    {
        code: "RS",
        modeNum: 10,
        label: "X",
        name: "9to5",
        color: "#e0ffff",
        burnRate: 3.0,
        defaultBpm: 124,
        secondaryHour: "#ffb6c1",
        halfHour: "#ffbc05",
        initialTime: { hours: 9, minutes: 25 },
        mechanismType: "LINE_DANCE_SPARKLE",
        stageEffect: "RHINESTONE_FIREWORKS"
    }
];

export const getModeByCode = (code) => {
    if(!code) return null;
    return MODES.find((m) => m.code === code) || null;
};