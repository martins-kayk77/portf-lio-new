const journeyItems = [
  {
    year: '2024',
    title: 'Início do curso Técnico',
    description:
      'Iniciei o curso técnico em Desenvolvimento de Sistemas na ETEC de Embu, marcando meu primeiro contato com a programação.',
    side: 'left',
  },
  {
    year: '2025',
    title: 'Jovem Aprendiz',
    description:
      'Iniciei minha trajetória profissional como Jovem Aprendiz, com contrato vinculado com a ETEC.',
    side: 'right',
  },
  {
    year: '2025',
    title: 'Desenvolvimento do TCC',
    description:
      'Durante o último ano do curso técnico, desenvolvi meu Trabalho de Conclusão de Curso com foco na otimização de processos jurídicos. Foi meu primeiro projeto completo utilizando operações CRUD, aplicando conceitos de desenvolvimento e estruturação de sistemas.',
    side: 'left',
  },
  {
    year: '2025',
    title: 'Fim de um ciclo',
    description:
      'Em dezembro de 2025, conclui o contrato de Jovem Aprendiz e me formei no curso técnico em Desenvolvimento de Sistemas.',
    side: 'right',
  },
  {
    year: '2026',
    title: 'Efetivado',
    description:
      'Após o término do contrato de aprendizagem, fui efetivado na mesma empresa.',
    side: 'left',
  },
  {
    year: '2026',
    title: 'Início da Faculdade',
    description:
      'Em março de 2026, iniciei a graduação em Análise e Desenvolvimento de Sistemas.',
    side: 'right',
  },
]

function Journey() {
  return (
    <section id="jornada" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
          Minha <span className="text-primary">Jornada</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  item.side === 'right' ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 ring-4 ring-background z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    item.side === 'right' ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'
                  }`}
                >
                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <span className="text-primary font-bold text-lg">{item.year}</span>
                    <h3 className="text-lg font-semibold text-card-foreground mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
