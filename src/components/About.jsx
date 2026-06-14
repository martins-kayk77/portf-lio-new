const softSkills = [
  'Organização',
  'Comunicação',
  'Resolução de Problemas',
  'Colaboração',
]

function About() {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
          Sobre <span className="text-primary">mim</span>
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Meu nome é Kaike, tenho 20 anos e moro na zona sul de São Paulo. Sou
            Técnico em Desenvolvimento de Sistemas pela ETEC e estudante de Análise
            e Desenvolvimento de Sistemas na UniFECAF.
          </p>
          <p>
            Estou em busca de oportunidades de trabalho em desenvolvimento de
            software, onde possa aplicar os conhecimentos técnicos, evoluir
            profissionalmente e contribuir com soluções eficientes.
          </p>
          <p>
            Tenho experiência com React, JavaScript e Node.js, desenvolvendo
            aplicações web com integração entre front-end e back-end. Já
            desenvolvi projetos como um catálogo online para confeitaria, e uma
            aplicação mobile onde fiz em grupo com funcionalidades de CRUD e
            integração com banco de dados, onde fui encarregado do front-end.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
