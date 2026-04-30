import { motion } from "framer-motion";
import { Share2, Target, BarChart3, Palette, Video, Camera } from "lucide-react";

const services = [
  { icon: Share2, title: "Gestão de Redes Sociais", desc: "Planejamento, criação de conteúdo e gerenciamento completo das suas redes." },
  { icon: Target, title: "Construção de Posicionamento", desc: "Estratégia de marca para você se destacar no mercado e na mente do público." },
  { icon: BarChart3, title: "Tráfego Pago & Análise de Dados", desc: "Campanhas otimizadas e dashboards para decisões baseadas em dados reais." },
  { icon: Palette, title: "Criação de Identidade Visual", desc: "Logo, tipografia, paleta de cores e manual de marca únicos para o seu negócio." },
  { icon: Video, title: "Produção Audiovisual", desc: "Vídeos institucionais, reels, motion graphics e conteúdo que engaja." },
  { icon: Camera, title: "Fotografia & Cobertura de Eventos", desc: "Fotos profissionais que capturam a essência da sua marca e momentos." },
];

const Services = () => (
  <section id="servicos" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <span className="text-primary text-sm font-medium mb-2 block">O que fazemos</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold">Nossos serviços</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card p-6 md:p-8 group hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
