import React from "react";

export default function PacketScreen({ id, tier }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#111",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem"
      }}
    >
      <div>Packet #{id}</div>
      <div>Tier {tier}</div>
      <div style={{ marginTop: "20px", fontSize: "1.2rem" }}>
        (3D packet placeholder)
      </div>
    </div>
  );
}
