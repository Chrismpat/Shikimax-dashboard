import { motion } from "framer-motion";
import { FlaskConical, Linkedin } from "lucide-react";
import { teamMembers } from "../constants";
import { FadeIn } from "./FadeIn";

export function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-sm mb-6">
            <FlaskConical size={14} className="text-[#A5D9D9]" />
            <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Wageningen University & Research</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-tech font-bold text-slate-900 mb-6">Our Team</h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto rounded-full opacity-10"></div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <FadeIn key={i} delay={i * 0.1} className="group bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="relative h-64 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-4 right-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-blue-500 hover:text-white transition-colors text-slate-900">
                    <Linkedin size={18} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-tech text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-500 transition-colors">{member.name}</h3>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
