import { motion } from "framer-motion";
import { CheckCircle2, Activity } from "lucide-react";
import { roadmapSteps } from "../constants";
import { FadeIn } from "./FadeIn";

export function ImpactVision() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="impact">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.05),transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-tech font-bold text-slate-900 mb-6 leading-tight">
              Roadmap to <br /><span className="text-blue-500">Industrial Validation</span>
            </h2>
            <p className="text-xl text-slate-500 mb-8 italic border-l-4 border-[#A5D9D9] pl-6">
              "We redefine biology to make sustainable aromatics 10x more profitable."
            </p>
            <div className="space-y-8 relative">
              <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-200"></div>
              {roadmapSteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }} className="relative flex gap-6 items-start">
                  <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center z-10 border-4 border-slate-50 ${step.status === 'completed' ? 'bg-[#A5D9D9] text-slate-900' : step.status === 'current' ? 'bg-white border-[#A5D9D9] text-[#A5D9D9]' : 'bg-slate-200 text-slate-400'}`}>
                    {step.status === 'completed' ? <CheckCircle2 size={20} /> : <div className="w-3 h-3 rounded-full bg-current" />}
                  </div>
                  <div className={`p-6 rounded-2xl border flex-1 ${step.status === 'current' ? 'bg-white border-[#A5D9D9]/50 shadow-md' : 'bg-slate-100 border-transparent opacity-80'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-bold uppercase tracking-wider ${step.status === 'current' ? 'text-blue-500' : 'text-slate-500'}`}>{step.year}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-slate-200 text-slate-600 font-medium">{step.phase}</span>
                    </div>
                    <h3 className="text-lg font-tech font-bold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.3} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Activity size={120} className="text-slate-900" /></div>
            <h3 className="text-2xl font-tech font-bold text-slate-900 mb-6">Readiness Status</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'Technology Readiness (TRL)', value: 3.5, max: 9, pct: '40%', color: 'from-blue-500 to-cyan-400', textColor: 'text-blue-500', desc: 'Lab Validated' },
                { label: 'IP Readiness (IPL)', value: 4, max: 9, pct: '45%', color: 'from-purple-500 to-pink-500', textColor: 'text-purple-500', desc: 'Patents Filed' },
                { label: 'Commercial Readiness (CRL)', value: 2, max: 9, pct: '22%', color: 'from-amber-500 to-orange-400', textColor: 'text-amber-500', desc: 'Market Identified' },
                { label: 'Business Readiness (BRL)', value: 3, max: 9, pct: '33%', color: 'from-emerald-500 to-teal-400', textColor: 'text-emerald-500', desc: 'Model Defined' },
                { label: 'Funding Readiness (FRL)', value: 3, max: 9, pct: '33%', color: 'from-rose-500 to-red-400', textColor: 'text-rose-500', desc: 'Grant Funded' },
                { label: 'Team Readiness (TmRL)', value: 4, max: 9, pct: '45%', color: 'from-indigo-500 to-violet-400', textColor: 'text-indigo-500', desc: 'Core Assembled' },
              ].map((item, i) => (
                <div key={item.label} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-slate-600 font-medium text-sm">{item.label}</span>
                    <span className={`text-2xl font-tech font-bold ${item.textColor}`}>{item.value}</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: item.pct }} transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.1 }} className={`h-full bg-gradient-to-r ${item.color}`} />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-mono">
                    <span>1</span><span>{item.desc}</span><span>9</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-400 font-mono mt-4 text-center">*CRL, BRL, FRL, TmRL values are preliminary — pending input from Sumitha</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
