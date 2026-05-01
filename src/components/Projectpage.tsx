import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RootLogo from "./RootLogo";

import foto1 from "./fotos-porfiolhos/114-DSC00154.jpg";
import foto2 from "./fotos-porfiolhos/Cópia de 1-DSC06602.jpg";
import foto3 from "./fotos-porfiolhos/Cópia de 1.png";
import foto4 from "./fotos-porfiolhos/Cópia de 26-DSC06567.jpg";
import foto5 from "./fotos-porfiolhos/Cópia de 5-DSC06598 (1).jpg";
import foto6 from "./fotos-porfiolhos/Cópia de 5-DSC06598.jpg";
import foto7 from "./fotos-porfiolhos/Cópia de 7.png";
import foto8 from "./fotos-porfiolhos/Cópia de 85-DSC05606.jpg";
import foto9 from "./fotos-porfiolhos/Cópia de DSC02797.jpg";
import foto10 from "./fotos-porfiolhos/Cópia de DSC02921.jpg";
import foto11 from "./fotos-porfiolhos/IMG_3273.JPG (1).jpeg";


const fotos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11];

const driveUrl = "https://drive.google.com/drive/folders/1HmaLTuXPUT8rjgTmOnPG_V0InK2sH5KI";

const ProjectPage = ({ slug }: { slug: string }) => {
    const navigate = useNavigate();
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (i: number) => setLightboxIndex(i);
    const closeLightbox = () => setLightboxIndex(null);
    const prev = () => setLightboxIndex((i) => (i! > 0 ? i! - 1 : fotos.length - 1));
    const next = () => setLightboxIndex((i) => (i! < fotos.length - 1 ? i! + 1 : 0));

    return (
        <div className="min-h-screen bg-background flex flex-col">

            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/30">
                <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
                    <button
                        onClick={() => navigate("/#portfolio")}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Voltar
                    </button>
                    <RootLogo />
                    <a
                        href={driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                        Ver tudo <ExternalLink size={12} />
                    </a>
                </div>
            </header>

            {/* Hero */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 w-full"
            >
                <span className="text-primary text-sm font-medium mb-2 block">Portfólio</span>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-3">Fotografia</h1>
                <p className="text-muted-foreground text-lg max-w-xl">
                    Ensaios e coberturas que capturam a essência de cada marca.
                </p>
            </motion.div>

            <div className="w-full border-t border-border/30" />

            {/* Galeria masonry */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 w-full">
                <div className="columns-2 md:columns-3 gap-4 space-y-4">
                    {fotos.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.06 }}
                            onClick={() => openLightbox(i)}
                            className="break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group relative mb-4"
                        >
                            <img
                                src={src}
                                alt={`Foto ${i + 1}`}
                                loading="lazy"
                                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 rounded-2xl" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-border/30 px-6 md:px-12 py-6 mt-auto">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Root Creative. Todos os direitos reservados.
                    </p>
                    <button
                        onClick={() => navigate("/#portfolio")}
                        className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                        Ver outros projetos →
                    </button>
                </div>
            </footer>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center px-4"
                        onClick={closeLightbox}
                    >
                        <button
                            onClick={closeLightbox}
                            className="absolute top-5 right-5 text-muted-foreground hover:text-foreground transition-colors z-10"
                        >
                            <X size={28} />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); prev(); }}
                            className="absolute left-4 md:left-8 text-muted-foreground hover:text-foreground transition-colors z-10"
                        >
                            <ChevronLeft size={36} />
                        </button>

                        <motion.img
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.25 }}
                            src={fotos[lightboxIndex]}
                            alt={`Foto ${lightboxIndex + 1}`}
                            onClick={(e) => e.stopPropagation()}
                            className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
                        />

                        <button
                            onClick={(e) => { e.stopPropagation(); next(); }}
                            className="absolute right-4 md:right-8 text-muted-foreground hover:text-foreground transition-colors z-10"
                        >
                            <ChevronRight size={36} />
                        </button>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                            {lightboxIndex + 1} / {fotos.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectPage;