import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { galleryProducts } from "../constants";
import { FadeIn } from "./FadeIn";

export function ApplicationsGallery() {
  const [activeId, setActiveId] = useState(galleryProducts[0].id);

  return (
    <section id="products" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-tech font-bold text-slate-900 mb-2">Applications</h2>
            <p className="text-slate-500">Diverse product portfolio powered by one platform.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[500px]">
          {galleryProducts.map((product) => (
            <motion.div key={product.id} onClick={() => setActiveId(product.id)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out border border-slate-200 shadow-sm ${activeId === product.id ? "flex-[3]" : "flex-1"}`}
              layout>
              <div className="absolute inset-0">
                <img src={product.image} alt={product.title} className={`w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-110 ${product.futureMarket ? 'blur-[2px] grayscale-[40%]' : ''}`} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                {product.futureMarket && (
                  <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px]" />
                )}
              </div>
              {product.futureMarket && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 text-[10px] font-bold uppercase tracking-widest text-slate-300">
                  Future Market
                </div>
              )}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className={`transition-all duration-300 ${activeId === product.id ? "mb-0" : "mb-4"}`}>
                  {activeId === product.id && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#A5D9D9]/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-[#A5D9D9] border border-[#A5D9D9]/30">
                        {product.category}
                      </span>
                    </motion.div>
                  )}
                  <h3 className={`font-tech font-bold text-white leading-tight ${activeId === product.id ? "text-3xl mb-2" : "text-xl rotate-0 lg:-rotate-90 lg:origin-bottom-left lg:absolute lg:bottom-6 lg:left-6 lg:w-60 lg:text-right whitespace-nowrap"}`}>
                    {product.title}
                  </h3>
                </div>
                <AnimatePresence>
                  {activeId === product.id && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                      <p className="text-slate-200 mb-6 max-w-md">{product.desc}</p>

                      {/* Molecular Structure Overlay */}
                      <div className="absolute top-6 right-6 opacity-20 pointer-events-none text-white">
                        {product.id === "skincare" && (
                          <svg width="100" height="100" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 35 L75 50 L75 80 L50 95 L25 80 L25 50 Z" stroke="currentColor" strokeWidth="2" />
                            <circle cx="50" cy="65" r="15" stroke="currentColor" strokeWidth="2" />
                            <line x1="50" y1="35" x2="50" y2="15" stroke="currentColor" strokeWidth="2" />
                            <text x="50" y="10" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" className="font-mono">COOH</text>
                            <line x1="75" y1="50" x2="90" y2="40" stroke="currentColor" strokeWidth="2" />
                            <text x="92" y="40" textAnchor="start" fontSize="10" fontWeight="bold" fill="currentColor" className="font-mono">OH</text>
                          </svg>
                        )}
                        {product.id === "cosmetics" && (
                          <svg width="100" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 30 L55 15 L80 30 L80 60 L55 75 L30 60 Z" stroke="currentColor" strokeWidth="2" />
                            <line x1="80" y1="30" x2="100" y2="20" stroke="currentColor" strokeWidth="2" />
                            <text x="105" y="20" textAnchor="start" fontSize="10" fontWeight="bold" fill="currentColor" className="font-mono">O-Glc</text>
                            <line x1="55" y1="75" x2="55" y2="95" stroke="currentColor" strokeWidth="2" />
                            <text x="55" y="105" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" className="font-mono">OH</text>
                          </svg>
                        )}
                        {product.id === "preservatives" && (
                          <svg width="100" height="100" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 35 L75 50 L75 80 L50 95 L25 80 L25 50 Z" stroke="currentColor" strokeWidth="2" />
                            <line x1="50" y1="35" x2="50" y2="15" stroke="currentColor" strokeWidth="2" />
                            <text x="50" y="10" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" className="font-mono">COOH</text>
                            <line x1="50" y1="95" x2="50" y2="115" stroke="currentColor" strokeWidth="2" />
                            <text x="50" y="125" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" className="font-mono">OH</text>
                          </svg>
                        )}
                        {product.id === "flavors" && (
                          <svg width="100" height="100" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 40 L85 55 L85 85 L60 100 L35 85 L35 55 Z" stroke="currentColor" strokeWidth="2" />
                            <line x1="60" y1="40" x2="60" y2="20" stroke="currentColor" strokeWidth="2" />
                            <text x="60" y="15" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" className="font-mono">CHO</text>
                            <line x1="85" y1="55" x2="105" y2="45" stroke="currentColor" strokeWidth="2" />
                            <text x="108" y="45" textAnchor="start" fontSize="10" fontWeight="bold" fill="currentColor" className="font-mono">OCH3</text>
                            <line x1="60" y1="100" x2="60" y2="120" stroke="currentColor" strokeWidth="2" />
                            <text x="60" y="130" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" className="font-mono">OH</text>
                          </svg>
                        )}
                        {product.id === "vitamins" && (
                          <svg width="100" height="100" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 35 L75 50 L75 80 L50 95 L25 80 L25 50 Z" stroke="currentColor" strokeWidth="2" />
                            <line x1="50" y1="35" x2="50" y2="15" stroke="currentColor" strokeWidth="2" />
                            <text x="50" y="10" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" className="font-mono">COOH</text>
                            <line x1="50" y1="95" x2="50" y2="115" stroke="currentColor" strokeWidth="2" />
                            <text x="50" y="125" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" className="font-mono">NH2</text>
                          </svg>
                        )}
                      </div>

                      <div className="flex gap-6">
                        <div>
                          <div className="text-xs text-slate-400 uppercase tracking-wider">Target</div>
                          <div className="text-2xl font-tech font-bold text-[#A5D9D9]">{product.stats.market}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 uppercase tracking-wider">Advantage</div>
                          <div className="text-2xl font-tech font-bold text-[#A5D9D9]">{product.stats.growth}</div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {activeId !== product.id && (
                  <div className="absolute bottom-6 right-6 lg:hidden"><ChevronRight className="text-white/50" /></div>
                )}
              </div>
            </motion.div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
