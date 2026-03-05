import { motion } from "framer-motion";
import { businessModels } from "../constants";
import { FadeIn } from "./FadeIn";

export function BusinessModel() {
  return (
    <section id="business" className="py-20 bg-slate-900 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-tech font-bold text-white mb-4">Flexible Business Model</h2>
          <p className="text-slate-400">Multiple revenue streams capturing value across the chain.</p>
        </FadeIn>

        <FadeIn delay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-slate-800 rounded-full border border-[#A5D9D9]/30 hidden md:flex items-center justify-center z-10">
                <div className="w-16 h-16 rounded-full bg-[#A5D9D9]/10 animate-pulse flex items-center justify-center">
                    <span className="text-[#A5D9D9] font-bold text-xs font-tech tracking-wider uppercase">Value</span>
                </div>
            </div>

            {businessModels.map((item, i) => (
                <motion.div key={i} whileHover={{ scale: 1.02 }} className={`bg-slate-800 p-8 rounded-2xl border border-white/5 relative overflow-hidden group ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#A5D9D9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity ${i % 2 === 0 ? "right-0" : "left-0"}`} />
                    <div className={`flex flex-col ${i % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                        <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-4 text-blue-500">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-tech font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                </motion.div>
            ))}
        </FadeIn>
      </div>
    </section>
  );
}
