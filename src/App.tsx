import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact'; 
import { GlobalStyle } from './styles/global.ts';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
