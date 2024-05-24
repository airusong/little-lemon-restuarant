import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Menupage from "./components/Menupage";
import Reservation from "./components/Reservation";
import LandingSection from './components/LandingSection';
import HighlightsSection from './components/HighlightsSection';
import CustomerSection from './components/CustomerSection';
function App() {
  return (
    
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/reserve" element={<Reservation/>} />
          <Route path="/menu" element={<Menupage/>} />
        </Routes>
      </div>
    
  )
}

export default App;
