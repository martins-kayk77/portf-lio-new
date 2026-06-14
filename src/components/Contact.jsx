import { Mail, FileText, Linkedin, Github } from 'lucide-react'

const contactLinks = [
  {
    icon: Mail,
    label: 'E-mail',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kaikesilvamartins10@gmail.com',
  },
  {
    icon: FileText,
    label: 'Currículo',
    href: 'public/curriculoKaikeMartins.pdf',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kaikemartins',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/martins-kayk77',
  },
]

function Contact() {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          <span className="text-primary">Contato</span>
        </h2>
        <p className="text-muted-foreground mb-12">
          Estou aberto a novas oportunidades e desafios, entre em contato
        </p>

        <div className="flex flex-col gap-4">
          {contactLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Icon className="w-5 h-5" />
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
