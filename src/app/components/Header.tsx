import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'services', 'skills', 'contact'];

    const handleScroll = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null);

      if (sections.length === 0) {
        return;
      }

      // Linha de gatilho antecipada: quando a próxima seção começa a aparecer,
      // o item dela já acende no menu.
      const triggerLine = window.scrollY + window.innerHeight * 0.9;

      let nextActive = sections[0].id;
      for (const section of sections) {
        if (section.offsetTop <= triggerLine) {
          nextActive = section.id;
        } else {
          break;
        }
      }

      setActiveSection(nextActive);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 relative">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`${activeSection === 'home' ? 'text-primary' : ''} hover:text-primary transition-colors`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`${activeSection === 'about' ? 'text-primary' : ''} hover:text-primary transition-colors`}
            >
              Formação
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`${activeSection === 'projects' ? 'text-primary' : ''} hover:text-primary transition-colors`}
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`${activeSection === 'services' ? 'text-primary' : ''} hover:text-primary transition-colors`}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`${activeSection === 'skills' ? 'text-primary' : ''} hover:text-primary transition-colors`}
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`${activeSection === 'contact' ? 'text-primary' : ''} hover:text-primary transition-colors`}
            >
              Contato
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute right-4 md:hidden p-2 rounded-lg hover:bg-accent"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <button
              onClick={() => scrollToSection('home')}
              className={`block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors ${activeSection === 'home' ? 'text-primary bg-primary/10' : ''}`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors ${activeSection === 'about' ? 'text-primary bg-primary/10' : ''}`}
            >
              Formação
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors ${activeSection === 'projects' ? 'text-primary bg-primary/10' : ''}`}
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors ${activeSection === 'services' ? 'text-primary bg-primary/10' : ''}`}
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors ${activeSection === 'skills' ? 'text-primary bg-primary/10' : ''}`}
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`block w-full text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors ${activeSection === 'contact' ? 'text-primary bg-primary/10' : ''}`}
            >
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
