import "../styles/Footer.css";
import boxSelected from "../assets/box-selected.png";
import box from "../assets/box.png";
import profile from "../assets/profile.png";
import profileSelected from "../assets/profile-selected.png";

export default function Footer(props: { handle: (param: any) => void; selectedPage: string }) {
  return (
    <footer className="Footer">
      <div className="discoverDiv" onClick={() => props.handle("discover")}>{props.selectedPage === "discover" ? <img src={boxSelected}></img> : <img src={box}></img>}</div>
      <div className="profileDiv" onClick={() => props.handle("profile")}> {props.selectedPage === "profile" ? <img src={profileSelected}></img> : <img src={profile}></img>}</div>
    </footer>
  );
}
