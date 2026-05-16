import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Trajetória"
          title="Minha"
          highlight="Formação"
          description="Formação acadêmica, áreas de atuação e certificações que sustentam minha prática como desenvolvedor."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="premium-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80 mb-3">
              Graduação
            </p>
            <h3 className="font-display text-2xl text-foreground mb-3 leading-snug">
              Análise e Desenvolvimento de Sistemas
            </h3>
            <p className="text-base font-medium text-foreground/90 mb-5">
              Universidade Tiradentes (UNIT-SE)
            </p>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-wider border border-primary/40 text-primary rounded-full bg-primary/5">
              Em andamento
            </span>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Estudo de programação, algoritmos, estruturas de dados, sistemas operacionais e
              desenvolvimento de software.
            </p>
          </div>

          <div className="premium-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80 mb-3">
              Foco
            </p>
            <h3 className="font-display text-2xl text-foreground mb-4">Áreas de Interesse</h3>
            <p className="text-base font-medium text-foreground/90 mb-6 leading-relaxed">
              Desenvolvimento Web · Backend · Inteligência Artificial
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Foco em tecnologia, aprendizado contínuo e desenvolvimento de soluções com impacto
              real.
            </p>
          </div>

          <div className="premium-card p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80 mb-3">
              Credenciais
            </p>
            <h3 className="font-display text-2xl text-foreground mb-6">Certificações</h3>
            <ul className="space-y-4">
              {[
                'Cisco Cyber Security',
                'AWS Certified Security',
                'Designer Gráfico',
                'Tec. Informática',
              ].map((cert) => (
                <li
                  key={cert}
                  className="flex items-center gap-3 text-sm text-muted-foreground group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform" />
                  <span className="font-medium text-foreground/90">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
