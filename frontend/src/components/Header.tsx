import "../styles/Header.css"
import { ConnectButton } from "@rainbow-me/rainbowkit";
import logo from "../assets/logo.png"
export default function Header() {
    return (
      <div className="Header">
        <img className="Header-logo" src={logo} alt="PNYX Logo"></img>
        <ConnectButton/>
      </div>
    );
}