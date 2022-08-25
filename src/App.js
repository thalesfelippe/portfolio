import './App.css';
import Particle from './Components/Particle';
import { NavBar } from './Components/NavBar';
import { Intro } from './Components/Intro';
import { About } from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Particle></Particle>
      <NavBar />
      <Intro />
      <About />
    </div>
  );
}

export default App;
