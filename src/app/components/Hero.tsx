import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export function Hero() {
  const profileImageSrc = `${import.meta.env.BASE_URL}projects/jimy-profile.jpeg`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-red-900/20 blur-[100px]" />
      </div>

      <div className="relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        <div className="flex-1 flex flex-col items-start justify-center lg:pr-8 order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary/90 rounded-full border border-primary/25 bg-primary/5">
            <Sparkles size={14} />
            Disponível para projetos
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] mb-3 text-foreground">
            Olá, sou{' '}
            <span className="text-gradient-primary italic">Jimy Kauã</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-medium mb-5 text-muted-foreground min-h-[2.5rem]">
            <span className="typing-effect">
              Eu sou um <span className="text-foreground font-semibold">Desenvolvedor Backend</span>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
            Construo APIs robustas e soluções escaláveis com foco em qualidade, performance e boas
            práticas. Vamos conversar sobre como posso agregar ao seu time ou projeto.
          </p>

          <div className="flex items-center gap-4 mb-8">
            {[
              { href: 'https://github.com/Jimykw', label: 'Github', Icon: Github },
              {
                href: 'https://linkedin.com/in/jimy-kauã-a77975349',
                label: 'Linkedin',
                Icon: Linkedin,
              },
              { href: 'mailto:kwjimy@gmail.com', label: 'Email', Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="p-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              className="premium-btn-primary"
              onClick={() => window.open('https://wa.me/5579991212963', '_blank')}
            >
              Contratar
            </button>
            <button
              className="premium-btn-outline"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contato
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center order-1 lg:order-2">
          <div className="relative flex items-center justify-center w-72 h-72 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem]">
            <div
              className="absolute inset-0 rounded-full opacity-60"
              style={{
                background:
                  'radial-gradient(circle, rgba(225,29,72,0.35) 0%, rgba(127,29,29,0.15) 45%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            <div className="relative w-[min(100%,20rem)] h-[min(100%,20rem)] sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="profile-ring" />
              <div className="profile-ring-inner" />
              <img
                src={profileImageSrc}
                alt="Jimy Kauã - Desenvolvedor Backend"
                className="absolute inset-[6px] w-[calc(100%-12px)] h-[calc(100%-12px)] object-cover rounded-full z-10 shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
