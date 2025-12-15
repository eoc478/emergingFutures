import { useState, useEffect } from 'react'
import './App.css'
import Home from "./Components/Home/Home"
import Card from "./Components/Models/Card"
// import ScrollPackets from "./Components/ScrollPackets"
import Packet from "./Components/Models/Packet"
import materials from "./data/cards.json"

// function getRandomPacket(tier){
//   const tierString = String(tier); //tier: 0, 1, 2, 3, etc. must be converted to numbers
//   const packets = Object.values(materials).filter(p => p.tier === tierString);
//   if (packets.length === 0) return null;

//   return packets[Math.floor(Math.random() * packets.length)];
// }

// function getRandomCard(packet) {
//   if (!packet) return null;
//   const cards = packet.cards;
//   return cards[Math.floor(Math.random() * cards.length)];
// }

function App() {
  const [start, setStart] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [showPacket, setShowPacket] = useState(true);
  const [thump, setThump] = useState(false);
  const [packetTier, setPacketTier] = useState(0);

  const maxTaps = 5;

  // const packetData = getRandomPacket(0);
  // const cardData = getRandomCard(packetData);

  const handleStart = () => {
    setStart(true);
  };

  const handleTap = () =>{
    if(tapCount < maxTaps){
      setTapCount(prev => prev + 1);
    }

    if (tapCount + 1 >= maxTaps) {
        setThump(true);
        setTimeout(() => {
          setShowPacket(false);
        }, 50); //ms delay
      }
  };

  //resets every time for the next packet and card
  const nextPacket = () => {
    setPacketTier(prev => prev + 1);
    setTapCount(0);
    setShowPacket(true);
    setThump(false);
  }

  useEffect(() => {
  const handleScroll = (e) => {
    if (!showPacket) {
     nextPacket();
    }
  };

  window.addEventListener("wheel", handleScroll);
  window.addEventListener("touchmove", handleScroll);
  return () => {
    window.removeEventListener("wheel", handleScroll);
    window.removeEventListener("touchmove", handleScroll);
  }
}, [showPacket]);

  return (
    <>
    {/* had to learn what ternary operaters are */}
      {!start ? (
        <Home onStart={handleStart} />
      ) : (
      <div className="container" onClick={handleTap}>
        {showPacket && (
          <div className={`packetContainer ${thump ? 'thump' : ''}`}>
            <Packet />
          </div>
        )};

        <div className="cardContainer">
          <Card packetTier={packetTier}/>
        </div>
      </div>
      )}
    </>

  )
}

export default App
