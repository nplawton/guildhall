import React, {useState} from "react";

import MainHallView from "./views/MainHallView";
import FoundryView from "./views/BestiaryView";
import CabaretView from "./views/CabaretView";
import RangeView from "./views/RangeView";
import CasketView from "./views/CasketView";
import DMSanctumView from "./views/SanctumView";

import './App.css';

export default function App(){
  
  const [currentRoom, setCurrentRoom] = useState('mainhall');

  const renderRoomView = () => {
    switch (currentRoom) {
      case 'mainhall':
        return <MainHallView currentRoom={currentRoom} onSelectRoom={setCurrentRoom} />;
      case 'bestiary':
        return <FoundryView currentRoom={currentRoom} onSelectRoom={setCurrentRoom} />;
      case 'cabaret':
        return <CabaretView currentRoom={currentRoom} onSelectRoom={setCurrentRoom} />;
      case 'range':
        return <RangeView currentRoom={currentRoom} onSelectRoom={setCurrentRoom} />;
      case 'casket':
        return <CasketView currentRoom={currentRoom} onSelectRoom={setCurrentRoom} />;
      case 'sanctum':
        return <DMSanctumView currentRoom={currentRoom} onSelectRoom={setCurrentRoom} />;
      default:
        return <MainHallView currentRoom={currentRoom} onSelectRoom={setCurrentRoom} />;
    }
  };
  
  return (
    <div className={`app-guildhall-container theme-${currentRoom}`}>
      {renderRoomView()}
    </div>
  );
}