import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-black">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Texto à esquerda */}
        <div className="flex-1 flex flex-col items-start justify-center lg:pr-8">
          <>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-2 text-white text-left whitespace-nowrap">
              Olá, sou <span className="text-primary">Jimy Kauã</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-white text-left min-h-[2.5rem]">
              <span className="typing-effect">
                Eu sou um <span className="text-primary">Desenvolvedor Backend</span>
              </span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl text-left">
              Olá, sou Jimy Kauã, um Desenvolvedor Backend. Tenho experiência em várias tecnologias e estou sempre em busca de novos desafios. Vamos conversar sobre como posso ajudar sua empresa!
            </p>
            <div className="flex items-center gap-6 mb-8">
              <a
                href="https://github.com/Jimykw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Github"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/jimy-kauã-a77975349"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Linkedin"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:kwjimy@gmail.com"
                className="text-white hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="flex gap-4 mt-2">
              <button
                className="px-8 py-3 bg-gradient-to-br from-red-700 to-red-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-700"
                onClick={() => {
                  window.open('https://wa.me/5579991212963', '_blank');
                }}
              >
                Contratar
              </button>
              <button
                className="px-8 py-3 bg-transparent border border-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:bg-red-700/20 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-red-700"
                onClick={() => {
                  const contato = document.getElementById('contact');
                  if (contato) {
                    contato.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contato
              </button>
            </div>
          </>
        </div>
        {/* Foto à direita */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative flex items-center justify-center w-[28rem] h-[28rem]">
            {/* Glow Effect */}
            <div className="absolute w-full h-full rounded-full z-0"
              style={{
                background: 'radial-gradient(circle, rgba(185,28,28,0.5) 60%, transparent 100%)',
                filter: 'blur(48px)'
              }}
            ></div>
            {/* Profile Image */}
            <img
              src="/projects/jimy-profile"
              alt="Jimy Kauã - Desenvolvedor Backend"
              className="profile-image relative w-[24rem] h-[24rem] object-cover rounded-full border-4 border-zinc-900 shadow-2xl z-10"
              loading="eager"
              onError={e => {
                const target = e.target as HTMLImageElement;
                if (!target.src.endsWith('.jpeg')) target.src = '/projects/jimy-profile.jpeg';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
