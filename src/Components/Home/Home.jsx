import { useState } from "react";
import "./home.css";

export default function Home({onStart}){
    const [title, setTitle] = useState("choice");

    const handleClick = () => {
    setTitle("chance");
       setTimeout(() => onStart(), 300);
    };

    return (
        <div className="container">
            <h1>{title}</h1>
            <p>decisions made easy</p>
            <p>tap to open your decision</p>

            <button className="btn" onClick={handleClick}>start</button>
        </div>
    )
}