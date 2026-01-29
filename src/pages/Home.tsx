import React from 'react';
import { motion, type Variants } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaLinkedin, FaFileDownload, FaGithub } from "react-icons/fa";

import Manifesto from "../components/Manifesto";
import ProyectosHome from "../components/ProyectosHome";
import SobreMi from "../components/Sobremi";

const projects = [
  { title: "The Pueblo", url: "https://thepueblo.es/", img: "/images/ThePueblo.jpg", desc: "Enfocado en contenido visual moderno.", video: "/images/thePueblo Hover.mp4", tech: ["React, Vite, Tailwind CSS"] },
  { title: "Nor3xtrem", url: "https://nor3xtrem.es/", img: "/Nor3xtreme.png", desc: "Presencia digital de una marcha cicloturista.", video: "/Nor3xtremeHover.mp4", tech: ["React, Vite, Tailwind CSS"] },
  { title: "Matter & Sound", url: "https://mattersoundrdisquete.netlify.app/", img: "/MatterSound.jpg", desc: "Estación de visualización generativa que transforma ondas mecánicas en materia digital mediante FFT y Web Audio API.", video: "/MattersoundHover.mp4", tech: ["React", "TypeScript", "Web Audio API", "HTML5 Canvas", "Tailwind CSS"] },
  { title: "Armario Escénico", url: "https://armarioescenico.netlify.app/", img: "/sambrona.jpg", desc: "Gestión de archivo de vestuario histórico con búsqueda precisa.", video: "/sambronaHover.mp4", tech: ["React, TypeScript, Tailwind CSS"] },
  { title: "ED Movil", url: "https://edmovil.netlify.app/", img: "/images/edmovil.png", desc: "Enfocada en la presentación de tarifas y productos.", video: "/images/edHover.mp4", tech: ["React, TypeScript, Tailwind CSS"] },
  { title: "AM Movil Repair", desc: "Web de servicios enfocada en la reparación de móviles.", img: "/images/am movil repair.jpg", url: "https://ammovilrepair.com", video: "/amhover.mp4", tech: ["React, Tailwind, Google Maps"] },
];

const socials = [
  { label: "Instagram", url: "https://www.instagram.com/rdisquete/" },
  { label: "WhatsApp", url: "https://wa.me/+34648791998" },
  { label: "Email", url: "mailto:rafael.doradozamoro@gmail.com" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/rafael-dorado-zamoro/" },
  { label: "Descargar CV", url: "/images/CV_Rafael_Dorado_Zamoro.pdf", download: true },
  { label: "GitHub", url: "https://github.com/RDisquete" }
];

const TEXTURA_URL = "/images/texturas/abstract-crumpled-black-paper-texture-background-f-2025-02-22-04-38-59-utc.jpg";
const SILUETA_URL = "/siluetalineas.png";

const ESTILO_OVERLAY: React.CSSProperties = {
  backgroundImage: `url(${TEXTURA_URL})`,
  backgroundSize: 'cover',
  opacity: 0.25,
  top: 0, left: 0, width: '100vw', height: '100vh',
  zIndex: 9999,
  pointerEvents: 'none',
};

const verticalSweep: Variants = {
  hidden: { opacity: 0, y: 20, scaleY: 0.8 },
  visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.4, ease: [0.17, 0.67, 0.83, 0.67] } },
};

const blockFade: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.1, ease: "easeOut" } },
};

const drawSilhouette: Variants = {
  hidden: { opacity: 0.5, scaleX: 0 },
  visible: { opacity: 1, scaleX: 1, transition: { duration: 0.5, ease: "linear", delay: 0.7 } },
};

export default function HeroSection() {

  const renderIcon = (label: string) => {
    const props = { className: "w-7 h-7" };
    switch (label) {
      case "Instagram": return <FaInstagram {...props} />;
      case "WhatsApp": return <FaWhatsapp {...props} />;
      case "Email": return <FaEnvelope {...props} />;
      case "LinkedIn": return <FaLinkedin {...props} />;
      case "Descargar CV": return <FaFileDownload {...props} />;
      case "GitHub": return <FaGithub {...props} />;
      default: return null;
    }
  };

  return (
    <div className="relative w-full bg-neutral-900">
      <section className="relative w-full h-screen text-[#cdc69c] overflow-hidden border-8 border-[#bbb88c] bg-neutral-900">
        <div className="absolute inset-0 z-[100] pointer-events-none" style={ESTILO_OVERLAY} />

        {/* --- DESKTOP VERSION --- */}
        <div className="relative hidden w-full h-full md:block">
          <motion.div
            className="absolute z-20 top-1/4 left-0 w-full h-[2px] bg-[#cdc69c] opacity-30"
            animate={{ x: ["0%", "100%"], opacity: [0.2, 0.8, 0.4] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />

          <motion.img 
            src={SILUETA_URL} 
            variants={drawSilhouette} 
            initial="hidden" 
            animate="visible" 
            className="absolute top-0 right-0 z-[80] mr-[-16px] w-[25vw] h-full object-cover object-bottom contrast-125 transform origin-right" 
          />

          <div className="relative w-full h-full px-8 pt-8">
            <div className="absolute w-full top-[5%] left-0">
              {/* RAFA */}
              <motion.div className="absolute z-10 top-0 left-0 translate-x-[5vw] translate-y-[-20%]" variants={verticalSweep} initial="hidden" animate="visible" transition={{ delay: 0.05 }}><h1 className="text-[14vw] leading-[0.8] tracking-tight transform scale-y-[1.6] text-black/30 uppercase font-display-impact font-extrabold whitespace-nowrap">RAFA</h1></motion.div>
              <motion.div className="absolute z-20 top-0 left-0 translate-x-[5vw] translate-y-[-20%]" variants={verticalSweep} initial="hidden" animate="visible" transition={{ delay: 0.1 }}><h2 className="text-[14vw] leading-[0.8] tracking-tight transform scale-y-[1.6] text-[#cdc69c] uppercase font-display-impact font-light whitespace-nowrap">RAFA</h2></motion.div>

              {/* --- ETIQUETA LP "STICKER" CON ANIMACIÓN DE GOLPE --- */}
              <motion.div
                initial={{ opacity: 0, scale: 3, rotate: -20, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, rotate: 8, filter: "blur(0px)" }}
                transition={{ 
                  delay: 1.5, // Aparece después de que los nombres se asienten
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className="absolute z-[95] right-[6vw] top-[4vw] bg-[#cdc69c] p-1.5 shadow-[12px_12px_0px_rgba(0,0,0,1)] border-2 border-black/40 pointer-events-none"
              >
                <div className="border-2 border-black px-6 py-4 flex flex-col items-center bg-[#d4cea6] relative">
                  
                  {/* Sello Lateral Burdeos */}
                  <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-6 h-20 bg-[#8e2b27] border-2 border-black flex items-center justify-center shadow-md">
                    <p className="text-[0.45vw] font-black text-[#cdc69c] rotate-90 whitespace-nowrap tracking-wider uppercase">
                      2026 EDITION
                    </p>
                  </div>

                  {/* Texto Principal */}
                  <div className="pl-4 text-center">
                    <h3 className="text-[2vw] font-display-impact uppercase text-black leading-none tracking-tighter italic">
                      FRONTEND
                    </h3>
                    
                    <div className="flex items-center justify-center gap-2 my-1.5">
                      <div className="h-[1.5px] w-8 bg-black/20" />
                      <span className="text-[0.9vw] font-display-impact text-[#8e2b27]">&</span>
                      <div className="h-[1.5px] w-8 bg-black/20" />
                    </div>

                    <h4 className="text-[1.2vw] font-display-impact uppercase text-black leading-none tracking-tight">
                      <span className="text-[#8e2b27]">CREATIVE</span> WEB DESIGN
                    </h4>
                  </div>

                  {/* Serial Number Inferior */}
                  <div className="absolute -bottom-2 right-3 bg-black px-2 py-0.5">
                    <p className="text-[0.45vw] font-mono text-[#cdc69c] font-bold">
                      RD-DSQT // 01
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* DORADO */}
              <motion.div className="absolute z-40 left-[10vw] top-[19vw]" variants={verticalSweep} initial="hidden" animate="visible" transition={{ delay: 0.2 }}><h3 className="text-[20vw] leading-[0.8] tracking-tight transform scale-y-[1.6] text-[#8e2b27] uppercase font-display-impact font-extrabold whitespace-nowrap">DORADO</h3></motion.div>

              {/* RDISQUETE */}
              <motion.div className="absolute z-[70] left-[55vw] top-[39vw]" variants={blockFade} initial="hidden" animate="visible" transition={{ delay: 0.3 }}><p className="text-[8vw] font-bold text-[#cdc69c] font-vintage-cursive leading-none whitespace-nowrap">rdisquete</p></motion.div>
            </div>
          </div>

          <motion.div className="absolute bottom-16 left-0 right-0 z-[60] w-full h-16 bg-[#8e2b27] opacity-95" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.6, duration: 0.5 }}><p className="absolute top-1/2 left-8 transform -translate-y-1/2 text-xl font-mono tracking-widest text-[#cdc69c] font-extrabold">console.log('ART IS CODE')</p></motion.div>
        </div>

        {/* --- MOBILE --- */}
        <div className="relative block w-full h-full md:hidden">
          <div className="relative z-50 flex flex-col justify-center h-full px-6">
            <h2 className="text-[18vw] leading-none tracking-tighter uppercase font-display-impact font-light text-[#cdc69c]">RAFA</h2>
            <h3 className="text-[24vw] leading-[0.8] tracking-tighter uppercase font-display-impact font-extrabold text-[#8e2b27]">DORADO</h3>
            <p className="text-[12vw] font-bold text-[#cdc69c] font-vintage-cursive mt-2">rdisquete</p>
          </div>
        </div>

        {/* --- SOCIALS --- */}
        <div className="absolute bottom-4 left-0 w-full z-[110] px-4 md:px-8 flex justify-center">
          <div className="flex space-x-6">
            {socials.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noreferrer" className="text-[#cdc69c] text-3xl hover:text-[#8e2b27] transition-colors">{renderIcon(social.label)}</a>
            ))}
          </div>
        </div>
      </section>

      <main className="relative">
        <Manifesto />
        <ProyectosHome projects={projects} />
        <SobreMi />
      </main>
    </div>
  );
}