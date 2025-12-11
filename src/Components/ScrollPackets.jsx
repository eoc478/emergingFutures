// import React, { useState, useEffect, useRef } from "react";
// import PacketScreen from "./PacketScreen";
// import Card from "./Models/Card";
// import Packet from "./Models/Packet";

// export default function ScrollPackets() {
// //storing list of packets
//   const [packets, setPackets] = useState([
//     { id: 1, tier: 0 }
//   ]);

//   const containerRef = useRef(null);

//   //tier based on amount of scrolls
//   const calculateTier = (index) => {
//     if (index < 10) return 0;
//     if (index < 20) return 1;
//     if (index < 30) return 2;
//     if (index < 40) return 3;
//     if (index < 50) return 4;
//     return Math.floor(index / 10);
//   };

//   // --- Add new packet when user scrolls near the top ---
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           // If the second-to-last packet becomes visible → add a new one
//           if (entry.isIntersecting) {
//             setPackets((prev) => {
//               const newId = prev.length + 1;
//               return [
//                 ...prev,
//                 {
//                   id: newId,
//                   tier: calculateTier(newId - 1)
//                 }
//               ];
//             });
//           }
//         });
//       },
//       {
//         root: containerRef.current,
//         threshold: 0.5,
//       }
//     );

//     // Observe the last packet
//     const lastPacket = document.getElementById(`packet-${packets.length - 1}`);
//     if (lastPacket) observer.observe(lastPacket);

//     return () => observer.disconnect();
//   }, [packets]);

//   return (
//     <div
//       ref={containerRef}
//       style={{
//         height: "100vh",
//         overflowY: "scroll",
//         scrollSnapType: "y mandatory",
//       }}
//     >
//       {packets.map((packet, index) => (
//         <div
//           key={packet.id}
//           id={`packet-${index}`}
//           style={{
//             height: "100vh",
//             scrollSnapAlign: "start",
//             borderBottom: "1px solid #222",
//           }}
//         >
//          {/* <PacketScreen id={packet.id} tier={packet.tier} /> */}
//          <Card tier={packet.tier} />
//         </div>
//       ))}
//     </div>
//   );
// }
