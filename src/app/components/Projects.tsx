import { useState } from 'react';
import { ExternalLink, Bell, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionHeading } from './SectionHeading';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies?: string[];
  image?: string;
  link?: string;
  isComingSoon?: boolean;
}

export function Projects() {
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySuccess, setNotifySuccess] = useState(false);

  const resolveAssetPath = (assetPath: string) => {
    if (/^(https?:)?\/\//.test(assetPath)) {
      return assetPath;
    }
    return `${import.meta.env.BASE_URL}${assetPath.replace(/^\//, '')}`;
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'Barbearia Faraó',
      description:
        'Plataforma full stack para gestão de barbearia com Python (Django/DRF) e React + TypeScript: agendamento online, autenticação JWT, pagamentos via Mercado Pago, notificações por WhatsApp e e-mail, dashboards por perfil e gestão de pacotes com consumo e estorno automático de sessões.',
      technologies: [
        'Python',
        'Django',
        'JWT',
        'React',
        'TypeScript',
        'PostgreSQL',
        'WhatsApp API',
      ],
      image: 'projects/barbearia-farao.png',
      link: 'https://barber-2-0nbp.onrender.com/login',
    },
    {
      id: 2,
      title: 'Novo Projeto em Breve',
      description:
        'Estou sempre desenvolvendo novos projetos e ampliando meu portfólio. Fique de olho para ver as próximas novidades!',
      isComingSoon: true,
    },
  ];

  const handleNotifySubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!notifyEmail.trim()) {
      return;
    }

    setNotifySuccess(true);
    setNotifyEmail('');
  };

  const closeNotifyModal = () => {
    setIsNotifyModalOpen(false);
    setNotifyEmail('');
    setNotifySuccess(false);
  };

  const renderProjectCard = (project: Project) => {
    const cardContent = (
      <>
        {project.image && !project.isComingSoon && (
          <div className="w-full h-52 overflow-hidden bg-muted relative">
            <ImageWithFallback
              src={resolveAssetPath(project.image)}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
          </div>
        )}

        {project.isComingSoon && (
          <div className="w-full h-52 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent flex items-center justify-center transition-all duration-500 group-hover:from-primary/25">
            <div className="text-center">
              <div className="text-5xl text-primary mb-2 transition-transform duration-300 group-hover:scale-110">
                ★
              </div>
              <p className="text-primary font-semibold">Em Breve</p>
            </div>
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-display text-xl mb-3 transition-colors duration-300 group-hover:text-primary">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
            {project.description}
          </p>

          {!!project.technologies?.length && (
            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="premium-tag text-xs">
                  {technology}
                </span>
              ))}
            </div>
          )}

          {project.isComingSoon ? (
            <button
              type="button"
              onClick={() => setIsNotifyModalOpen(true)}
              className="premium-btn-outline w-full flex items-center justify-center gap-2"
            >
              <Bell size={18} />
              <span>Receber notificação</span>
            </button>
          ) : (
            <span className="flex items-center gap-2 text-primary text-sm font-semibold transition-all duration-300 group-hover:gap-3">
              <ExternalLink size={16} />
              <span>Ver projeto</span>
            </span>
          )}
        </div>
      </>
    );

    if (project.isComingSoon) {
      return (
        <div
          key={project.id}
          className="group premium-card w-full max-w-md overflow-hidden flex flex-col"
        >
          {cardContent}
        </div>
      );
    }

    return (
      <a
        key={project.id}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group premium-card w-full max-w-md overflow-hidden flex flex-col no-underline text-inherit cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`Abrir projeto ${project.title}`}
      >
        {cardContent}
      </a>
    );
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Portfólio"
          title="Meus"
          highlight="Projetos"
          description="Projetos reais que demonstram minha capacidade de entregar soluções completas."
        />

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => renderProjectCard(project))}
          </div>
        </div>
      </div>

      {isNotifyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4">
          <div className="relative w-full max-w-md premium-card p-6 lg:p-8 border-primary/30">
            <button
              type="button"
              onClick={closeNotifyModal}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <h3 className="font-display text-2xl mb-2">Receber notificações</h3>
            <p className="text-muted-foreground mb-6">
              Deixe seu email para ser notificado quando novos projetos forem lançados.
            </p>

            <form onSubmit={handleNotifySubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Seu email"
                value={notifyEmail}
                onChange={(event) => setNotifyEmail(event.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-primary/40 transition-colors outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30"
                required
              />

              <button type="submit" className="premium-btn-outline w-full">
                Inscrever
              </button>
            </form>

            {notifySuccess && (
              <p className="mt-4 text-primary font-medium">Email cadastrado com sucesso!</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
