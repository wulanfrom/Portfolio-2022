// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Navigation from './components/Navbar/Navigation'
import Work from './components/Work/Work'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
        <Navigation />
        <Work/>
        <Footer />
    </div>
  );
}

export default App;
