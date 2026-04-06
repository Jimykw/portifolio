import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-muted-foreground" />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4">
          Olá, eu sou <span className="text-primary">Jimy Kauã</span>
        </h1>

        <p className="text-lg sm:text-2xl text-muted-foreground mb-8 break-words max-w-[90vw] whitespace-normal mx-auto">
          Desenvolvedor Backend
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://github.com/Jimykw"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/jimy-kauã-a77975349"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:kwjimy@gmail.com"
            className="p-3 rounded-lg bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          Ver Projetos
        </button>
      </div>
    </section>
  );
}
