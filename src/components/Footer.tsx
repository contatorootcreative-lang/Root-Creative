import { Instagram, MessageCircle } from "lucide-react";
import RootLogo from "./RootLogo";

const whatsappUrl = "whatsapp://send?phone=5564992313619&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Root%20Creative%20e%20quero%20falar%20com%20voc%C3%AAs.";
const instagramUrl = "https://www.instagram.com/the.rootcreative?igsh=dm9kbHhhanJ6eXQ2&utm_source=qr";
const tiktokUrl = "https://www.tiktok.com/@the.rootcreative?_r=1&_t=ZS-95yyMdAFEnt";

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
  </svg>
);

const Footer = () => (
  <footer className="border-t border-border/30 px-6 md:px-12 py-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <RootLogo />

      <div className="flex items-center gap-5">
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Instagram"
        >
          <Instagram size={20} />
        </a>
        <a
          href={tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="TikTok"
        >
          <TikTokIcon />
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="WhatsApp"
        >
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