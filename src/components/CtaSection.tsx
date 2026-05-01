import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const whatsappUrl = "whatsapp://send?phone=5564992313619&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Root%20Creative%20e%20quero%20falar%20com%20voc%C3%AAs.";
const portfolioUrl = "https://drive.google.com/drive/folders/1pu8ftjLuNnVxm_7Sn_ruCEizymipPU2m?usp=sharing";

const CtaSection = () => (
  <section id="contato" className="section-padding">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto rounded-3xl bg-cream text-forest p-10 md:p-16 text-center"
    >
      <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
        Pronto para crescer?
      </h2>
      <p className="text-forest/70 text-lg mb-8 max-w-xl mx-auto">
        Vamos conversar sobre como a Root Creative pode transformar a presença digital da sua marca.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="gap-2 bg-forest text-cream hover:bg-forest/90">
          <a href={portfolioUrl} target="_blank" rel="noopener noreferrer">
            Ver portfólio completo <ArrowRight size={18} />
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          className="gap-2 bg-transparent text-forest border border-forest/40 hover:bg-forest/10"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} /> Falar no WhatsApp
          </a>
        </Button>
      </div>
    </motion.div>
  </section>
);

export default CtaSection;