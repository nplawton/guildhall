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
        mechanismType: "DAYS_FLY_BY",
        routine: {
            patternType: "DIURNAL_SKY_CYCLE",
            pusleOnBeat: false,
            invertOnBeat: false,
            getTileColor: (index, step = 0, minutes = 15, sweepPassCount = 0, isReversed = false, isDepleted = false) => {
                if (isDepleted) return "transparent";

                const effectiveStep = isReversed ? (24 - (step % 24)) % 24 : step % 24;

                const sunPos = effectiveStep;
                const dist = Math.min(Math.abs(index - sunPos), 24 - Math.abs(index - sunPos));

                if (sunPos >= 18 && sunPos <= 21) {
                    if (dist === 0) return "#ff6699";
                    if (dist === 1) return "#ff88aa";
                    if (dist === 2) return "#cc55aa";
                    if (dist <= 4) return "#rgba(100, 30, 120, 0.4)";
                }

                else if (sunPos >= 22 || sunPos <= 3) {
                    if (dist === 0) return "#ffffff";
                    if (dist === 1) return "#00ffff";
                    if (dist === 2) return "#00bfff";
                    if (dist <= 5) return "rgba(0, 120, 200, 0.35)";
                }

                else if (sunPos >= 4 && sunPos <= 9) {
                    if (dist === 0) return "#ff5500";
                    if (dist === 1) return "#ff7733";
                    if (dist === 2) return "#8a2be2";
                    if (dist <= 5) return "rgba(40, 20, 90, 0.4)";
                }

                else {
                    if (dist === 0) return "#e6e6ff";
                    if (dist === 1) return "#4b0082";

                    const isStarTile = ((index * 7 + step * 3) % 11) === 0;
                    if (isStarTile) {
                        return step % 2 === 0 ? "#ffffff" : "#a3c2ff";
                    }

                    if (dist <= 4) return "rgba(15, 5, 40, 0.5)";
                }

                return "rgba(10, 5, 25, 0.25)";
            }
        }
    },
    {
        code: "Y",
        modeNum: 8,
        label: "VIII",
        name: "Origins & Progressions",
        color: "#ffe135",
        burnRate: 4.0,
        defaultBpm: 128,
        secondaryHour: "#ffd700",
        halfHour: "#b5873d",
        initialTime:{ hours: 2, minutes: 40 },
        mechanismType: "LEGACY_TRANSITION",
        routine: {
            patternType: "FOUR_PHASE_LIGHT_PROGRESSION",
            pusleOnBeat: true,
            invertOnBeat: false,

            getTileColor: (index, step = 0, minutes = 40, sweepPassCount = 0, isReversed = false, isDepleted = false) => {
                if (isDepleted) return "transparent";

                const rawStep = step % 24;
                const effectiveStep = isReversed ? (24 - rawStep) % 24 : rawStep;

                if (effectiveStep <= 5) {
                    if (effectiveStep <= 1 && [3, 4].includes(index)) return "#ffffff";

                    if (effectiveStep === 2) {
                        if ([9, 10].includes(index)) return "ffaa00";
                        if ([8, 11].includes(index)) return "rgba(255, 102, 0, 0.35";
                    }

                    if (effectiveStep === 3 || effectiveStep === 4) {
                        if ([15, 16].includes(index)) return "#ffcc00";
                        if ([14, 17].includes(index)) return "#8b0000"
                    }

                    if (effectiveStep === 5) {
                        if ([21, 22].includes(index)) return "#ffffff";
                        if ([20, 23].includes(index)) return "#ffe135"
                    }

                    return "rgba(20, 10, 5, 0.2)";
                }

                if (effectiveStep >= 6 && effectiveStep <= 11) {
                    let activeWedges = [];
                    
                    if (effectiveStep === 6 || effectiveStep === 7) {
                        activeWedges = [23, 0, 1, 2];
                    } else if (effectiveStep === 8) {
                        activeWedges = [7, 8, 9]
                    } else if (effectiveStep === 9 || effectiveStep === 10) {
                        activeWedges = [5, 6, 7, 8];
                    } else if (effectiveStep === 11) {
                        activeWedges = [15, 16, 17];
                    }

                    if (activeWedges.includes(index)) {
                        return (index + effectiveStep) % 2 === 0 ? "#ffbf00" : "#d4a373"
                    }

                    return "rgba(60, 40, 10, 0.25)";
                }

                if (effectiveStep >= 12 && effectiveStep <= 17) {
                    const stepOffset = effectiveStep - 12;
                    const clockwiseIdx = (index + stepOffset * 2) % 24;
                    const counterIdx = (24 + index - stepOffset * 2) % 24;

                    const isClockwise = clockwiseIdx < 4;
                    const isCounter = counterIdx < 4;

                    if (isClockwise && isCounter) return "#ffffaa";
                    if (isClockwise) return "#d4af37";
                    if (isCounter) return "#ffd700";

                    return "rgba(40, 30, 15, 0.3)"
                }

                if (effectiveStep >= 18) {
                    if (effectiveStep === 23) {
                        if ([23, 0, 1].includes(index)) return "#ffffff";
                        return (index % 2 === 0) ? "#00ffff" : "#e0ffff";
                    }

                    const pulseRing = (effectiveStep - 18) % 6;
                    const distFromHub = Math.abs((index % 6) - pulseRing);

                    if (distFromHub === 0) return "#ffffff"

                    if (index >= 9 && index <= 15) return "#5c3a21";
                    if (index >= 21 || index <= 3) return "#00ffff";
                    return "#ffe135";
                }

                return "rgba(25, 15, 5, 0.15";
            }
        }
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
        initialTime: { hours: 1, minutes: 55 },
        mechanismType: "MIDNIGHT_THEATER",
        lockControls: { disableLSpd: true, disableReverse: true },
        routine: {
            patternType: "TIME_WARP_CHOREOGRAPHY",
            pusleOnBeat: true,
            invertOnBeat: false,

            getTileColor: (index, step = 0, sweepPassCount = 0, isReversed = false, isDepleted = false) => {
                if (isDepleted) return "transparent";

                const rawStep = step % 24;

                if (rawStep <= 2) {
                    return (index % 2 === 0)
                        ? "rgba(80, 0, 20, 0.3)"
                        : "rgba(30, 0, 10, 0.2)"
                    ;
                }

                if (rawStep >= 3 && rawStep <= 5) {
                    if ([18, 22].includes(index)) return "#ff0055";
                    return "rgba(50, 0, 15, 0.25)";
                }

                if (rawStep >= 6 && rawStep <= 8) {
                    if([20, 0].includes(index)) return "#ff3366";
                    return "rgba(60, 0, 20, 0.25)";
                }

                if (rawStep >= 9 && rawStep <= 11) {
                    if ([16, 8].includes(index)) return "#ff0044";
                    return "rgba(80, 0, 25, 0.3)";
                }

                if (rawStep >= 12 && rawStep <= 14) {
                    if ([14, 10, 12].includes(index)) return "#e60039";
                    return "rgba(100, 0, 30, 0.35)"
                }

                if (rawStep >= 15 && rawStep <= 22) {
                    
                    if (rawStep % 2 === 0) {
                        return (index % 2 === 0) 
                            ? "#ff0055"
                            : "#990033"
                        ;
                    }
                    return (index % 2 === 0)
                        ? "#cc0044"
                        : "#4a0018"
                    ;
                }

                return "#ffffff";

            }
        }
    },
    {
        code: "RS",
        modeNum: 10,
        label: "X",
        name: "Line Dance Sparkle",
        color: "#ffe135",
        burnRate: 3.5,
        defaultBpm: 120,
        secondaryHour: "#ffb6c1",
        halfHour: "#0099ff",
        initialTime: { hours: 9, minutes: 25 },
        mechanismType: "LINE_DANCE_SPARKLE",
        routine: {
            patternType: "DANCER_FORMATION_WAVE",
            pusleOnBeat: true,
            invertOnBeat: false,

            getTileColor: (index, step = 0, sweepPassCount = 0, isReversed = false, isDepleted = false) => {
                if (isDepleted) return "transparent";

                const rawStep = step % 24;
                const isClapBeat = [5, 11, 15, 22, 23].includes(rawStep);

                if(isClapBeat) {
                    return (index % 2 === 0) ? "#ffe135" : "#ffffff";
                }

                const dancer1Center = (0 + Math.floor(rawStep / 6)) % 24;
                const dancer2Center = (6 + Math.floor(rawStep / 6)) % 24;
                const dancer3Center = (12 + Math.floor(rawStep / 6)) % 24;
                const dancer4Center = (18 + Math.floor(rawStep / 6)) % 24;

                const isNearDancer = [dancer1Center, dancer2Center, dancer3Center, dancer4Center].some(
                    center => Math.abs(index - center) <= 1 || Math.abs(index - center) >= 23
                );

                if (isNearDancer) {
                    return (index % 2 === 0) ? "#ffe135" : "#0099ff";
                }

                return "rgba(10, 15, 30, 0.25)"
            }
        }
    }
];

export const getModeByCode = (code) => {
    if(!code) return null;
    return MODES.find((m) => m.code === code) || null;
};