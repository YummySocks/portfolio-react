import React from 'react';
import Navbar from './components/nav/Navbar';
import MainContainer from './components/main/Main';
import AboutContainer from './components/about/About';
import ContactContainer from './components/conactinfo/Contact';
import "./app.scss"

function App() {
  return (
    <div className="app">
      < Navbar />
      
      <div className="sections">
      < AboutContainer />
      < MainContainer />
      < ContactContainer />
    </div>
    </div>
  );
}

export default App;
