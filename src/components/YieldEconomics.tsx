import { motion } from "framer-motion";
import { BarChart, Bar, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { TrendingUp, Activity, FlaskConical } from "lucide-react";
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
                      We achieve yields that are <span className="font-medium text-slate-900">impossible</span> with standard methods.
                   </p>
                </div>

                <div className="bg-white p-8 rounded-[24px] border border-stone-100 shadow-sm">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                         <Activity size={20} className="text-slate-500" />
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

             {/* Right Column: Chart & Molecule */}
             <FadeIn delay={0.2} className="relative">
                <div className="bg-white p-8 md:p-12 rounded-[32px] border border-stone-100 shadow-xl shadow-stone-200/50 relative overflow-hidden">
                   {/* Molecule Decoration */}
                   <div className="absolute top-8 right-8 opacity-10 pointer-events-none">
                      <svg width="140" height="140" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                         {/* Benzene Ring */}
                         <path d="M50 35 L75 50 L75 80 L50 95 L25 80 L25 50 Z" stroke="currentColor" strokeWidth="2" className="text-slate-900"/>
                         <circle cx="50" cy="65" r="15" stroke="currentColor" strokeWidth="2" className="text-slate-900"/>
                         
                         {/* COOH Group (Top) */}
                         <line x1="50" y1="35" x2="50" y2="15" stroke="currentColor" strokeWidth="2" className="text-slate-900"/>
                         <text x="50" y="12" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" className="font-mono text-slate-900">COOH</text>
                         
                         {/* OH Group (Bottom) */}
                         <line x1="50" y1="95" x2="50" y2="110" stroke="currentColor" strokeWidth="2" className="text-slate-900"/>
                         <text x="50" y="120" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" className="font-mono text-slate-900">OH</text>
                      </svg>
                   </div>

                   <div className="flex items-center justify-between mb-12 relative z-10">
                      <div>
                         <h3 className="text-lg font-bold text-slate-900 font-sans">Yield Comparison</h3>
                         <span className="text-xs font-mono text-slate-400 tracking-tighter uppercase">4-Hydroxybenzoic Acid (g/g on Glycerol)</span>
                      </div>
                   </div>
                   
                   <div className="h-80 w-full relative z-10">
                      <ResponsiveContainer width="100%" height="100%">
                         <BarChart data={yieldData} margin={{ top: 20, right: 30, left: 0, bottom: 40 }} barSize={80}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis 
                               dataKey="name" 
                               axisLine={false} 
                               tickLine={false} 
                               tick={{fill: '#64748b', fontSize: 14, fontWeight: 600}} 
                               dy={15}
                               interval={0}
                            />
                            <YAxis 
                               axisLine={false} 
                               tickLine={false} 
                               tick={{fill: '#94a3b8', fontSize: 12}} 
                               domain={[0, 0.6]}
                            />
                            <Tooltip 
                               cursor={{fill: '#f8fafc', radius: 12}} 
                               contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '12px' }}
                               formatter={(value: number) => [`${value} g/g`, 'Yield']}
                            />
                            <Bar dataKey="Yield" radius={[12, 12, 0, 0]}>
                               {yieldData.map((entry, index) => (
                                  <Cell 
                                     key={`cell-${index}`} 
                                     fill={index === 1 ? '#A5D9D9' : '#64748b'} 
                                     className="transition-all duration-500 hover:opacity-80"
                                  />
                               ))}
                            </Bar>
                         </BarChart>
                      </ResponsiveContainer>
                      
                      {/* Annotations */}
                      <div className="absolute bottom-24 left-[25%] -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded font-mono opacity-0 md:opacity-100 transition-opacity">
                         ~0.20 g/g
                      </div>
                      <div className="absolute top-12 right-[25%] translate-x-1/2 bg-[#A5D9D9] text-slate-900 text-xs px-2 py-1 rounded font-mono font-bold shadow-lg opacity-0 md:opacity-100 transition-opacity">
                         ~0.50 g/g
                      </div>
                   </div>

                   <div className="mt-6 text-right">
                      <p className="text-[10px] text-slate-400 font-mono">*Based on public data for standard microbial synthesis</p>
                   </div>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  )
}
