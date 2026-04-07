export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-center mb-16">
          Minha <span className="text-primary">Formação</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Educação */}
          <div className="p-8 rounded-lg border border-border bg-card">
            <h3 className="text-2xl text-primary mb-4">Análise e Desenvolvimento de Sistemas</h3>
            <p className="text-lg font-semibold mb-4">Universidade Tiradentes (UNIT-SE)</p>
            <div className="mb-6">
              <span className="px-4 py-2 border border-primary text-primary rounded-full text-sm font-medium">
                Em andamento
              </span>
            </div>
            <p className="text-muted-foreground">
              Estudo de programação, algoritmos, estruturas de dados, sistemas operacionais e desenvolvimento de software.
            </p>
          </div>

          {/* Áreas de Interesse */}
          <div className="p-8 rounded-lg border border-border bg-card">
            <h3 className="text-2xl text-primary mb-4">Áreas de Interesse</h3>
            <p className="text-lg font-semibold mb-6">Desenvolvimento Web | Backend | Inteligência Artificial | Banco de Dados</p>
            <p className="text-muted-foreground">
              Foco em tecnologia, aprendizado e desenvolvimento de soluções.
            </p>
          </div>

          {/* Certificações */}
          <div className="p-8 rounded-lg border border-border bg-card">
            <h3 className="text-2xl text-primary mb-6">Certificações</h3>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                <span className="font-semibold text-foreground">Cisco Cyber Security</span>
              </li>
              <li className="text-muted-foreground">
                <span className="font-semibold text-foreground">AWS Certified Security</span>
              </li>
              <li className="text-muted-foreground">
                <span className="font-semibold text-foreground">Designer Gráfico</span>
              </li>
              <li className="text-muted-foreground">
                <span className="font-semibold text-foreground">Tec. Informática</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
