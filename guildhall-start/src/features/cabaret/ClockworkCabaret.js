import React, {useState, useEffect, useRef} from "react";
import './styles/ClockworkCabaretMain.css'
import { getModeByCode, MODES } from "../../components/Navigation/modeConfig";

import BackWall from "./components/BackWall";
import ClockworkFloor from "./components/ClockworkFloor";
import DJBooth from "./components/DJBooth";

export default function ClockworkCabaret() {
    
    const [hours, setHours] = useState(10);
    const [minutes, setMinutes] = useState(10);
    
    const [soundPower, setSoundPower] = useState(true);
    const [volume, setVolume] = useState(80);
    const [tempo, setTempo] = useState(12);
    const [bpm, setBpm] = useState(120);

    const [lightPower, setLightPower] = useState(true);
    const [lightDimmer, setLightDimmer] = useState(100);
    const [lightSpeed, setLightSpeed] = useState(50);

    const [energyLevel, setEnergyLevel] = useState(100);
    const isDepleted = energyLevel <= 0;


    const [activeDice, setActiveDice] = useState({
        D4: false, //Spotlight
        D6: false, // Dsico Strobe
        D8: false, // Wildcard
        D10: false, //Shuffle (Impulse)
        D12: false, // Reverse (Toggle)
        D20: false // Fog / Steam
    });

    const [isReversed, setIsReversed] = useState(false);
    const [currentModeCode, setCurrentModeCode] = useState(null);
    const [crtModeText, setCrtModeText] = useState('DORMANT');
    const [crtMessageOverride, setCrtMessageOvverride] = useState(null);

    const effectiveLightPower = lightPower && lightDimmer > 0;
    const isSpotlightActive = effectiveLightPower && !isDepleted && !!activeDice.D4;

    const [isScrambling, setIsScrambling] = useState(false);
    const [scrambleBpm, setScrambleBPM] = useState(120);
    const [scrambleModeCode, SetScrambleModeCode] = useState(null);

    const overrideTimerRef = useRef(null);
    const prePresetSnapshotRef = useRef(null);
    
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const calculateBurnRate = () => {

        if (isDepleted) return 0;

        let totalBurn = 0.05;

        const activeModeObj = getModeByCode(currentModeCode);
        if (activeModeObj && activeModeObj.burnRate) {
            totalBurn += activeModeObj.burnRate * (bpm / 120);
        }

        if(lightPower) {
            totalBurn += (lightDimmer / 100) * 0.08;
            totalBurn += (lightSpeed / 100) * 0.05;
        }

        if (soundPower) {
            totalBurn += (volume / 100) * 0.10;
        }

        if (activeDice.D4) totalBurn += 0.12;
        if (activeDice.D6) totalBurn += 0.15;
        if (activeDice.D8) totalBurn += 0.20;
        if (activeDice.D12) totalBurn += 0.22;
        if (activeDice.D20) totalBurn += 0.25;
        if(isScrambling) totalBurn += 0.35;

        return totalBurn;
    };

    useEffect(() => {
        if (isDepleted) return;

        const interval = setInterval(() => {
            const currentDrain = calculateBurnRate();
            setEnergyLevel(prev => {
                const nextEnergy = Math.max(0, prev - currentDrain);
                if (nextEnergy === 0) {
                    triggerCrtMessage("!! MAINSPRING DEPLETED !!", 2500);
                }
                return nextEnergy;
            });
        }, 200);
        return () => clearInterval(interval);
    }, [isDepleted, currentModeCode, bpm, lightPower, lightDimmer, lightSpeed, activeDice, isScrambling, soundPower, volume]);

    const handleWindup = () => {
        setEnergyLevel(prev => {
            const restored = Math.min(100, prev + (100 / 6));
            if (prev === 0 && restored > 0) {
                triggerCrtMessage(">> PRESSURE RESTORED <<", 1500);
            }
            return restored;
        });
    };

    const triggerCrtMessage = (msg, duration = 1200) => {
        if (overrideTimerRef.current) clearTimeout(overrideTimerRef.current);
        setCrtMessageOvverride(msg);
        overrideTimerRef.current = setTimeout(() => {
            setCrtMessageOvverride(null);
        }, duration);
    };

    const handleIncrementHours = () => {
        if (isDepleted) return;
        setHours(prev => {
            if (isReversed) {
                return prev === 1 ? 12 : prev - 1;
            }
            return (prev % 12) + 1;
        });
    };

    const handleIncrementMinutes = () => {
        if (isDepleted) return;
        setMinutes(prev => {
            if (isReversed) {
                return prev === 0 ? 59 : prev - 1;
            }
            return (prev + 1) % 60;
        });
    };

    const handleTriggerDice = (diceType) => {
        
        if (isDepleted) return;
        
        if (activePreset !== null) {
            setActivePreset(null);
            prePresetSnapshotRef.current = null;
        }

        if(diceType === 'D10') {
            setIsScrambling(true);
            triggerCrtMessage(">> SHUFFLING <<", 1200);
            setActiveDice(prev => ({ ...prev, D10: true }));

            const scrambleInterval = setInterval(() => {
                setScrambleBPM(getRandomInt(85, 165));
                SetScrambleModeCode(MODES[getRandomInt(0, MODES.length - 1)].code);
                setLightSpeed(getRandomInt(30, 95));
            }, 80);

            setTimeout(() => {
                clearInterval(scrambleInterval);
                setIsScrambling(false);

                const randomMode = MODES[getRandomInt(0, MODES.length - 1)];
                const randomizedBpm = Math.min(160, Math.max(85, randomMode.defaultBpm + getRandomInt(-15, 15)));
                const randomizedSpeed = getRandomInt(40, 95);

                setCurrentModeCode(randomMode.code);
                setBpm(randomizedBpm);
                setLightSpeed(randomizedSpeed)
                setCrtModeText(randomMode.name.toUpperCase());
                setActiveDice(prev => ({ ...prev, D10: false }));
            }, 1200);
            return;
        }

        if(diceType === 'D12') {
           setIsReversed(prev => {
            const nextState = !prev;
            triggerCrtMessage(nextState ? "<< REVERSE ACTIVE >>" : ">> FORWARD DRIVE <<", 1200);
            setActiveDice(dices => ({ ...dices, D12: nextState }));
            return nextState;
           });
           return;

        }
        
        setActiveDice((prev) => ({
            ...prev,
            [diceType]: !prev[diceType]
        }));
    };

    const [presets, setPresets] = useState({
        1: { id: 1, modeCode: null, bpm: 120, lightSpeed: 50, lightDimmer: 100, isReversed: false, activeDice: { D4: false, D6: false, D8: false, D10: false, D12: false, D20: false } },
        2: { id: 2, modeCode: "C", bpm: 124, lightSpeed: 70, lightDimmer: 85, isReversed: true, activeDice: { D4: true, D6: false, D8: false, D10: false, D12: true, D20: false } },
        3: { id: 3, modeCode: "PU", bpm: 95, lightSpeed: 85, lightDimmer: 95, isReversed: false, activeDice: { D4: false, D6: true, D8: false, D10: false, D12: false, D20: false } },
        4: { id: 4, modeCode: "R", bpm: 170, lightSpeed: 95, lightDimmer: 100, isReversed: true, activeDice: { D4: true, D6: true, D8: true, D10: false, D12: true, D20: false } },
    });

    const [activePreset, setActivePreset] = useState(null);

    const handleSelectedPreset = (presetNum) => {
        
        if (isDepleted) return;
        
        if(activePreset === presetNum) {
            setActivePreset(null);

            if(prePresetSnapshotRef.current) {
                const snapshot = prePresetSnapshotRef.current;
                setBpm(snapshot.bpm);
                setLightSpeed(snapshot.lightSpeed);
                setLightDimmer(snapshot.lightDimmer);
                setIsReversed(snapshot.isReversed || false);
                setActiveDice(snapshot.activeDice);
                setCurrentModeCode(snapshot.modeCode);
                setCrtModeText(snapshot.crtModeText);
                prePresetSnapshotRef.current = null;
            }

            return;
        }

        if(activePreset === null) {
            prePresetSnapshotRef.current = {
                bpm,
                lightSpeed,
                lightDimmer,
                activeDice: { ...activeDice },
                modeCode: currentModeCode,
                crtModeText,
                isReversed
            };
        }

        const selected = presets[presetNum];
        if(!selected) return;

        setActivePreset(presetNum);
        setBpm(selected.bpm);
        setLightSpeed(selected.lightSpeed);
        setLightDimmer(selected.lightDimmer);
        setActiveDice(selected.activeDice);
        setIsReversed(selected.isReversed || false);
        
        const matchedMode = getModeByCode(selected.modeCode);
        setCurrentModeCode(matchedMode ? matchedMode.code : null);
        setCrtModeText(matchedMode ? matchedMode.name.toUpperCase() : "DORMANT");
    };

    const handleSavePreset = (presetNum) => {
        
        if (isDepleted) return;
        
        const activeMode = getModeByCode(currentModeCode);

        const newSnapshot = {
            id: presetNum,
            modeCode: currentModeCode || null,
            bpm,
            lightSpeed,
            lightDimmer,
            activeDice: { ...activeDice },
            isReversed
        };

        setPresets(prev => ({ ...prev, [presetNum]: newSnapshot }));
        setActivePreset(presetNum);
        triggerCrtMessage(`SAVED TO SET ${presetNum}`, 1800);
    };

    const handleModeSelect = (targetCode) => {
        if (isDepleted) return;
        
        if (activePreset !== null) {
            setActivePreset(null);
            prePresetSnapshotRef.current = null;
        }

        const nextCode = (currentModeCode === targetCode) ? null : targetCode;
        const modeObj = getModeByCode(nextCode);

        setCurrentModeCode(nextCode);

        if (modeObj) {
            setBpm(modeObj.defaultBpm);
            setCrtModeText(modeObj.name.toUpperCase());
        } else {
            setCrtModeText("DORMANT");
        }
    };

    const resolvedCrtText = isDepleted ? "DEPLETED" : (crtMessageOverride || crtModeText);
   
    
    return (
        <div className={`cabaret-room-stage ${isSpotlightActive ? 'spotlight-ambient-dim' : ''}`}>
            
            <BackWall  
                gearSpeed={tempo}
                activeDice={activeDice}
                lightPower={effectiveLightPower}
                isReversed={isReversed}
                isDepleted={isDepleted}
            />

            <ClockworkFloor 
                hours={hours}
                minutes={minutes}
                lightPower={effectiveLightPower}
                lightDimmer={lightDimmer}
                lightSpeed={lightSpeed}
                activeDice={activeDice}
                bpm={isScrambling ? scrambleBpm : bpm}
                modeCode={isScrambling ? scrambleModeCode : currentModeCode}
                isScrambling={isScrambling}
                isReversed={isReversed}
                isDepleted={isDepleted}
            />

            <DJBooth 
                hours={hours}
                minutes={minutes}
                onIncrementHours={handleIncrementHours}
                onIncrementMinutes={handleIncrementMinutes}
                lightPower={lightPower}
                setLightPower={setLightPower}
                lightDimmer={lightDimmer}
                setLightDimmer={setLightDimmer}
                lightSpeed={lightSpeed}
                setLightSpeed={setLightSpeed}
                activeDice={activeDice}
                onTriggerDice={handleTriggerDice}
                bpm={isScrambling ? scrambleBpm : bpm}
                setBpm={setBpm}
                activePreset={activePreset}
                onSelectPreset={handleSelectedPreset}
                onSavePreset={handleSavePreset}
                activeMode={isScrambling ? scrambleModeCode : currentModeCode}
                isScrambling={isScrambling}
                crtModeText={resolvedCrtText}
                onModeSelect={handleModeSelect}
                isReversed={isReversed}
                isDepleted={isDepleted}
                energyLevel={energyLevel}
                onWindUp={handleWindup}
                soundPower={soundPower}
                setSoundPower={setSoundPower}
                volume={volume}
                setVolume={setVolume}
            />

        </div>
    );
}