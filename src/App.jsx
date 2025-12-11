import { useState } from 'react'
import './App.css'
import Home from "./Components/Home/Home"
import Card from "./Components/Models/Card"
import ScrollPackets from "./Components/ScrollPackets"
import Packet from "./Components/Models/Packet"

function App() {
  const [start, setStart] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [showPacket, setShowPacket] = useState(true);

  const maxTaps = 15;

  const handleStart = () => {
    setStart(true);
  };

  const handleTap = () =>{
    if(tapCount < maxTaps){
      setTapCount(prev => prev + 1);
    }

    if (tapCount + 1 >= maxTaps) {
        setTimeout(() => {
          setShowPacket(false);
        }, 300); //300ms delay
      }
  };

  return (
    <>
    {/* had to learn what ternary operaters are */}
      {!start ? (
        <Home onStart={handleStart} />
      ) : (
        <div className="container" onClick={handleTap}>
          
          {showPacket && (
            <div className="packetContainer">
              <Packet />
            </div>
          )};

          <div className="cardContainer">
            <Card />
          </div>
          
        </div>
      )}
    </>

  )
}

export default App
