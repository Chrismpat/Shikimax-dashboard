import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  { name: "Market", href: "#market" },
  { name: "Product", href: "#platform" },
  { name: "Economics", href: "#economics" },
  { name: "Products", href: "#products" },
  { name: "Impact", href: "#impact" },
  { name: "Team", href: "#team" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setIsScrolled(latest > 20));

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) { element.scrollIntoView({ behavior: "smooth" }); setIsOpen(false); }
  };

  return (
    <motion.nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <div className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300
        ${isScrolled || isOpen ? "bg-white/90 backdrop-blur-md shadow-lg border border-stone-200 w-full max-w-5xl" : "bg-transparent w-full max-w-7xl"}`}>

        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Logo className="w-8 h-8" />
          <span className="text-xl font-tech font-bold text-slate-900 tracking-tight lowercase">shikimax</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button key={item.name} onClick={() => scrollToSection(item.href)}
              className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors rounded-full hover:bg-stone-100 cursor-pointer">
              {item.name}
            </button>
          ))}
          <button className="ml-4 px-6 py-2.5 bg-slate-900 hover:bg-stone-800 text-white text-sm font-medium rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer">
            Partner
          </button>
        </div>

        <button className="md:hidden text-slate-900 p-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div initial={{ opacity: 0, scale: 0.95, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-xl border border-stone-100 overflow-hidden p-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <button key={item.name} onClick={() => scrollToSection(item.href)}
              className="text-left px-4 py-3 text-lg font-medium text-slate-900 hover:bg-stone-50 rounded-xl transition-colors cursor-pointer">
              {item.name}
            </button>
          ))}
          <button className="mt-2 w-full py-3 bg-slate-900 text-white font-medium rounded-xl cursor-pointer">Partner</button>
        </motion.div>
      )}
    </motion.nav>
  );
}
