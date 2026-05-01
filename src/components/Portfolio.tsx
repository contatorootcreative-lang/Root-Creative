import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    title: "Fotos",
    client: "Root Creative",
    category: "Fotografia",
    image: p1,
    slug: "fotos",
  },
  // 🔁 Adicione os próximos projetos aqui (Storymaker, Vídeos, etc.)
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-block px-3 py-1 text-xs uppercase tracking-widest border border-border/50 rounded-full text-muted-foreground mb-4">
              Portfólio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Projetos que <span className="text-gradient">criam raízes</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Uma seleção de marcas que confiaram na nossa visão estratégica e criativa.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => navigate(`/portfolio/${p.slug}`)}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/40 hover:border-primary/40 transition-all cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.client}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-primary">{p.category}</span>
                  <h3 className="text-xl font-semibold mt-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.client}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;