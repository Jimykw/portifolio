import { useState } from 'react';
import { ExternalLink, Bell, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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

    const isGitHubPagesProject = window.location.pathname.startsWith('/portifolio/');
    const basePath = isGitHubPagesProject ? '/portifolio/' : '/';

    return `${basePath}${assetPath.replace(/^\//, '')}`;
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'GymFinanças Pro',
      description:
        'Sistema full stack de gestão financeira para academias com dashboard em tempo real, controle de inadimplência, cobrança via Pix e relatórios gerenciais. Solução pronta para produção, com suporte a múltiplas filiais e automações financeiras.',
      technologies: [
        'React 18',
        'TypeScript',
        'TailwindCSS',
        'Recharts',
        'FastAPI',
        'SQLAlchemy',
        'Supabase',
      ],
      image: '/projects/gymfinancas-dashboard.png',
      link: 'https://jimykw.github.io/GymFinancasPro/',
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

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex justify-center">
        <div className="w-full">
          <h2 className="text-3xl sm:text-4xl text-center mb-16">
            Meus <span className="text-primary">Projetos</span>
          </h2>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group w-full max-w-sm rounded-lg border border-border bg-card overflow-hidden flex flex-col transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-1"
                >
                  {project.image && !project.isComingSoon && (
                    <div className="w-full h-48 overflow-hidden bg-muted relative">
                      <ImageWithFallback
                        src={resolveAssetPath(project.image)}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                    </div>
                  )}

                  {project.isComingSoon && (
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center transition-all duration-300 group-hover:from-primary/30 group-hover:to-primary/20">
                      <div className="text-center">
                        <div className="text-5xl text-primary mb-2 transition-transform duration-300 group-hover:scale-110">★</div>
                        <p className="text-primary font-semibold">Em Breve</p>
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow transition-colors duration-300 group-hover:text-foreground/80">
                      {project.description}
                    </p>

                    {!!project.technologies?.length && (
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className={`px-3 py-1 rounded-full text-xs border ${
                              technology.startsWith('Linguagem:')
                                ? 'border-red-500/60 bg-red-500/10 text-red-300'
                                : 'border-border bg-muted/70 text-foreground/80'
                            } inline-flex max-w-full items-center justify-center whitespace-normal break-words text-center leading-tight`}
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.isComingSoon ? (
                      <button
                        onClick={() => setIsNotifyModalOpen(true)}
                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-red-500 text-red-400 bg-transparent font-semibold w-full transition-all duration-300 hover:bg-red-500/20 hover:border-red-400 hover:text-red-300"
                      >
                        <Bell size={18} />
                        <span>Receber notificação</span>
                      </button>
                    ) : (
                      <a
                        href={project.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary text-sm font-semibold transition-all duration-300 hover:gap-3 hover:translate-x-1"
                      >
                        <ExternalLink size={16} />
                        <span>Ver projeto</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isNotifyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4">
          <div className="relative w-full max-w-md rounded-2xl border border-primary bg-card/95 backdrop-blur-sm p-6 shadow-2xl">
            <button
              onClick={closeNotifyModal}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <h3 className="text-3xl font-semibold mb-2">Receber notificações</h3>
            <p className="text-muted-foreground mb-6">
              Deixe seu email para ser notificado quando novos projetos forem lançados.
            </p>

            <form onSubmit={handleNotifySubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Seu email"
                value={notifyEmail}
                onChange={(event) => setNotifyEmail(event.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-accent/40 border border-border hover:border-primary transition-colors outline-none focus:border-primary"
                required
              />

              <button
                type="submit"
                className="w-full px-4 py-3 rounded-full border border-red-500 text-red-400 bg-transparent hover:bg-red-500/10 hover:border-red-400 transition-all font-semibold"
              >
                Inscrever
              </button>
            </form>

            {notifySuccess && <p className="mt-4 text-primary font-medium">Email cadastrado com sucesso!</p>}
          </div>
        </div>
      )}
    </section>
  );
}
