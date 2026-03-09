import { Twitter, Linkedin, Github, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="w-10 h-10" />
              <span className="text-2xl font-black text-white tracking-tight lowercase font-tech">shikimax</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed font-light">
              Redefining biology to make growth dependent on production.
              The future of sustainable aromatics.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 font-tech">Platform</h4>
            <ul className="space-y-4 text-slate-400 font-light text-sm">
              <li><a href="#platform" className="hover:text-[#A5D9D9] transition-colors">Technology</a></li>
              <li><a href="#products" className="hover:text-[#A5D9D9] transition-colors">Applications</a></li>
              <li><a href="#impact" className="hover:text-[#A5D9D9] transition-colors">Sustainability</a></li>
              <li><a href="#team" className="hover:text-[#A5D9D9] transition-colors">Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 font-tech">Contact</h4>
            <ul className="space-y-4 text-slate-400 font-light text-sm">
              <li className="flex items-center gap-3"><Mail size={16} className="text-[#A5D9D9]" /><span>christos.batianis@wur.nl</span></li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-[#A5D9D9]" /><span>Wageningen, NL</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[10px] font-tech tracking-widest uppercase font-bold">© {new Date().getFullYear()} SHIKIMAX. All rights reserved.</p>
          <div className="flex gap-6 text-[10px] text-slate-500 font-tech tracking-widest uppercase font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
