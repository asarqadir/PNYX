import "../styles/Discover.css";
import cube from "../assets/cube.png";
import { useState } from "react";
export default function Discover() {
  const [song, setSong] = useState("");
  return (
    <div className="Discover">
      <img className="cube" src={cube}></img>
      <audio controls src={song}></audio>
      <div></div>
    </div>
  );
}
