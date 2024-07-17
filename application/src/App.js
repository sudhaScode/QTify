import './App.css';
import { useContext } from 'react';
import NavBar from './components/navbar/NavBar';
import Hero from "./components/hero/Hero"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './theme/Theme';
import {darkTheme, lightTheme} from './theme/Theme';
import Section from './components/Sections/Section';

export const config ={
  endPoint:"https://qtify-backend-labs.crio.do"
}

function App() {
  const {theme} = useContext(ThemeContext)

  const themeColors = theme === "dark"? darkTheme: lightTheme
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/"  />
      </Routes>
      <div className="App" style={{backgroundColor: themeColors.backgroundColor, color: themeColors.textColor}}>
        <NavBar/>
        <Hero/>
        <Section header={"Top Albums"} id="section1"/>
        <Section header={"New Albums"} id="section2"/>
        <Section header={"Songs"} hasTabFilter id="section3"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
