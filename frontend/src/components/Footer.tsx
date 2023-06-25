import "../styles/Footer.css";
import boxSelected from "../assets/box-selected.png";
import box from "../assets/box.png";
import profile from "../assets/profile.png";
import profileSelected from "../assets/profile-selected.png";
import activeDot from "../assets/active-dot.png"

export default function Footer(props: { handle: (param: any) => void; selectedPage: string }) {
  return (
    <footer className="Footer">
      <div className="discoverDiv" onClick={() => props.handle("discover")}>
        {props.selectedPage === "discover" ? <img className="discover" src={boxSelected}></img> : <img className="discover" src={box}></img>}
        {props.selectedPage === "discover" && <img className="activeDot" src={activeDot}></img>}
      </div>
      <div className="profileDiv" onClick={() => props.handle("profile")}>
        {props.selectedPage === "profile" ? <img className="profile" src={profileSelected}></img> : <img className="profile" src={profile}></img>}
        {props.selectedPage === "profile" && <img className="activeDot" src={activeDot}></img>}
      </div>
    </footer>
  );
}
