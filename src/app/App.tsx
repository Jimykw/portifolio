import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.35]" aria-hidden>
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(100%,48rem)] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>
      <Header />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
