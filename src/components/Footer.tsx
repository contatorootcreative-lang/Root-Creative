import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import RootLogo from "./RootLogo";

const whatsappUrl = "whatsapp://send?phone=5564992313619&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Root%20Creative%20e%20quero%20falar%20com%20voc%C3%AAs.";

const Footer = () => (
  <footer className="border-t border-border/30 px-6 md:px-12 py-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <RootLogo />

      <div className="flex items-center gap-5">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
          <Instagram size={20} />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
          <MessageCircle size={20} />
        </a>
      </div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Root Creative. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
