import { motion } from "framer-motion";
import { Share2, Target, BarChart3, Palette, Video, Camera } from "lucide-react";

const services = [
  { icon: Share2, title: "Social Media", desc: "Gerenciamento de redes sociais com criação de conteúdo, desing e estratégia de perfomance" },
  { icon: Target, title: "Fotografia", desc: "Ensaios, registro de momentos é posicionamento de marca" },
  { icon: BarChart3, title: "Tráfego pago", desc: " Estratégia e análise de dados" },
  { icon: Palette, title: "Audiovisual ", desc: " Criação de post e criativos" },
  { icon: Video, title: "Desing", desc: "Criação de post e criativos" },
  { icon: Video, title: "Storymaker ", desc: "Cobertura em tempo de real móbile" },
  { icon: Camera, title: "Cobertura de eventos", desc: "registro de eventos, casamentos e momentos" },
  { icon: Video, title: "Lading page", desc: "Criação de páginas de destino eficientes" },
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
