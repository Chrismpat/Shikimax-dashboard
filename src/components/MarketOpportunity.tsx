import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Search, Sparkles, XCircle } from "lucide-react";
import { marketData1 } from "../constants";
import { FadeIn } from "./FadeIn";

export function MarketOpportunity() {
  return (
    <section id="market" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="mb-12">
          <h2 className="text-3xl font-tech font-bold text-slate-900 mb-2 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#A5D9D9] rounded-full"></span>
            Market Opportunity
          </h2>
          <p className="text-slate-500 text-lg">From petrochemicals to precision biology.</p>
        </FadeIn>

        <FadeIn delay={0.2} className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
          {/* LEFT: Total Market Card (kept) */}
          <motion.div whileHover={{ y: -5 }} className="lg:col-span-2 bg-white border border-stone-100 rounded-2xl p-6 shadow-md">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-tech font-bold text-slate-900">Total Aromatic Market</h3>
                <p className="text-sm text-slate-500 mt-1">Petrochemical Building Blocks</p>
              </div>
              <div className="text-[#A5D9D9] font-tech font-bold text-xl">&gt;€200B</div>
            </div>
            <div className="h-36 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marketData1}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A5D9D9" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#A5D9D9" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #f1f5f9', color: '#0f172a' }} itemStyle={{ color: '#A5D9D9' }} />
                  <Area type="monotone" dataKey="value" stroke="#A5D9D9" fillOpacity={1} fill="url(#colorVal)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm text-slate-500 border-t border-slate-100 pt-4">Petroleum-derived aromatics make up 40% of all chemical building blocks.</p>
          </motion.div>

          {/* RIGHT: The Bio-Aromatic Opportunity — Zoom-In */}
          <motion.div whileHover={{ y: -5 }} className="lg:col-span-3 bg-gradient-to-br from-white to-emerald-50/30 border border-emerald-200/60 rounded-2xl p-6 md:p-8 shadow-md relative overflow-hidden">
            {/* Premium accent glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-tech font-bold text-slate-900">The Bio-Aromatic Opportunity</h3>
                  <p className="text-sm text-slate-500 mt-1">Biology-Compatible Functionalized Aromatics</p>
                </div>
              </div>
              {/* SVG Zoom-in Diagram: Value vs. Volume */}
              {/* Focus Funnel: Two-Panel Layout */}
              <div className="flex flex-col md:flex-row items-stretch gap-0 relative">
                {/* LEFT: Bulk Petrochemicals */}
                <div className="flex-1 bg-slate-100/80 border border-slate-200 rounded-xl md:rounded-r-none p-6 flex flex-col justify-center">
                  <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-3 font-mono">Bulk Petrochemicals</div>
                  <div className="text-3xl font-tech font-bold text-slate-400 mb-1">€1–3<span className="text-lg">/kg</span></div>
                  <div className="text-xs text-slate-400 font-mono mb-5">100M+ tonnes/yr</div>
                  <div className="mt-4 pt-3 border-t border-slate-200">
                    <span className="text-[10px] text-slate-400 font-mono text-center block">HIGH VOLUME • LOW MARGIN</span>
                  </div>
                </div>
                {/* RIGHT: Bio-Functionalized Aromatics */}
                <div className="flex-1 bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-300 rounded-xl md:rounded-l-none p-6 flex flex-col justify-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="text-[10px] font-bold tracking-widest text-emerald-700 uppercase mb-3 font-mono">Bio-Functionalized Aromatics</div>
                    <div className="text-3xl font-tech font-bold text-emerald-700 mb-1">€10–200<span className="text-lg">/kg</span></div>
                    <div className="text-xs text-emerald-600 font-mono mb-4">5–50 kt/yr • High Purity</div>
                    <div className="mt-4 pt-3 border-t border-emerald-200">
                      <span className="text-[10px] text-emerald-600 font-mono">LOW VOLUME • HIGH VALUE • HIGH PURITY</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom stats row */}
              <div className="grid grid-cols-3 gap-4 mt-5">
                <div className="text-center p-3 bg-white/70 rounded-lg border border-emerald-100/50">
                  <div className="text-2xl font-tech font-bold text-emerald-600">50×</div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase">Higher €/kg</div>
                </div>
                <div className="text-center p-3 bg-white/70 rounded-lg border border-emerald-100/50">
                  <div className="text-2xl font-tech font-bold text-emerald-600">28%</div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase">Premium demand</div>
                </div>
                <div className="text-center p-3 bg-white/70 rounded-lg border border-emerald-100/50">
                  <div className="flex items-center justify-center gap-1">
                    <Sparkles size={14} className="text-amber-500" />
                    <span className="text-2xl font-tech font-bold text-emerald-600">Gen Z</span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono uppercase">49% pay premium</div>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeIn>


      </div>
    </section>
  );
}
