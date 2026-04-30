import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import sample from "@/assets/portfolio-sample.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import p7 from "@/assets/portfolio-7.jpg";
import p8 from "@/assets/portfolio-8.jpg";

type Category = "Todos" | "Branding" | "Social Media" | "Web & Campanhas";

const projects: { title: string; client: string; category: Exclude<Category, "Todos">; image: string }[] = [
  { title: "Identidade Floresta", client: "Orant Forestry", category: "Branding", image: p2 },
  { title: "Sistema de Marca", client: "Rocleward", category: "Branding", image: p1 },
  { title: "Linha Natural", client: "Nelcomy", category: "Branding", image: p8 },
  { title: "Conteúdo Lifestyle", client: "Studio Sol", category: "Social Media", image: p3 },
  { title: "Feed Editorial", client: "Casa Verde", category: "Social Media", image: p4 },
  { title: "Produção de Vídeo", client: "Origem", category: "Social Media", image: p5 },
  { title: "Site Institucional", client: "Marketing Co.", category: "Web & Campanhas", image: p6 },
  { title: "Campanha Outdoor", client: "Carint", category: "Web & Campanhas", image: p7 },
  { title: "Ambiente de Marca", client: "Raízes Interiores", category: "Web & Campanhas", image: sample },
];

const categories: Category[] = ["Todos", "Branding", "Social Media", "Web & Campanhas"];

const Portfolio = () => {
  const [active, setActive] = useState<Category>("Todos");
  const filtered = active === "Todos" ? projects : projects.filter((p) => p.category === active);

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

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 text-sm rounded-full border transition-all ${
                  active === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.a
              key={`${p.title}-${i}`}
              href="#contato"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/40 hover:border-primary/40 transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.client}`}
                  loading="lazy"
                  width={800}
                  height={1000}
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
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
