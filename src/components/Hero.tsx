import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const whatsappUrl = "whatsapp://send?phone=5564992313619&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Root%20Creative%20e%20quero%20solicitar%20uma%20proposta.";

const stats = [
  { value: "200+", label: "Clientes atendidos" },
  { value: "100%", label: "Full service" },
  { value: "5x", label: "Retorno médio" },
];

const Hero = () => (
  <section className="section-padding pt-32 md:pt-40 relative overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
          Agência Full Service
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
          Sua marca merece{" "}
          <span className="text-gradient">crescer com raízes fortes</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
          Somos uma agência full service que conecta estratégia, criatividade e
          dados para transformar negócios em marcas memoráveis.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button asChild size="lg" className="gap-2">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Solicitar proposta <ArrowRight size={18} />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#servicos">Nossos serviços</a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-3 gap-6 max-w-lg"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-3xl md:text-4xl font-display font-bold text-primary">{s.value}</p>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Hero;
