import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/30 selection:text-foreground">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      
      <main className="relative">
        <div className="sticky top-0 z-0 h-screen">
            <Hero />
        </div>
        
        <div className="relative z-10 bg-background rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
