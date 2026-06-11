"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface CollectionItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
}

const COLLECTIONS: CollectionItem[] = [
  {
    id: 1,
    title: "MUSE MERMAID GOWN",
    subtitle: "VÉLIA LUXURY COUTURE",
    image: "/images/dress_mermaid.png",
    tags: ["Lace", "Mermaid", "Hand-beaded"],
  },
  {
    id: 2,
    title: "ROYAL PRINCESS GOWN",
    subtitle: "VÉLIA GRANDE BALLGOWN",
    image: "/images/dress_princess.png",
    tags: ["Tulle", "Princess", "Crystal"],
  },
  {
    id: 3,
    title: "SATIN MINIMALIST COLUMN",
    subtitle: "VÉLIA MODERN ELEGANCE",
    image: "/images/dress_satin.png",
    tags: ["Satin", "A-line", "Off-shoulder"],
  },
  {
    id: 4,
    title: "FRENCH LACE VINTAGE",
    subtitle: "VÉLIA HERITAGE LINE",
    image: "/images/dress_lace.png",
    tags: ["Lace", "A-line", "Long Train"],
  },
  {
    id: 5,
    title: "MODERN CREPE GOWN",
    subtitle: "VÉLIA ESSENTIALS",
    image: "/images/dress_offshoulder.png",
    tags: ["Crepe", "Off-shoulder", "Sleek"],
  },
];

export default function FilmStripScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const strip = stripRef.current;
    if (!container || !strip) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const totalScrollHeight = rect.height - window.innerHeight;
      
      if (totalScrollHeight <= 0) return;

      // Calculate progress (0 to 1) based on sticky container scroll position
      const scrollOffset = -rect.top;
      const progress = Math.min(Math.max(scrollOffset / totalScrollHeight, 0), 1);
      
      setScrollProgress(progress);

      // Compute total width of the film strip relative to the screen size
      const stripWidth = strip.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      // We start translation after the canister (about 320px from left)
      // and end when the last frame is fully in view.
      const canisterSpace = viewportWidth > 768 ? 360 : 120;
      const maxTranslate = Math.max(stripWidth - viewportWidth + canisterSpace + 80, 0);
      const translateVal = progress * maxTranslate;

      // Apply GPU-accelerated transform
      requestAnimationFrame(() => {
        strip.style.transform = `translateX(-${translateVal}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      id="filmstrip-section"
      className="relative h-[250vh] bg-zinc-950 text-white w-full border-t border-zinc-900"
    >
      {/* Sticky Viewport */}
      <div 
        ref={stickyRef}
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"
      >
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        {/* Cinematic Film Canister (Fixed on the Left) */}
        <div className="absolute left-0 top-0 h-full w-[120px] md:w-[320px] bg-gradient-to-r from-black via-zinc-900 to-zinc-950 border-r border-zinc-800 flex flex-col justify-between py-12 px-4 md:px-8 z-20 shadow-[10px_0_30px_rgba(0,0,0,0.8)]">
          {/* Top Label */}
          <div className="text-left font-black tracking-widest text-[9px] md:text-xs text-zinc-500 uppercase">
            <div>VÉLIA BRIDAL</div>
            <div className="text-amber-500 font-bold mt-1">100% QUALITY</div>
          </div>

          {/* Center Title (Rotated 90 degrees) */}
          <div className="flex flex-col items-center justify-center flex-1 my-8">
            {/* Canister Body 3D Styling */}
            <div className="relative w-16 md:w-32 h-64 md:h-96 rounded-2xl bg-gradient-to-r from-zinc-800 via-zinc-950 to-zinc-800 border border-zinc-700 shadow-2xl flex flex-col items-center justify-between py-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/40 to-transparent pointer-events-none" />
              <div className="absolute left-1 md:left-2 top-0 h-full w-[2px] bg-zinc-700/50" />
              <div className="absolute right-1 md:right-2 top-0 h-full w-[2px] bg-zinc-700/50" />
              
              {/* Canister Top Cap */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-zinc-600 via-zinc-400 to-zinc-600 border-b border-zinc-800" />
              
              {/* Vertical Text */}
              <div className="rotate-[270deg] font-black text-xs md:text-xl text-zinc-300 tracking-[0.3em] uppercase select-none whitespace-nowrap">
                VÉLIA FILM COUTURE
              </div>

              {/* Technical indicators */}
              <div className="text-[7px] md:text-[9px] text-zinc-500 font-mono tracking-wider flex flex-col items-center gap-1">
                <span>ISO 400</span>
                <span className="text-amber-500 font-bold">2026</span>
              </div>
              
              {/* Canister Bottom Cap */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-zinc-600 via-zinc-400 to-zinc-600 border-t border-zinc-800" />
            </div>
          </div>

          {/* Bottom Indicators */}
          <div className="font-mono text-[8px] md:text-[10px] text-zinc-500 flex flex-col gap-1">
            <div className="flex justify-between">
              <span>FRAME:</span>
              <span className="text-zinc-300 font-bold">0{Math.floor(scrollProgress * 5) + 1}</span>
            </div>
            <div className="w-full bg-zinc-800 h-[3px] rounded-full overflow-hidden">
              <div 
                className="bg-amber-500 h-full transition-all duration-100 ease-out" 
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Film Strip Wrapper */}
        <div className="flex-1 h-full relative z-10 flex items-center overflow-visible pl-[120px] md:pl-[340px]">
          {/* Film Strip Path (Horizontal Scrolling Part) */}
          <div 
            ref={stripRef}
            className="flex items-center gap-4 md:gap-12 py-8 px-4 transition-transform duration-200 ease-out will-change-transform"
            style={{ transform: "translateX(0px)" }}
          >
            {COLLECTIONS.map((item, index) => (
              <div key={item.id} className="flex items-center">
                {/* Individual Film Frame Box */}
                <div className="w-[300px] md:w-[480px] bg-black border border-zinc-800 rounded-lg shadow-2xl overflow-hidden flex flex-col relative group">
                  {/* Top Film Holes Perforations */}
                  <div className="bg-zinc-950 py-2 border-b border-zinc-800 flex justify-around px-2">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={`top-hole-${i}`} className="w-2 md:w-3 h-3 md:h-4 bg-zinc-900 border border-zinc-800 rounded-sm" />
                    ))}
                  </div>

                  {/* Frame Heading */}
                  <div className="px-6 pt-4 flex justify-between items-center bg-zinc-950/80">
                    <span className="text-[10px] md:text-xs font-mono tracking-widest text-zinc-400">
                      {item.subtitle}
                    </span>
                    <span className="text-[10px] md:text-xs font-mono text-amber-500 font-bold">
                      F.0{index + 1} / 05
                    </span>
                  </div>

                  {/* Frame Image Container */}
                  <div className="relative aspect-[4/3] w-full bg-zinc-900 overflow-hidden px-4 py-2">
                    <div className="relative w-full h-full rounded border border-zinc-800 overflow-hidden group-hover:border-zinc-600 transition-colors duration-300">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 300px, 480px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 opacity-65" />
                    </div>
                  </div>

                  {/* Frame Info Section */}
                  <div className="bg-zinc-950 p-6 flex-1 flex flex-col justify-between gap-4">
                    <div>
                      <h3 className="text-lg md:text-2xl font-black tracking-tight text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-[8px] md:text-[10px] uppercase font-mono tracking-widest bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded border border-zinc-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-zinc-900 pt-4">
                      <span className="text-[10px] md:text-xs text-zinc-500 font-mono">
                        VÉLIA ARCHIVE 2026
                      </span>
                      <button className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20">
                        XEM CHI TIẾT
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Bottom Film Holes Perforations */}
                  <div className="bg-zinc-950 py-2 border-t border-zinc-800 flex justify-around px-2">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={`bottom-hole-${i}`} className="w-2 md:w-3 h-3 md:h-4 bg-zinc-900 border border-zinc-800 rounded-sm" />
                    ))}
                  </div>
                </div>

                {/* Film Connector */}
                {index < COLLECTIONS.length - 1 && (
                  <div className="w-4 md:w-12 h-6 md:h-12 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border-y border-zinc-800 self-center opacity-70 flex items-center justify-center">
                    <div className="w-[1px] h-full bg-zinc-800" />
                  </div>
                )}
              </div>
            ))}

            {/* Ending Frame Connector / Outro */}
            <div className="flex items-center pr-12">
              <div className="w-[100px] md:w-[200px] h-[60px] md:h-[100px] bg-gradient-to-r from-zinc-900 to-transparent border-y border-zinc-800/50 flex items-center pl-6 text-zinc-600 font-mono text-[9px] md:text-xs tracking-widest">
                END OF STRIP / CONTINUE SCROLLING
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
