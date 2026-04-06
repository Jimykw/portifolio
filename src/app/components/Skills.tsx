interface SkillGroup {
  id: number;
  title: string;
  skills: string[];
}

export function Skills() {
  const skillGroups: SkillGroup[] = [
    {
      id: 1,
      title: 'Backend',
      skills: ['C#', 'Node.js', 'Python', 'PostgreSQL', 'REST APIs']
    },
    {
      id: 2,
      title: 'Frontend',
      skills: ['TypeScript', 'JavaScript', 'HTML/CSS', 'Next.js']
    },
    {
      id: 3,
      title: 'Ferramentas',
      skills: ['Postman', 'VS Code', 'Figma', 'Git', 'GitHub', 'Windows', 'Linux', 'PowerShell', 'Photoshop', 'Excel']
    },
    {
      id: 4,
      title: 'Outros',
      skills: ['Resolucao de Problemas', 'Organizacao de Arquivos', 'Proatividade']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-center mb-16">
          Minhas <span className="text-primary">Habilidades</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-red-500/15 text-red-200 border border-red-500/35 hover:bg-red-500/25 hover:border-red-400/70 transition-colors text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
