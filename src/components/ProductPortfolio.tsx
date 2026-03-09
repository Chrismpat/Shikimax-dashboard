import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

export function ProductPortfolio() {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="mb-8">
                        <h3 className="text-2xl font-tech font-bold text-slate-900 flex items-center gap-3">
                            <span className="w-2 h-8 bg-[#A5D9D9] rounded-full"></span>
                            Product Portfolio
                        </h3>
                        <p className="text-slate-500 mt-2">Our product portfolio — functionalized aromatics produced via the shikimate pathway.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {/* 4-HBA */}
                        <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}
                            className="group relative bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-5 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-emerald-200/20 transition-shadow duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-100 text-emerald-700 border border-emerald-200">In Pipeline</span>
                            </div>
                            <div className="flex items-center justify-center h-32 mb-4">
                                <svg viewBox="0 -16 120 160" className="w-24 h-28 transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="60,20 95,40 95,80 60,100 25,80 25,40" fill="none" stroke="#334155" strokeWidth="2" />
                                    <polygon points="60,32 85,46 85,74 60,88 35,74 35,46" fill="none" stroke="#334155" strokeWidth="1.2" />
                                    <line x1="60" y1="100" x2="60" y2="118" stroke="#059669" strokeWidth="2.5" />
                                    <text x="60" y="136" textAnchor="middle" fill="#059669" fontSize="16" fontWeight="900" className="font-mono">OH</text>
                                    <line x1="60" y1="20" x2="60" y2="4" stroke="#0f172a" strokeWidth="2.5" />
                                    <text x="60" y="-2" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="900" className="font-mono">COOH</text>
                                </svg>
                            </div>
                            <h4 className="text-lg font-tech font-bold text-slate-900 text-center">4-HBA</h4>
                            <p className="text-xs text-slate-400 text-center font-mono mt-1">4-hydroxybenzoate</p>
                        </motion.div>

                        {/* 3-HBA */}
                        <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}
                            className="group relative bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-5 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-emerald-200/20 transition-shadow duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-100 text-emerald-700 border border-emerald-200">In Pipeline</span>
                            </div>
                            <div className="flex items-center justify-center h-32 mb-4">
                                <svg viewBox="-10 -16 140 170" className="w-24 h-28 transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="60,20 95,40 95,80 60,100 25,80 25,40" fill="none" stroke="#334155" strokeWidth="2" />
                                    <polygon points="60,32 85,46 85,74 60,88 35,74 35,46" fill="none" stroke="#334155" strokeWidth="1.2" />
                                    <line x1="25" y1="80" x2="8" y2="92" stroke="#059669" strokeWidth="2.5" />
                                    <text x="4" y="108" textAnchor="middle" fill="#059669" fontSize="16" fontWeight="900" className="font-mono">OH</text>
                                    <line x1="60" y1="20" x2="60" y2="4" stroke="#0f172a" strokeWidth="2.5" />
                                    <text x="60" y="-2" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="900" className="font-mono">COOH</text>
                                </svg>
                            </div>
                            <h4 className="text-lg font-tech font-bold text-slate-900 text-center">3-HBA</h4>
                            <p className="text-xs text-slate-400 text-center font-mono mt-1">3-hydroxybenzoate</p>
                        </motion.div>

                        {/* Salicylate (2-HBA) */}
                        <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}
                            className="group relative bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-5 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-emerald-200/20 transition-shadow duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-100 text-emerald-700 border border-emerald-200">In Pipeline</span>
                            </div>
                            <div className="flex items-center justify-center h-32 mb-4">
                                <svg viewBox="-10 -16 140 160" className="w-24 h-28 transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="60,20 95,40 95,80 60,100 25,80 25,40" fill="none" stroke="#334155" strokeWidth="2" />
                                    <polygon points="60,32 85,46 85,74 60,88 35,74 35,46" fill="none" stroke="#334155" strokeWidth="1.2" />
                                    <line x1="25" y1="40" x2="6" y2="26" stroke="#059669" strokeWidth="2.5" />
                                    <text x="2" y="18" textAnchor="middle" fill="#059669" fontSize="16" fontWeight="900" className="font-mono">OH</text>
                                    <line x1="60" y1="20" x2="60" y2="4" stroke="#0f172a" strokeWidth="2.5" />
                                    <text x="60" y="-2" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="900" className="font-mono">COOH</text>
                                </svg>
                            </div>
                            <h4 className="text-lg font-tech font-bold text-slate-900 text-center">Salicylate</h4>
                            <p className="text-xs text-slate-400 text-center font-mono mt-1">2-hydroxybenzoate</p>
                        </motion.div>

                        {/* pABA */}
                        <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}
                            className="group relative bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-5 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-purple-200/20 transition-shadow duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-purple-100 text-purple-700 border border-purple-200">Upcoming</span>
                            </div>
                            <div className="flex items-center justify-center h-32 mb-4">
                                <svg viewBox="0 -16 120 160" className="w-24 h-28 transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="60,20 95,40 95,80 60,100 25,80 25,40" fill="none" stroke="#334155" strokeWidth="2" />
                                    <polygon points="60,32 85,46 85,74 60,88 35,74 35,46" fill="none" stroke="#334155" strokeWidth="1.2" />
                                    <line x1="60" y1="100" x2="60" y2="118" stroke="#7c3aed" strokeWidth="2.5" />
                                    <text x="60" y="136" textAnchor="middle" fill="#7c3aed" fontSize="15" fontWeight="900" className="font-mono">NH₂</text>
                                    <line x1="60" y1="20" x2="60" y2="4" stroke="#0f172a" strokeWidth="2.5" />
                                    <text x="60" y="-2" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="900" className="font-mono">COOH</text>
                                </svg>
                            </div>
                            <h4 className="text-lg font-tech font-bold text-slate-900 text-center">pABA</h4>
                            <p className="text-xs text-slate-400 text-center font-mono mt-1">4-aminobenzoate</p>
                        </motion.div>

                        {/* Anthranilate */}
                        <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300 }}
                            className="group relative bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-5 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:shadow-purple-200/20 transition-shadow duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-purple-100 text-purple-700 border border-purple-200">Upcoming</span>
                            </div>
                            <div className="flex items-center justify-center h-32 mb-4">
                                <svg viewBox="-10 -16 140 160" className="w-24 h-28 transition-transform duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="60,20 95,40 95,80 60,100 25,80 25,40" fill="none" stroke="#334155" strokeWidth="2" />
                                    <polygon points="60,32 85,46 85,74 60,88 35,74 35,46" fill="none" stroke="#334155" strokeWidth="1.2" />
                                    <line x1="25" y1="40" x2="6" y2="26" stroke="#7c3aed" strokeWidth="2.5" />
                                    <text x="2" y="18" textAnchor="middle" fill="#7c3aed" fontSize="15" fontWeight="900" className="font-mono">NH₂</text>
                                    <line x1="60" y1="20" x2="60" y2="4" stroke="#0f172a" strokeWidth="2.5" />
                                    <text x="60" y="-2" textAnchor="middle" fill="#0f172a" fontSize="14" fontWeight="900" className="font-mono">COOH</text>
                                </svg>
                            </div>
                            <h4 className="text-lg font-tech font-bold text-slate-900 text-center">Anthranilate</h4>
                            <p className="text-xs text-slate-400 text-center font-mono mt-1">2-aminobenzoate</p>
                        </motion.div>
                    </div>

                    <div className="mt-6 flex items-center gap-6 text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                            <span className="font-mono">IN PIPELINE — Active development</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                            <span className="font-mono">UPCOMING — Pathway validated</span>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
