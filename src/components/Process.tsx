import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Diagnóstico", desc: "Análise profunda do seu negócio, mercado e concorrentes." },
  { icon: Lightbulb, title: "Estratégia", desc: "Planejamento personalizado com metas claras e mensuráveis." },
  { icon: Rocket, title: "Execução", desc: "Implementação ágil com acompanhamento em tempo real." },
  { icon: TrendingUp, title: "Análise", desc: "Métricas, relatórios e otimização contínua de resultados." },
];

const Process = () => (
  <section id="processo" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium mb-2 block">Como trabalhamos</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold">Nosso processo</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.4 }}
            className="relative text-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon size={28} className="text-primary" />
            </div>
            <span className="text-xs text-primary font-medium mb-1 block">0{i + 1}</span>
            <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>

            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border/50" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
