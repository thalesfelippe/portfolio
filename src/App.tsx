import { useEffect, useState, useRef } from 'react';
import { Element, scroller } from 'react-scroll';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { GlobalStyle } from './styles/global';

function debounce(func: (e: WheelEvent) => void, wait: number): (e: WheelEvent) => void {
  let timeout: number;
  return function (e: WheelEvent) {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(e), wait);
  };
}

function App() {
  const [currentSection, setCurrentSection] = useState<string>('about');
  const scrolling = useRef<boolean>(false);

  const sections: string[] = ['about', 'projects', 'experience', 'contact'];

  const handleScroll = (e: WheelEvent) => {
    if (scrolling.current) return;
    scrolling.current = true;

    const index = sections.indexOf(currentSection);
    if (e.deltaY > 0 && index < sections.length - 1) {
      const nextSection = sections[index + 1];
      scroller.scrollTo(nextSection, {
        smooth: true,
        duration: 500,
      });
      setCurrentSection(nextSection);
    } else if (e.deltaY < 0 && index > 0) {
      const prevSection = sections[index - 1];
      scroller.scrollTo(prevSection, {
        smooth: true,
        duration: 500,
      });
      setCurrentSection(prevSection);
    }

    setTimeout(() => {
      scrolling.current = false;
    }, 300);
  };

  const debouncedHandleScroll = debounce(handleScroll, 200);

  useEffect(() => {
    window.addEventListener('wheel', debouncedHandleScroll);

    return () => {
      window.removeEventListener('wheel', debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);

  const scrollToSection = (section: string) => {
    scrolling.current = true;
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
    });
    setCurrentSection(section);
    setTimeout(() => (scrolling.current = false), 600);
  };

  return (
    <>
      <GlobalStyle />
      <Header scrollToSection={scrollToSection} />
      <Element name="about">
        <About scrollToSection={scrollToSection} />
      </Element>
      <Element name="projects">
        <Projects scrollToSection={scrollToSection} />
      </Element>
      <Element name="experience">
        <Experience scrollToSection={scrollToSection} />
      </Element>
      <Element name="contact">
        <Contact />
        <Footer />
      </Element>
    </>
  );
}

export default App;
