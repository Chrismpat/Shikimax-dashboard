import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { FlaskConical } from "lucide-react";
import { yieldData } from "../constants";
import { FadeIn } from "./FadeIn";

export function YieldEconomics() {
   return (
      <section id="economics" className="py-24 bg-slate-50 relative overflow-hidden border-t border-stone-100">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               {/* Left Column: Text & Context */}
               <FadeIn className="flex flex-col gap-8">
                  <div>
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A5D9D9]/10 border border-[#A5D9D9]/20 mb-6">
                        <FlaskConical size={14} className="text-[#A5D9D9]" />
                        <span className="text-[10px] font-bold tracking-widest text-[#56a7a7] uppercase">Lab Validated Performance</span>
                     </div>
                     <h2 className="text-4xl md:text-6xl font-tech font-bold text-slate-900 mb-4 tracking-tight leading-tight">
                        Unprecedented <span className="text-[#A5D9D9]">Yield</span>
                     </h2>
                     <p className="text-slate-500 text-xl font-light leading-relaxed max-w-lg">
                        We achieve yields across our product portfolio that are <span className="font-medium text-slate-900">impossible</span> with standard methods.
                     </p>
                  </div>
               </FadeIn>

               {/* Right Column: Multi-Product Yield Chart */}
               <FadeIn delay={0.2} className="relative">
                  <div className="bg-white p-8 md:p-12 rounded-[32px] border border-stone-100 shadow-xl shadow-stone-200/50 relative overflow-hidden">

                     <div className="flex items-center justify-between mb-8 relative z-10">
                        <div>
                           <h3 className="text-lg font-bold text-slate-900 font-sans">Yield Comparison</h3>
                           <span className="text-xs font-mono text-slate-400 tracking-tighter uppercase">g/g on Glycerol — Standard vs. shikimax</span>
                        </div>
                     </div>

                     <div className="h-80 w-full relative z-10">
                        <ResponsiveContainer width="100%" height="100%">
                           <BarChart data={yieldData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }} barGap={4} barCategoryGap="25%">
                              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                              <XAxis
                                 dataKey="name"
                                 axisLine={false}
                                 tickLine={false}
                                 tick={{ fill: '#64748b', fontSize: 11, fontWeight: 600 }}
                                 dy={10}
                                 interval={0}
                              />
                              <YAxis
                                 axisLine={false}
                                 tickLine={false}
                                 tick={{ fill: '#94a3b8', fontSize: 12 }}
                                 domain={[0, 0.6]}
                                 tickFormatter={(v: number) => `${v}`}
                              />
                              <Tooltip
                                 cursor={{ fill: '#f8fafc', radius: 8 }}
                                 contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                                 formatter={(value: number, name: string) => [`${value} g/g`, name === 'standard' ? 'Current Standard' : 'shikimax']}
                              />
                              <Legend
                                 formatter={(value: string) => value === 'standard' ? 'Current Standard' : 'shikimax'}
                                 iconType="circle"
                                 wrapperStyle={{ paddingTop: '16px', fontSize: '12px' }}
                              />
                              <Bar dataKey="standard" fill="#94a3b8" radius={[6, 6, 0, 0]} barSize={28} />
                              <Bar dataKey="shikimax" fill="#A5D9D9" radius={[6, 6, 0, 0]} barSize={28} />
                           </BarChart>
                        </ResponsiveContainer>
                     </div>

                     <div className="mt-6 text-right">
                        <p className="text-[10px] text-slate-400 font-mono">*based on public data</p>
                     </div>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>
   )
}
