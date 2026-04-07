import { Globe, Server, Cpu, Database } from 'lucide-react';

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
      title: 'Aplicações Web',
      description: 'Construção de sistemas modernos, responsivos e funcionais para diferentes necessidades.',
      icon: <Globe size={32} className="text-primary" />
    },
    {
      id: 2,
      title: 'APIs e Backend',
      description: 'Criação de serviços robustos para conectar aplicações e processar regras de negócio.',
      icon: <Server size={32} className="text-primary" />
    },
    {
      id: 3,
      title: 'Soluções Inteligentes',
      description: 'Uso de IA para automatizar tarefas e tornar sistemas mais eficientes.',
      icon: <Cpu size={32} className="text-primary" />
    },
    {
      id: 4,
      title: 'Gestão de Dados',
      description: 'Estruturação e consulta de dados para suportar aplicações seguras e escaláveis.',
      icon: <Database size={32} className="text-primary" />
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-center mb-16">
          Meus <span className="text-primary">Serviços</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <div className="mb-4 flex items-start">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
