import { useState } from 'react';
import Navbar from './components/nav/Navbar';
import AboutContainer from './components/about/About';
import ContactContainer from './components/conactinfo/Contact';
import Menu from './components/menu/Menu';
import Portfolio from './components/portfolio/portfolio';

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      < Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      < Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />
      <div className="sections">
      < AboutContainer />
      < Portfolio />
      < ContactContainer />
    </div>
    </div>
  );
}

export default App;
