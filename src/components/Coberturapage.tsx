import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RootLogo from "./RootLogo";

import foto1 from "./cobertura-fotos/1-DSC00074.jpg";
import foto2 from "./cobertura-fotos/7-DSC00150.jpg";
import foto3 from "./cobertura-fotos/48-DSC00307.jpg";
import foto4 from "./cobertura-fotos/53-DSC00323.jpg";
import foto5 from "./cobertura-fotos/57-DSC00343.jpg";
import foto6 from "./cobertura-fotos/69-DSC00410.jpg";
import foto7 from "./cobertura-fotos/79-DSC00450.jpg";
import foto8 from "./cobertura-fotos/107-DSC00734.jpg";
import foto9 from "./cobertura-fotos/108-DSC00736.jpg";
import foto10 from "./cobertura-fotos/111-DSC00767.jpg";
import foto11 from "./cobertura-fotos/139-DSC01149.jpg";

const fotos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11];

const driveUrl = "https://drive.google.com/drive/folders/1wB_S2_5v2mAHZ5jaXfmzjLzFBmB-nAey";

const CoberturaPage = ({ slug }: { slug: string }) => {
    const navigate = useNavigate();
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = (i: number) => setLightboxIndex(i);
    const closeLightbox = () => setLightboxIndex(null);
    const prev = () => setLightboxIndex((i) => (i! > 0 ? i! - 1 : fotos.length - 1));
    const next = () => setLightboxIndex((i) => (i! < fotos.length - 1 ? i! + 1 : 0));

    return (
        <div className="min-h-screen bg-background flex flex-col">

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

            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14 w-full"
            >
                <span className="text-primary text-sm font-medium mb-2 block">Portfólio</span>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-3">Cobertura de Eventos</h1>
                <p className="text-muted-foreground text-lg max-w-xl">
                    Ensaios e coberturas que capturam a essência de cada marca.
                </p>
            </motion.div>

            <div className="w-full border-t border-border/30" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 w-full">
                <div className="columns-1 sm:columns-2 md:columns-3" style={{ columnGap: "1.5rem" }}>
                    {fotos.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.07 }}
                            onClick={() => openLightbox(i)}
                            className="break-inside-avoid overflow-hidden rounded-3xl cursor-pointer group relative mb-6"
                            style={{ display: "inline-block", width: "100%" }}
                        >
                            <img
                                src={src}
                                alt={`Cobertura ${i + 1}`}
                                loading="lazy"
                                className="w-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-3xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                        </motion.div>
                    ))}
                </div>
            </div>

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
                            alt={`Cobertura ${lightboxIndex + 1}`}
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

export default CoberturaPage;