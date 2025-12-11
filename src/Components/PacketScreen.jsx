// import {useState} from "react";
// import './PacketScreen.css';
// import Packet from "./Models/Packet";
// import Card from "./Models/Card";

// export default function PacketScreen({tier, isUnlocked, PacketOpened}){
//   const [tapCount, setTapCount] = useState(0);
//   const [showPacket, setShowPacket] = useState(true);
//   const [thump, setThump] = useState(false);

//   const maxTaps = 15;

//   const handleTap = () =>{
//     if (!isUnlocked || !showPacket) return;

//     if(tapCount < maxTaps){
//       setTapCount(prev => prev + 1);
//     }

//     const card = { name: `Tier ${tier} Card`, rarity: "rare" };
//         setRevealedCard(card);

//     if (tapCount + 1 >= maxTaps) {
//         setThump(true);
//         setTimeout(() => {
//           setShowPacket(false);
//         }, 50); //ms delay
//       }
//   };
// }