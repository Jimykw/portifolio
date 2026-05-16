import { Server, Database, Shield } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: 'APIs RESTful',
      description:
        'Desenvolvimento de APIs escaláveis com Java, Spring Boot, C#, Python e Django, seguindo boas práticas REST.',
      icon: <Server size={28} className="text-primary" strokeWidth={1.5} />,
    },
    {
      id: 2,
      title: 'Banco de Dados',
      description:
        'Modelagem, consultas e integração com PostgreSQL e SQLite para suportar aplicações consistentes e performáticas.',
      icon: <Database size={28} className="text-primary" strokeWidth={1.5} />,
    },
    {
      id: 3,
      title: 'Autenticação e Segurança',
      description:
        'Implementação de JWT, controle de acesso e endpoints seguros para proteger dados e usuários.',
      icon: <Shield size={28} className="text-primary" strokeWidth={1.5} />,
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Especialidade"
          title="Serviços"
          highlight="Backend"
          description="APIs, persistência de dados e segurança para construir a base sólida das suas aplicações."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div key={service.id} className="premium-card p-6 lg:p-7 group">
              <div className="mb-5 p-3 w-fit rounded-xl border border-white/[0.06] bg-white/[0.03] group-hover:border-primary/25 group-hover:bg-primary/5 transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="font-display text-lg text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
