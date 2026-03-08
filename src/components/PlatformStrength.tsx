import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock, FlaskConical } from "lucide-react";
import { platformFeatures, platformProducts } from "../constants";
import { FadeIn } from "./FadeIn";

export function PlatformStrength() {
    const [activeView, setActiveView] = useState<"logic" | "platform">("logic");
    const [activeProduct, setActiveProduct] = useState(0);
    const [isProducing, setIsProducing] = useState(false);

    useEffect(() => {
        if (activeView === "logic") {
            const interval = setInterval(() => setIsProducing(prev => !prev), 3000);
            return () => clearInterval(interval);
        }
    }, [activeView]);

    return (
        <section id="platform" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-tech font-bold text-slate-900 mb-6 tracking-tight">The Shikimax Biology</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        We don't just grow cells. We program <span className="text-slate-900 font-medium">biological logic gates</span> that compel efficiency.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2} className="flex justify-center mb-12">
                    <div className="bg-stone-100 p-1 rounded-lg inline-flex border border-stone-200">
                        <button onClick={() => setActiveView("logic")}
                            className={`px-6 py-2 rounded-md text-sm font-mono transition-all ${activeView === "logic" ? "bg-white text-slate-900 shadow-sm border border-stone-200" : "text-slate-500 hover:text-slate-900"}`}>
                    // PRODUCTION_LOGIC
                        </button>
                        <button onClick={() => setActiveView("platform")}
                            className={`px-6 py-2 rounded-md text-sm font-mono transition-all ${activeView === "platform" ? "bg-white text-slate-900 shadow-sm border border-stone-200" : "text-slate-500 hover:text-slate-900"}`}>
                    // PRODUCT_PORTFOLIO
                        </button>
                    </div>
                </FadeIn>

                <FadeIn delay={0.4} className="relative w-full max-w-5xl mx-auto min-h-[500px] bg-stone-50 rounded-xl border border-stone-200 overflow-hidden flex flex-col items-center justify-center mb-24 shadow-sm p-8 md:p-12">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 pointer-events-none"></div>

                    <AnimatePresence mode="wait">
                        {activeView === "logic" ? (
                            <motion.div key="logic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="w-full h-full flex flex-col items-center justify-center relative z-10">
                                <div className="absolute top-0 left-0 p-4 font-mono text-xs text-stone-400">
                                    STATUS: {isProducing ? "ACTIVE_CYCLE" : "CHECKING_CONSTRAINTS"}
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="w-16 h-16 rounded-full bg-white border-2 border-stone-300 flex items-center justify-center shadow-sm z-10">
                                            <span className="font-mono text-xs font-bold text-stone-500">INPUT</span>
                                        </div>
                                        <span className="text-xs font-mono text-stone-400">Renewables</span>
                                    </div>
                                    <div className="hidden md:flex flex-1 w-32 h-[2px] bg-stone-200 relative">
                                        <motion.div className="absolute inset-0 bg-stone-800" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1, repeat: Infinity }} />
                                    </div>
                                    <div className="md:hidden w-[2px] h-16 bg-stone-200"></div>
                                    <div className="relative p-8 bg-white rounded-lg border-2 border-stone-800 shadow-lg flex flex-col items-center gap-4 min-w-[220px]">
                                        <div className="absolute -top-3 bg-stone-800 text-white px-2 py-0.5 text-[10px] font-mono rounded">ENGINEERED LOGIC</div>
                                        <div className="flex items-center gap-4 w-full justify-between">
                                            <span className="font-mono text-sm text-stone-500">Make Aromatics</span>
                                            <motion.div animate={{ backgroundColor: isProducing ? "#10b981" : "#ef4444", scale: isProducing ? [1, 1.2, 1] : 1 }} className="w-3 h-3 rounded-full" />
                                        </div>
                                        <div className="w-full h-[1px] bg-stone-200 my-1"></div>
                                        <div className="flex items-center gap-4 w-full justify-between">
                                            <span className="font-mono text-sm text-stone-500">Microbe Growth</span>
                                            {isProducing ? <Unlock className="w-4 h-4 text-emerald-500" /> : <Lock className="w-4 h-4 text-red-500" />}
                                        </div>
                                    </div>
                                    <div className="hidden md:flex flex-1 w-32 h-[2px] bg-stone-200 relative">
                                        {isProducing && <motion.div className="absolute inset-0 bg-emerald-500" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 0.5 }} />}
                                    </div>
                                    <div className="md:hidden w-[2px] h-16 bg-stone-200"></div>
                                    <div className="flex flex-col items-center gap-2">
                                        <motion.div animate={{ borderColor: isProducing ? "#10b981" : "#e5e7eb", boxShadow: isProducing ? "0 0 20px rgba(16, 185, 129, 0.2)" : "none" }}
                                            className="w-16 h-16 rounded-full bg-white border-2 flex items-center justify-center shadow-sm z-10 transition-colors duration-300">
                                            <span className={`font-mono text-xs font-bold ${isProducing ? "text-emerald-600" : "text-stone-300"}`}>GROWS</span>
                                        </motion.div>
                                        <span className="text-xs font-mono text-stone-400">Success</span>
                                    </div>
                                </div>

                                <div className="mt-12 max-w-xl text-center">
                                    <p className="font-mono text-base text-stone-600 leading-relaxed">
                                        <span className="text-stone-900 font-bold">Growth Coupling:</span><br />
                                        Renewable resources are used to produce aromatics in a growth-coupled fashion.
                                        The microbe grows <span className="font-bold underline decoration-emerald-500 decoration-2 underline-offset-4 text-stone-900">only</span> when it produces aromatics.
                                    </p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div key="platform" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="w-full h-full flex flex-col items-center relative z-10">
                                <div className="absolute top-0 left-0 p-4 font-mono text-xs text-stone-400">SYSTEM: 5-PRECURSOR_CHASSIS</div>

                                <div className="flex flex-col md:flex-row w-full gap-6 md:gap-8 items-center justify-between h-full mt-8 px-2 md:px-8">

                                    {/* Precursors Selectors */}
                                    <div className="flex flex-row md:flex-col gap-2 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 hide-scrollbar snap-x">
                                        {platformProducts.map((p, i) => (
                                            <button key={p.short} onClick={() => setActiveProduct(i)}
                                                className={`group relative pl-4 pr-6 py-2.5 rounded border text-left transition-all flex-shrink-0 snap-center min-w-[140px] ${activeProduct === i ? "bg-white border-stone-800 shadow-md" : "bg-stone-50 border-stone-200 hover:border-stone-400"}`}>
                                                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l ${p.bg}`}></div>
                                                <span className="font-mono text-[10px] text-stone-400 block mb-0.5">PRECURSOR_0{i + 1}</span>
                                                <span className={`font-tech font-bold text-sm ${activeProduct === i ? "text-stone-900" : "text-stone-500"}`}>{p.short}</span>
                                            </button>
                                        ))}
                                    </div>

                                    {/* Core Graphic */}
                                    <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center flex-shrink-0">
                                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-dashed border-stone-300" />
                                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-4 rounded-full border border-stone-200" />

                                        <div className="absolute -top-6 text-center w-full">
                                            <span className="font-mono text-xs text-stone-400 bg-stone-50 px-2 tracking-wider">SHIKIMAX CELL</span>
                                        </div>

                                        <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-full border-2 border-stone-800 flex items-center justify-center shadow-xl z-10 overflow-hidden">
                                            <motion.div key={activeProduct} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className={`absolute inset-0 opacity-10 ${platformProducts[activeProduct].bg}`} />
                                            <FlaskConical className="w-10 h-10 md:w-12 md:h-12 text-stone-800 relative z-10" />
                                        </div>

                                        {/* Ejecting molecules animation */}
                                        {[...Array(6)].map((_, i) => (
                                            <motion.div key={i} className={`absolute w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${platformProducts[activeProduct].bg}`}
                                                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                                                animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], x: Math.cos(i * 60 * (Math.PI / 180)) * 140, y: Math.sin(i * 60 * (Math.PI / 180)) * 140 }}
                                                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3, ease: "easeOut" }} />
                                        ))}
                                    </div>

                                    {/* Downstream Conversion Panel */}
                                    <div className="w-full md:w-64 p-5 bg-white rounded-xl border border-stone-200 shadow-sm flex flex-col gap-4">
                                        <div>
                                            <div className="font-mono text-[10px] text-stone-400 mb-1 tracking-wider">CORE_PRECURSOR</div>
                                            <motion.div key={platformProducts[activeProduct].name} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className={`font-tech text-lg md:text-xl font-bold leading-tight ${platformProducts[activeProduct].textColor}`}>
                                                {platformProducts[activeProduct].name}
                                            </motion.div>
                                        </div>
                                        <div className="w-full h-[1px] bg-stone-100"></div>
                                        <div>
                                            <div className="font-mono text-[10px] text-stone-400 mb-2 tracking-wider">CONVERTS_TO</div>
                                            <div className="flex flex-wrap gap-2">
                                                {platformProducts[activeProduct].convertsTo.map((derivative, idx) => (
                                                    <motion.span key={derivative} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} className="text-xs font-medium px-2 py-1 bg-stone-50 border border-stone-200 rounded text-stone-600">
                                                        {derivative}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </FadeIn>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {platformFeatures.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-6 rounded-xl bg-white border border-stone-100 hover:border-stone-300 hover:shadow-lg transition-all duration-300"
                        >
                            <div className={`w-10 h-10 rounded-lg ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className={`w-5 h-5 ${feature.color}`} />
                            </div>
                            <h3 className="text-lg font-tech font-bold text-stone-900 mb-2">{feature.title}</h3>
                            <p className="text-sm text-stone-500 leading-relaxed font-light">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
