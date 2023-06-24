import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Spline from "@splinetool/react-spline";

import Header from './components/Header';
import Content from "./components/Content"
function App() {

  return (
    <div className='App'>
      <Header/>
      <Content></Content>
    </div>
  );
}

export default App
