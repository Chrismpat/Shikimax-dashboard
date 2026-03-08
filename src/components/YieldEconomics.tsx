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

                  <div className="bg-white p-8 rounded-[24px] border border-stone-100 shadow-sm">
                     <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                           <FlaskConical size={20} className="text-slate-500" />
                        </div>
                        <div>
                           <h4 className="font-tech font-bold text-slate-900">The Problem</h4>
                           <p className="text-sm text-slate-500">Low Efficiency = High Costs</p>
                        </div>
                     </div>
                     <p className="text-slate-600 text-sm leading-relaxed border-l-2 border-slate-200 pl-4">
                        Despite 20+ years of attempts by industry leaders, bio-based aromatics production has failed to achieve commercial scale due to low yields.
                     </p>
                  </div>
               </FadeIn>

               {/* Right Column: Multi-Product Yield Chart */}
               <FadeIn delay={0.2} className="relative">
                  <div className="bg-white p-8 md:p-12 rounded-[32px] border border-stone-100 shadow-xl shadow-stone-200/50 relative overflow-hidden">
                     {/* Molecule Decoration */}
                     <div className="absolute top-8 right-8 opacity-10 pointer-events-none">
                        <svg width="140" height="140" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M50 35 L75 50 L75 80 L50 95 L25 80 L25 50 Z" stroke="currentColor" strokeWidth="2" className="text-slate-900" />
                           <circle cx="50" cy="65" r="15" stroke="currentColor" strokeWidth="2" className="text-slate-900" />
                           <line x1="50" y1="35" x2="50" y2="15" stroke="currentColor" strokeWidth="2" className="text-slate-900" />
                           <text x="50" y="12" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" className="font-mono text-slate-900">COOH</text>
                           <line x1="50" y1="95" x2="50" y2="110" stroke="currentColor" strokeWidth="2" className="text-slate-900" />
                           <text x="50" y="120" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" className="font-mono text-slate-900">OH</text>
                        </svg>
                     </div>

                     <div className="flex items-center justify-between mb-8 relative z-10">
                        <div>
                           <h3 className="text-lg font-bold text-slate-900 font-sans">Yield Comparison</h3>
                           <span className="text-xs font-mono text-slate-400 tracking-tighter uppercase">g/g on Glycerol — Standard vs. SHIKIMAX</span>
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
                                 formatter={(value: number, name: string) => [`${value} g/g`, name === 'standard' ? 'Current Standard' : 'SHIKIMAX']}
                              />
                              <Legend
                                 formatter={(value: string) => value === 'standard' ? 'Current Standard' : 'SHIKIMAX'}
                                 iconType="circle"
                                 wrapperStyle={{ paddingTop: '16px', fontSize: '12px' }}
                              />
                              <Bar dataKey="standard" fill="#94a3b8" radius={[6, 6, 0, 0]} barSize={28} />
                              <Bar dataKey="shikimax" fill="#A5D9D9" radius={[6, 6, 0, 0]} barSize={28} />
                           </BarChart>
                        </ResponsiveContainer>
                     </div>

                     <div className="mt-6 text-right">
                        <p className="text-[10px] text-slate-400 font-mono">*Yield values are placeholder estimates — confirm with lab data</p>
                     </div>
                  </div>
               </FadeIn>
            </div>
         </div>
      </section>
   )
}
