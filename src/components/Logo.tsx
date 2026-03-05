import { motion } from "framer-motion";

export function Logo({ className = "w-16 h-16" }: { className?: string }) {
  const segments = [
    { x: 15, y1: 35, y2: 45 },
    { x: 15, y1: 55, y2: 65 },
    { x: 32.5, y1: 22, y2: 38 },
    { x: 32.5, y1: 52, y2: 52 },
    { x: 32.5, y1: 66, y2: 78 },
    { x: 50, y1: 10, y2: 10 },
    { x: 50, y1: 24, y2: 44 },
    { x: 50, y1: 56, y2: 76 },
    { x: 50, y1: 90, y2: 90 },
    { x: 67.5, y1: 22, y2: 22 },
    { x: 67.5, y1: 36, y2: 64 },
    { x: 67.5, y1: 78, y2: 78 },
    { x: 85, y1: 34, y2: 56 },
    { x: 85, y1: 70, y2: 70 }, 
  ];

  return (
    <motion.svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`${className} text-[#A5D9D9]`} 
    >
      {segments.map((s, i) => {
        const y2Safe = s.y1 === s.y2 ? s.y2 + 0.01 : s.y2;
        return (
          <motion.line
            key={i}
            x1={s.x}
            y1={s.y1}
            x2={s.x}
            y2={y2Safe}
            stroke="currentColor"
            strokeWidth="11"
            strokeLinecap="round"
            initial={{ opacity: 0.2 }}
            animate={{ 
              opacity: [1, 0.2, 1],
            }}
            transition={{ 
              duration: 0.15 + Math.random() * 0.4,
              repeat: Infinity,
              repeatDelay: 3 + Math.random() * 8, 
              delay: i * 0.05 
            }}
          />
        );
      })}
    </motion.svg>
  );
}
