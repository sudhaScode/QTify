import './App.css';
import NavBar from './components/navbar/NavBar';
import Hero from "./components/hero/Hero"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/"  />
      </Routes>
      <div className="App">
        <NavBar/>
        <Hero/>
      </div>
    </BrowserRouter>
  );
}

export default App;
