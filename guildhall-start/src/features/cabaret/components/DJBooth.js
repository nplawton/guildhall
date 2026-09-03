import React, { useState } from "react";
import '../styles/DJBooth.css';
import BoothBase from "../components/DJBooth/BoothBase";
import PanelsHolder from "../components/DJBooth/PanelsHolder";
import TopRack from "./DJBooth/TopRack";

export default function DJBooth(props) {

    const [energyLevel, setEnergyLevel] = useState(100);
    const [isCuckooOpen, setIsCuckooOpen] = useState(false);
    const [activeMode, setActiveMode] = useState("CY");
    const [bpm, setBpm] = useState(120);
    
    return(

        <BoothBase>

            <TopRack 
                activeMode={activeMode}
                bpm={bpm}
                lightPower={energyLevel > 0}
                soundPower={energyLevel > 0}
                onModeSelect={(mode) => setActiveMode(mode)}
            />

           <PanelsHolder 
                energyLevel={energyLevel} 
                isCuckooOpen={isCuckooOpen}
            >
                <div className="dj-booth-deck-layout" >
                    
                </div>
           </PanelsHolder>
        </BoothBase>

    );

}