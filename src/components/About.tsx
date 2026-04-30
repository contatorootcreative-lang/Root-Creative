import { motion } from "framer-motion";

const tags = ["Branding", "Social Media", "Performance", "Identidade Visual", "Audiovisual", "Estratégia", "Dados", "Criatividade"];

const About = () => (
  <section id="sobre" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        <div>
          <span className="text-primary text-sm font-medium mb-2 block">Quem somos</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Raízes fortes,{" "}
            <span className="text-gradient">resultados que crescem</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A Root Creative nasceu da paixão por construir marcas autênticas e estratégias que realmente funcionam. Acreditamos que toda empresa tem uma história única — e nosso papel é traduzi-la em experiências visuais e digitais que conectam, engajam e convertem.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Com uma equipe multidisciplinar e processos orientados por dados, entregamos soluções completas — do branding à performance — para negócios que querem crescer de verdade.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-secondary border border-border/50">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">J</div>
              <span className="text-sm font-medium">Jerrad</span>
              <span className="text-xs text-muted-foreground">Co-founder</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-secondary border border-border/50">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">G</div>
              <span className="text-sm font-medium">Glenda</span>
              <span className="text-xs text-muted-foreground">Co-founder</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              className="px-5 py-2.5 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
