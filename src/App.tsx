import { Navbar } from './components/navigation/Navbar';
import { Hero } from './components/sections/Hero';
import { TechTicker } from './components/sections/TechTicker';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TechTicker />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
