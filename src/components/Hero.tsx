import { motion } from "framer-motion";
import { ArrowDown, Activity, Layers, Zap, FlaskConical, Dna } from "lucide-react";
import { Logo } from "./Logo";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center pt-32 md:pt-40 pb-20 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-200/40 rounded-full blur-3xl mix-blend-multiply"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-[20%] right-[-5%] w-[35vw] h-[35vw] bg-[#A5D9D9]/20 rounded-full blur-3xl mix-blend-multiply"
          animate={{ x: [0, -30, 0], y: [0, 50, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
        <motion.div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-blue-200/40 rounded-full blur-3xl mix-blend-multiply"
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4 }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
        <FadeIn className="mb-12 flex flex-col items-center">

          <div className="flex flex-col items-center mb-12">
            <Logo className="w-20 h-20 md:w-28 md:h-28 mb-6" />
            <h1 className="font-tech font-bold text-slate-900 lowercase text-4xl md:text-[90px] lg:text-[110px] tracking-tighter leading-none">
              shikimax
            </h1>

            <div className="mt-8 flex flex-col md:flex-row items-center gap-3">
              <div className="px-5 py-2 rounded-full border border-[#A5D9D9]/30 bg-[#A5D9D9]/10 backdrop-blur-sm flex items-center gap-2">
                <Dna size={14} className="text-[#3d8c8c]" />
                <span className="text-[10px] md:text-xs tracking-[0.15em] text-[#3d8c8c] uppercase font-bold">
                  Precision Fermentation of Aromatics
                </span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-tech font-bold text-slate-900 mb-12 leading-tight max-w-4xl">
            We redefine <span className="text-[#A5D9D9]">biology</span> to make sustainable aromatics<br className="hidden md:block" />
            <span className="text-[#A5D9D9]">10x more profitable</span>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.3} className="w-full max-w-4xl">
          <div className="bg-white/50 backdrop-blur-md rounded-[32px] border border-stone-200 p-8 md:p-10 shadow-xl shadow-stone-200/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-center">
              <div className="flex-1">
                <div className="text-3xl md:text-4xl font-tech font-bold text-slate-900 mb-2">
                  &gt;€400B
                </div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-bold">
                  Market '32
                </div>
              </div>

              <div className="hidden md:block w-[1px] h-12 bg-stone-200"></div>
              <div className="md:hidden w-16 h-[1px] bg-stone-200"></div>

              <div className="flex-1">
                <div className="text-3xl md:text-4xl font-tech font-bold text-[#A5D9D9] mb-2">
                  10×
                </div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-bold">
                  Profit Advantage
                </div>
              </div>

              <div className="hidden md:block w-[1px] h-12 bg-stone-200"></div>
              <div className="md:hidden w-16 h-[1px] bg-stone-200"></div>

              <div className="flex-1">
                <div className="text-3xl md:text-4xl font-tech font-bold text-slate-900 mb-2">
                  50%
                </div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-widest font-bold">
                  Yield
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500/50"
        animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
