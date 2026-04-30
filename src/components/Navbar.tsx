import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import RootLogo from "./RootLogo";

const whatsappUrl = "whatsapp://send?phone=5564992313619&text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Root%20Creative%20e%20quero%20falar%20com%20voc%C3%AAs.";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <a href="#"><RootLogo /></a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Button asChild size="sm">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Fale conosco</a>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/30 px-6 pb-6 space-y-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="w-full">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Fale conosco</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
