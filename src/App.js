import { useState } from 'react';
import Navbar from './components/nav/Navbar';
import MainContainer from './components/main/Main';
import AboutContainer from './components/about/About';
import ContactContainer from './components/conactinfo/Contact';
import "./app.scss"
import Menu from './components/menu/Menu';

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      < Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      < Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />
      <div className="sections">
      < AboutContainer />
      < MainContainer />
      < ContactContainer />
    </div>
    </div>
  );
}

export default App;
