import './App.css';
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
  return (
    <div className="App">
      <Particle />
      <NavBar />
      <Intro />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
