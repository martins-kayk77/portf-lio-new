import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Bem-vindo ao meu portfólio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              <span className="text-primary">Kaike</span> Martins
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6">
              Desenvolvedor Web
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Técnico em Desenvolvimento de Sistemas e estudante de ADS, com foco em
              desenvolvimento web.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <a
                href="#sobre"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Sobre mim
              </a>
              <a
                href="#habilidades"
                className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                Habilidades
              </a>
              <a
                href="#projetos"
                className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                Ver Projetos
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/martins-kayk77"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="https://linkedin.com/in/kaikemartins"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kaikesilvamartins10@gmail.com"
                className="p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-110" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden ring-4 ring-primary/50 shadow-2xl">
                <img
                  src="/Kaike.png"
                  alt="Kaike Martins"
                  className="w-full h-full object-cover object-[center_25%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </a>
    </section>
  )
}

export default Hero
