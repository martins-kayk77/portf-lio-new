import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Juri Solutions',
    description:
      'Software Jurídico com CRUD. Esta aplicação foi desenvolvida com o intuito de otimizar a vida de um cliente, tendo como objetivo gerenciar processos judiciais.',
    technologies: ['Flutter', 'Firebase'],
    github: 'https://github.com/martins-kayk77/Juri-Solutions',
    demo: 'https://www.youtube.com/watch?v=evRKqC1WLQg',
    previewImage: '/project-previews/JuriLogin.jpeg',
    previewAlt: 'Preview da tela de casos ativos do Juri Solutions',
    previewClassName: 'object-contain bg-[#fbf5fb]',
  },
  {
    title: 'Livraria Cultura',
    description:
      'Site para gerenciamento de uma livraria, com login, cadastro de livros, autores e editores, além de controle de usuários e painel administrativo.',
    technologies: ['React', 'Node + Express', 'MySQL'],
    github: 'https://github.com/martins-kayk77/LivrariaCultura',
    demo: 'https://livrariacultura.vercel.app/',
    previewImage: '/project-previews/livraria-cultura.png',
    previewAlt: 'Preview da tela de login da Livraria Cultura',
    previewClassName: 'object-cover object-top',
  },
  {
    title: 'Rose Bolos - Catálogo',
    description:
      'Catálogo online de bolos com foco em UI simples e integração com WhatsApp.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/martins-kayk77/roseBolos',
    demo: 'https://martins-kayk77.github.io/roseBolos/',
    previewImage: '/project-previews/RoseBolos.PNG',
    previewAlt: 'Preview da tela inicial do catálogo Rose Bolos',
    previewClassName: 'object-contain bg-[#f8ded6]',
  },
  {
    title: 'Seu Phone SP',
    description: 'Projeto desenvolvido em React com interface responsiva para uma loja de produtos Apple, priorizando performance, usabilidade e design moderno',
    technologies: ['React'],
    github: 'https://github.com/martins-kayk77/seuphonesp',
    demo: 'https://seuphone-sp.vercel.app/',
    previewImage: '/project-previews/phone.png',
    previewAlt: 'Preview da tela inicial do Seu Phone SP',
    previewClassName: 'object-cover object-top',
  },
]

function Projects() {
  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
          <span className="text-primary">Projetos</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex h-full flex-col overflow-hidden bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <h3 className="text-xl font-semibold text-card-foreground mb-5 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <div className="relative mb-6 h-56 overflow-hidden rounded-lg sm:h-48 lg:h-40">
                <div className="absolute inset-0 overflow-hidden space-y-4 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-lg border border-primary/20 bg-background shadow-2xl shadow-primary/20 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none">
                  <img
                    src={project.previewImage}
                    alt={project.previewAlt}
                    className={`h-full w-full ${project.previewClassName}`}
                  />
                </div>
              </div>

              <div className="relative z-10 mt-auto flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver online
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
