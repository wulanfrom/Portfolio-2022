// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Routes, Route, Link } from "react-router-dom";

import Navigation from './components/Navbar/Navigation'
import Work from './components/Work/Work'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

// Projects
import CeeyaSearch from './components/Projects/CeeyaSearch/CeeyaSearch';
import SomeWeather from './components/Projects/SomeWeather/SomeWeather';

function App() {
  return (
    <div className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="ceeya" element={<CeeyaSearch />} />
          <Route path="someWeather" element={<SomeWeather />} />
        </Routes>
    </div>
  );
}

export default App;
