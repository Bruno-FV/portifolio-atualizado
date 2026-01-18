import { motion } from "framer-motion";
import { Code2, Database, Globe, Palette } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Palette,
    items: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Tailwind CSS", "AOS.js"],
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Java", "Spring Boot", "Node.js", "Express", "PostgreSQL", "REST API"],
  },
  {
    category: "Desktop & Integrações",
    icon: Globe,
    items: ["Electron.js", "JWT", "WhatsApp Web JS", "QRCode.js"],
  },
  {
    category: "Ferramentas",
    icon: Code2,
    items: ["Git", "GitHub", "VS Code", "Postman", "Render", "Netlify"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative section-glow">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Desenvolvedor apaixonado por criar soluções digitais inovadoras e escaláveis
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Desenvolvedor Full Stack
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Desenvolvedor Full Stack com experiência em criar soluções completas — 
                  de sistemas web robustos com <span className="text-primary font-medium">Java/Spring Boot</span> a 
                  aplicações desktop com <span className="text-primary font-medium">Electron.js</span> e 
                  integrações automatizadas com <span className="text-primary font-medium">WhatsApp Web JS</span>.
                </p>
                <p>
                  Já desenvolvi desde sistemas de gestão empresarial com controle financeiro 
                  e relatórios, até sites institucionais responsivos e plataformas com 
                  integração de chatbots. Tenho facilidade em trabalhar com metodologias ágeis 
                  como <span className="text-primary font-medium">Scrum</span> e foco em entregar valor real ao negócio.
                </p>
                <p>
                  Meu diferencial é a capacidade de entender o problema do cliente e 
                  transformar em soluções práticas e funcionais, sempre buscando 
                  a melhor experiência para o usuário final.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "2+", label: "Anos de Experiência" },
                { value: "5+", label: "Projetos Entregues" },
                { value: "100%", label: "Dedicação" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-4 rounded-xl text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 rounded-2xl group hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg hero-gradient">
                    <skill.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
