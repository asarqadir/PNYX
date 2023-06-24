import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Spline from "@splinetool/react-spline";

import Header from './components/Header';
function App() {

  return (
    <div className='App'>
      <Header/>
    </div>
  );
}

export default App
