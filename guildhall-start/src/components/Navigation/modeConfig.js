export const DEFAULT_MODE_CODE = null;

export const generateRandomHexColor = () => {
    const randomInt = Math.floor(Math.random() * 16777215);
    return `#${randomInt.toString(16).padEnd(6, "0").toUpperCase()}`;
}

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
        name: "Checkerboard",
        color: "#b87333",
        burnRate: 0.5,
        defaultBpm: 124,
        secondaryHour: "#8b5a2b",
        halfHour: "#4a2e16",
        initialTime: { hours: 2, minutes: 40 },
        mechanismType: "CHECKERBOARD_GRID",
        routine: {
            patternType: "ALTERNATING_MATRIX",
            colors: {
                even: "#0a0a0a",
                odd: "#d32f2f"
            },
            accentColor: "#b87333",
            getTileColor: (index) => (index % 2 === 0 ? "#0a0a0a" : "#d32f2f"),
            pusleOnBeat: true,
            invertOnBeat: true
        }
    },
    {
        code: "PI",
        modeNum: 2,
        label: "II",
        name: "Chaos Glitch",
        color: "#ff69b4",
        burnRate: 0.85,
        defaultBpm: 140,
        secondaryHour: "#ff0080",
        halfHour: "#ffb8d8",
        initialTime: null,
        mechanismType: "THE_GLITCH",
        routine: {
            patternType: "CHAOS_GLITCH",
            colors: ["#ff69b4", "#ff0080", "#ffb8d8", "#00e5ff"],
            accentColor: "#ff69b4",
            pusleOnBeat: true,
            invertOnBeat: true,
            getTileColor: (index, step = 0) => {
                const isGlitched = Math.random() > 0.3;
                return isGlitched ? generateRandomHexColor() : "transparent";
            }
        }
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
        mechanismType: "LUNAR_ECLIPSE",
        routine: {
            patternType: "ECLIPSE_SWEEP",
            colors: {
                eye: "#c48aff",
                gust: "#9933ff",
                mist: "#3c1361",
                void: "#0d0317"
            },
            accentColor: "#c48aff",
            pusleOnBeat: true,
            invertOnBeat: false,
            getTileColor: (index, step = 0) => {
                const windCenter = step % 24;
                const rawDist = Math.abs(index - windCenter);
                const dist = Math.min(rawDist, 24 - rawDist);
                const isFourthBeat = step % 4 === 0;

                if (dist <= 1) {
                    return isFourthBeat ? "#e2c4ff" : "#c48aff";
                } 
                else if (dist <= 4) {
                    return "#9933ff";
                }
                else if (dist <= 7) {
                    return "#3c1361";
                }
                return "transparent";
            }
        }
    },
    {
        code: "G",
        modeNum: 4,
        label: "IV",
        name: "Counter Retrace",
        color: "#00ff66",
        burnRate: 0.25,
        defaultBpm: 110,
        secondaryHour: "#00a341",
        halfHour: "#5cff9d",
        initialTime: { hours: 12, minutes: 58 },
        mechanismType: "COUNTER_RETRACE",
        routine: {
            patternType: "RADAR_SWEEP-REVERSE",
            colors: {
                beam: "#00ff66",
                prominent: "#005c25",
                secondary: "#33ff88",
                dim: "#001a0a"
            },
            accentColor: "#00ff66",
            pusleOnBeat: true,
            invertOnBeat: false,
            getTileColor: (index, step = 0, minutes = 55, sweepPassCount = 1, isReversed = false) => {
                
                const effectiveMinutes = isReversed ? (60 - minutes) % 60 : minutes;
                const rawWedge = Math.floor((effectiveMinutes / 60) * 24);
                const beamHeadWedge = (rawWedge - 1 + 24) % 24;
                const trailDistance = (beamHeadWedge - index + 24) % 24;

                if(trailDistance === 0) {
                    return "#00ff66"
                }
                if(trailDistance <= 3) {
                    return "#00a341"
                }

                const isOddWedge = index % 2 !== 0;
                const isOddSweep = sweepPassCount % 2 !== 0;

                if (isOddSweep) {
                    return isOddWedge ? "#005c25" : "#001a0a";
                }
                return !isOddWedge ? "#33ff88" : "#001a0a";
                
            }
        }
    },
    {
        code: "BU",
        modeNum: 5,
        label: "V",
        name: "Beam Tracking",
        color: "#0099ff",
        burnRate: 0.15,
        defaultBpm: 128,
        secondaryHour: "#0062a3",
        halfHour: "#5cbeff",
        initialTime: { hours: 12, minutes: 0 },
        mechanismType: "BOLDLY_GO",
        routine: {
            patternType: "BEAM_TRACKING_SYSTEM",
            colors: {
                beam: "#00c3ff",
                trail: "#0062a3",
                dim: "rgba(0, 15, 35, 0.12"
            },
            accentColor: "#0099ff",
            pusleOnBeat: true,
            invertOnBeat: false,
            getTileColor: (index, step = 0, minutes = 0, sweepPassCount = 0, isReversed = false) => {
                const rawStep = step % 24;
                const activeBeamWedge = isReversed
                    ? (24 - rawStep) % 24
                    : rawStep
                ;

                const distFromBeam = isReversed
                    ? (index - activeBeamWedge + 24) % 24
                    : (activeBeamWedge - index + 24) % 24
                ;

                if (index === activeBeamWedge) {
                    return "#5cbeff";
                }

                if (distFromBeam > 0 && distFromBeam <= 4) {
                    const decayFactor = Math.exp(-0.5 * distFromBeam);
                    return `rgba(0, 180, 255, ${Math.max(0.08, decayFactor * 0.7)})`;
                }

                if (distFromBeam >= 22 && distFromBeam <= 23) {
                    return "rgba(0, 120, 220, 0.18)"
                }

                return "rgba(0, 15, 35, 0.12)";

            }
        }
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
        initialTime: { hours: 9, minutes: 20 },
        mechanismType: "SOLAR_FLARE",
        routine: {
            patternType: "SOLAR_FLARE_FIREBALL",
            colors: {
                fireball: "#ff3300",
                amber: "#ff9900",
                gold: "#ffcc00",
                ember: "#330d00"
            },
            accentColor: "#ff6600",
            pusleOnBeat: true,
            invertOnBeat: false,

            getTileColor: (index, step = 0, minutes = 20, sweepPassCount = 0, isReversed = false, isDepleted = false) => {
                
                if (isDepleted) return "transparent";
                
                const rawStep = step % 24;

                if (rawStep <= 15) {
                    const countdownWedges = [16, 15, 14, 13, 12, 11, 10];
                    const activeCount = Math.max(0, Math.floor((15 - rawStep) / 2.2));
                    const activeArc = countdownWedges.slice(0, activeCount);

                    if (activeArc.includes(index)) {
                        return "#ff4500";
                    }

                    const runicWedges = [20, 21, 22, 23, 0, 1, 2, 3, 4];
                    const burnProgress = Math.floor((rawStep / 15) * runicWedges.length);
                    const burnedArc = runicWedges.slice(0, burnProgress);

                    if (burnedArc.includes(index)) {
                        return "rgba(255, 69, 0, 0.45)";
                    }

                    if(index === 18) {
                        return "#ffcc00";
                    }
                }

                if (rawStep >= 16 && rawStep <= 19) {
                    const trejectoryWedges = [20, 22, 0, 2];
                    const activeTrajIdx = rawStep - 16;

                    if(index === trejectoryWedges[activeTrajIdx]) {
                        return "#ff6600";
                    }
                }

                if (rawStep >= 20 && rawStep <= 22) {
                    const blastZone = [5, 6, 7];
                    const outerBlast = [4, 8, 3, 9];

                    if (blastZone.includes(index)) {
                        return rawStep === 20 ? "#ffffff" : "#ff3300";
                    }
                    if (outerBlast.includes(index)) {
                        return "#ff9900"
                    }
                }

                if (rawStep >= 23) {
                    const sorchedZone = [5, 6, 7, 12];
                    if (sorchedZone.includes(index)) {
                        return "rgba(80, 20, 0, 0.4)";
                    }
                }

                return "rgba(25, 8, 0, 0.12)"
            }
        }
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