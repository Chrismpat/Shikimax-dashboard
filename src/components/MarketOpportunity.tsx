import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
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
          <p className="text-slate-500 text-lg">Driven by urgent consumer awareness.</p>
        </FadeIn>

        <FadeIn delay={0.2} className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-x-auto pb-8 snap-x">
          <motion.div whileHover={{ y: -5 }} className="bg-white border border-stone-100 rounded-2xl p-6 min-w-[300px] snap-center shadow-md">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-tech font-bold text-slate-900">Total Market</h3>
                <p className="text-sm text-slate-500 mt-1">Chemical Building Blocks</p>
              </div>
              <div className="text-[#A5D9D9] font-tech font-bold text-xl">&gt;$400B</div>
            </div>
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={marketData1}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A5D9D9" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#A5D9D9" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #f1f5f9', color: '#0f172a' }} itemStyle={{ color: '#A5D9D9' }} />
                  <Area type="monotone" dataKey="value" stroke="#A5D9D9" fillOpacity={1} fill="url(#colorVal)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-4 text-sm text-slate-500 border-t border-slate-50 pt-4">Petroleum-derived aromatics make up 40% of all chemical building blocks.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white border border-stone-100 rounded-2xl p-6 min-w-[300px] snap-center shadow-md">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-tech font-bold text-slate-900">Addressable</h3>
                <p className="text-sm text-slate-500 mt-1">Consumer Awareness</p>
              </div>
              <div className="text-blue-500 font-tech font-bold text-xl">$40-50B</div>
            </div>
            <div className="flex items-center justify-center h-40">
                <div className="text-center">
                    <div className="text-5xl font-bold text-slate-900 mb-2">28%</div>
                    <div className="text-sm text-slate-500">Consumers pay premium</div>
                </div>
            </div>
            <p className="mt-4 text-sm text-slate-500 border-t border-slate-50 pt-4">Urgent consumer awareness driving demand for bio-alternatives.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="bg-white border border-stone-100 rounded-2xl p-6 min-w-[300px] snap-center shadow-md">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-tech font-bold text-slate-900">Demographics</h3>
                <p className="text-sm text-slate-500 mt-1">Willing to pay premium</p>
              </div>
              <div className="text-purple-500 font-tech font-bold text-xl">Gen Z</div>
            </div>
            <div className="h-40 w-full flex items-end justify-between px-4 gap-4">
               <div className="w-full h-full flex items-end justify-around gap-4">
                  <div className="w-16 bg-slate-200 h-[28%] rounded-t-md relative group">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-400">Avg</div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-slate-600 font-bold">28%</div>
                  </div>
                  <div className="w-16 bg-purple-200 h-[48%] rounded-t-md relative group">
                     <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-400">Mill</div>
                     <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-purple-700 font-bold">48%</div>
                  </div>
                  <div className="w-16 bg-purple-500 h-[49%] rounded-t-md relative group shadow-lg shadow-purple-200">
                     <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-purple-600 font-bold">Gen Z</div>
                     <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-white font-bold">49%</div>
                  </div>
               </div>
            </div>
            <p className="mt-4 text-sm text-slate-500 border-t border-slate-50 pt-4">Nearly half of younger generations demand sustainable options.</p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
