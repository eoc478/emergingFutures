import { useState, useEffect, useRef } from 'react'
import './App.css'
import Home from "./Components/Home/Home"
import Card from "./Components/Models/Card"
import Packet from "./Components/Models/Packet"

function App() {
  const [start, setStart] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [showPacket, setShowPacket] = useState(true);
  const [thump, setThump] = useState(false);
  const [packetTier, setPacketTier] = useState(0);
  const [snapping, setSnapping] = useState(false);

  const maxTaps = 5;
  const scrollAmount = useRef(0);
  const scrollLock = useRef(false);

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
        }, 30); //ms delay
      }
  };
  
  //resets every time for the next packet and card
  const nextPacket = () => {
    setPacketTier(prev => prev + 1);
    setTapCount(0);
    setShowPacket(true);
    setThump(false);
  }

  //scrolling logic, adjusted with chatGPT so it would stop bugging out from small taps
  useEffect(() => {
    const threshold = 1000;
    const cooldown = 100;

    const handleScroll = (e) => {
      if (showPacket) return;
      if (scrollLock.current) return;

      const delta =
        e.deltaY ||
        (e.touches ? Math.abs(e.touches[0].clientY) : -20);

      scrollAmount.current += Math.abs(delta);

      if (scrollAmount.current >= threshold) {
        scrollLock.current = true;
        scrollAmount.current = 0;

        setSnapping(true);
        // nextPacket();

        setTimeout(() => {
          nextPacket();
          setSnapping(false);
          scrollLock.current = false;
          
        }, cooldown);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [showPacket]);

  return (
    <>
    {/* had to learn what ternary operaters are */}
      {!start ? (
        <Home onStart={handleStart} />
      ) : (
      <div className={`container ${snapping ? "snapOut" : ""}`} onClick={handleTap}>
        {showPacket && (
          <div className={`packetContainer ${thump ? 'thump' : ''}`}>
            <Packet packetTier={packetTier} />
          </div>
        )}
        
        <div className="cardContainer">
          {!showPacket && (
              <Card packetTier={packetTier}/>
          )}
        </div>
        <div className="directions">
          {!showPacket && (
          <p>swipe up for the next card</p>
          )}
        </div>
        
      </div>
      )}
    </>

  )
}

export default App
