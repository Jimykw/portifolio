import { SectionHeading } from './SectionHeading';

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
      skills: [
        'Java',
        'Spring Boot',
        'C#',
        'Python',
        'Django',
        'PostgreSQL',
        'SQLite',
        'REST APIs',
        'JWT',
      ],
    },
    {
      id: 2,
      title: 'Ferramentas',
      skills: ['Git', 'GitHub', 'VS Code', 'Cursor', 'React'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Stack"
          title="Minhas"
          highlight="Habilidades"
          description="Tecnologias e ferramentas que utilizo no dia a dia para entregar soluções sólidas."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {skillGroups.map((group) => (
            <div key={group.id} className="premium-card p-6 lg:p-8">
              <h3 className="font-display text-xl text-foreground mb-5">{group.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="premium-tag">
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
