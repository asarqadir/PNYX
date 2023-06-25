import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Spline from "@splinetool/react-spline";
import Footer from "./components/Footer"

import Header from './components/Header';
import Profile from "./components/Profile"
import Discover from "./components/Discover"


function App() {
  const [page, setPage] = useState("discover");

  function handleChange(change: string) {
    setPage(change)
  }

  return (
    <div className="App">
      <Header />
      {page === "discover" ? <Discover/> : <Profile/>}
      <Footer handle={handleChange} selectedPage={page}/>
    </div>
  );
}

export default App
