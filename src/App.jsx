import { useState } from 'react'
import './App.css'
import Home from "./Components/Home/Home"
import Card from "./Components/Models/Card"
import ScrollPackets from "./Components/ScrollPackets"
import Packet from "./Components/Models/Packet"

function App() {
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(true);
  };

  return (
    <>
    {/* had to learn what ternary operaters are */}
      {!start ? (
        <Home onStart={handleStart} />
      ) : (
        <Packet />
      )}
    </>

  )
}

export default App
