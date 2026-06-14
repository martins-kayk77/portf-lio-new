import { Code, Server, Database, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: 'Front-end',
    icon: Code,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Back-end',
    icon: Server,
    skills: ['Node.js'],
  },
  {
    title: 'Banco de Dados',
    icon: Database,
    skills: ['MySQL', 'Firebase'],
  },
  {
    title: 'Ferramentas',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Vercel', 'Figma'],
  },
]

function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
          <span className="text-primary">Habilidades</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
