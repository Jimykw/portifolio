import { Github, Linkedin, Instagram } from 'lucide-react';
import profilePhoto from '../../imports/profile-photo.jpeg';

const styles = `
  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.96);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 22ch;
    }
  }

  @keyframes blink {
    0%,
    50% {
      border-right-color: rgba(239, 68, 68, 0.95);
    }
    51%,
    100% {
      border-right-color: transparent;
    }
  }

  .animate-title {
    animation: fadeInScale 0.7s ease-out;
  }

  .animate-typing {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid rgba(239, 68, 68, 0.95);
    width: 22ch;
    animation: typing 2.5s steps(30, end) 0.3s 1 both, blink 0.8s step-end 0.3s 4 forwards;
  }
`;

export function Hero() {
  return (
    <>
      <style>{styles}</style>
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold animate-title leading-tight">
                Olá, sou <span className="text-primary whitespace-nowrap">Jimy Kauã</span>
              </h1>

              <p className="text-2xl sm:text-3xl text-muted-foreground mb-8 flex items-baseline gap-2 whitespace-nowrap">
                <span>Eu sou um</span>
                <span className="text-primary font-semibold animate-typing leading-none">Desenvolvedor Backend</span>
              </p>

              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Olá, sou Jimy Kauã, um Desenvolvedor Backend. Tenho experiência em várias tecnologias e estou sempre em busca de novos desafios. Vamos conversar sobre como posso ajudar sua empresa!
              </p>

              <div className="flex items-center space-x-4 mb-8">
                <a
                  href="https://github.com/Jimykw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/jimy-kauã-a77975349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.instagram.com/j.jimy_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://wa.me/5579991212963"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg shadow-[0_10px_30px_-12px_rgba(220,38,38,0.85)] hover:from-red-500 hover:to-red-400 hover:-translate-y-0.5 transition-all font-semibold"
                >
                  Contratar
                </a>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 border border-red-500/70 text-red-400 rounded-lg bg-red-500/10 hover:bg-red-500/20 hover:border-red-400 transition-all font-semibold"
                >
                  Contato
                </button>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-red-500/30 blur-2xl scale-105" />
                <div className="relative w-96 h-96 rounded-full bg-primary flex items-center justify-center overflow-hidden border border-red-500/40 shadow-[0_0_45px_rgba(239,68,68,0.25)]">
                  <img
                    src={profilePhoto}
                    alt="Foto de Jimy Kaua"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
