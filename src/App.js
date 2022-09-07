import './App.css';
import React, { useState, useEffect } from 'react';
import RingLoader from "react-spinners/RingLoader";
import Particle from './Components/Particle';
import { NavBar } from './Components/NavBar';
import { Intro } from './Components/Intro';
import { About } from './Components/About';
import { Experience } from './Components/Experience';
import { Work } from './Components/Work';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, []);

  return (
    <div className="App">
      {
        loading ? (
          <div className='Loader'>
            <Particle />
            <RingLoader 
            color="#36d7b7"
            loading={loading}
            />
          </div>

        ) : (
          <div className="main">
            <Particle />
            <NavBar />
            <Intro />
            <About />
            <Experience />
            <Work />
            <Contact />
            <Footer />
          </div>
        )
      }
    </div>
  );
}

export default App;
