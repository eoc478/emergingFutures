import React from "react";
import "./home.css";

export default function Home({onStart}){
    return (
        <div className="container">
            <h1>choice</h1>
            <p>blah blah blah</p>

            <button className="btn" onClick={onStart}>start</button>
        </div>
    )
}