import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'about', label: 'Formação' },
  { id: 'projects', label: 'Projetos' },
  { id: 'services', label: 'Serviços' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'contact', label: 'Contato' },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);

    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null);

      if (sections.length === 0) {
        return;
      }

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-background/75 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[4.25rem]">
          <button
            onClick={() => scrollToSection('home')}
            className="font-display text-xl tracking-tight text-foreground hover:text-primary transition-colors"
          >
            JK<span className="text-primary">.</span>
          </button>

          <div className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/[0.06] bg-white/[0.03] backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-foreground bg-white/[0.08] shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2.5 rounded-xl border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-5 pt-2 space-y-1 border-t border-white/[0.06] mt-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10 border border-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
