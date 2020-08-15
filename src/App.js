import React, {useState} from 'react';
import './App.css';
import ThemeContext from "../src/themeSwitcher/Context/ThemeContext";
import Header from "./themeSwitcher/Components/Header";
import HeroSection from "./themeSwitcher/Components/HeroSec";



const App = () => {
  const themeHook = useState("light")

  return(
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
