import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, Monitor, Globe, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Laboratório Vida - TCC",
    description:
      "Sistema completo para clínica de análises clínicas desenvolvido como TCC. O projeto inclui agendamento de exames online com seleção de data/hora, sistema de login com níveis de acesso (paciente, funcionário, admin), histórico completo de solicitações, painel administrativo com gerenciamento de exames e pacientes, além de relatórios financeiros detalhados. Desenvolvido seguindo metodologia Scrum com sprints de 2 semanas.",
    tags: ["Spring Boot", "Java", "PostgreSQL", "Bootstrap", "REST API", "Thymeleaf"],
    github: "https://github.com/Bruno-FV/TCC",
    live: null,
    icon: Globe,
    highlight: "Projeto de Conclusão de Curso",
    duration: "6 meses de desenvolvimento",
  },
  {
    title: "Sistema de Gestão - Segurança Vip",
    description:
      "Aplicação desktop robusta para gestão empresarial completa. Possui sincronização entre API local e nuvem para funcionamento offline, CRUD completo de clientes com validações, módulo de controle de inadimplentes com alertas automáticos, gestão de despesas por categoria, e relatórios de faturamento segmentados por região. Autenticação segura via JWT e interface moderna com Electron.",
    tags: ["Electron.js", "Spring Boot", "JWT", "PostgreSQL", "Node.js", "REST API"],
    github: null,
    live: null,
    icon: Monitor,
    highlight: "Aplicação Desktop Empresarial",
    duration: "6 meses • Em produção",
  },
  {
    title: "Site Segurança Vip",
    description:
      "Landing page institucional de alta conversão desenvolvida em tempo recorde. Design moderno e totalmente responsivo, formulário de pré-cadastro integrado diretamente ao WhatsApp da empresa, geração dinâmica de QRCode para contato rápido, e animações suaves de scroll com AOS.js. Otimizado para SEO e performance.",
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "QRCode.js", "AOS.js"],
    github: null,
    live: "https://segurancavipcoelhoneto.com.br/",
    icon: Globe,
    highlight: "Site Institucional",
    duration: "1 dia • Online",
  },
  {
    title: "TO Conecta",
    description:
      "Plataforma completa para conectar profissionais de Terapia Ocupacional com pacientes. O sistema captura leads através de formulário inteligente e envia automaticamente para WhatsApp via bot integrado. Backend em Node.js hospedado no Render com sistema de filas para garantir entrega das mensagens. Interface moderna com animações e design responsivo.",
    tags: ["Node.js", "Express", "WhatsApp Web JS", "Bootstrap 5", "AOS.js", "Render"],
    github: null,
    live: null,
    icon: Smartphone,
    highlight: "Automação WhatsApp",
    duration: "Projeto Freelance",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative section-glow">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Projetos reais desenvolvidos com foco em solução de problemas e impacto no negócio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {project.highlight}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">
                          {project.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {!project.github && !project.live && (
                        <span className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                          Privado
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground border border-border/50 hover:border-primary/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Bruno-FV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Ver Mais no GitHub
            <Github className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
