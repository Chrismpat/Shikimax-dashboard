import {
  Users, Briefcase, RefreshCw, Globe,
  Activity, Zap, ShieldCheck, Database
} from "lucide-react";
import willowBarkImg from "./assets/willow_bark.png";

export const galleryProducts = [
  {
    id: "skincare",
    category: "Perfumery & Beauty",
    title: "Acne & Exfoliation",
    image: willowBarkImg,
    stats: { market: "€600M TAM", growth: "100% Bio" },
    desc: "Premium bio-based salicylic acid for anti-acne creams and exfoliants. Meeting the demand for clean label skincare. Market Size: ~€600M."
  },
  {
    id: "cosmetics",
    category: "Perfumery & Beauty",
    title: "Skin Lightening",
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop",
    stats: { market: "HQ / Mequinol", growth: "Arbutin" },
    desc: "Eliminating the need for synthetic hydroquinone. High-value application for Perfumery & Beauty."
  },
  {
    id: "preservatives",
    category: "Personal Care",
    title: "Bio-Preservatives",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    stats: { market: "4-HBA", growth: "Parabens" },
    desc: "100% Bio-based 4-HBA, a critical precursor for sustainable parabens. Eliminating petrochemicals from shelf-life extenders."
  },
  {
    id: "flavors",
    category: "Taste, Texture & Health",
    title: "Natural Flavors",
    image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=800&auto=format&fit=crop",
    stats: { market: "Vanillin", growth: "High-Yield" },
    desc: "High-yield de novo production of Vanillin. Addressing the Taste, Texture & Health market.",
    futureMarket: true
  },
  {
    id: "vitamins",
    category: "Taste, Texture & Health",
    title: "Vitamins & UV Filters",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop",
    stats: { market: "Aminobenzoate", growth: "Folic Acid" },
    desc: "Sustainable sourcing for critical vitamin production (B-complex) and UV filter precursors.",
    futureMarket: true
  }
];

export const businessModels = [
  { icon: Briefcase, title: "Licensing", desc: "Technology transfer of optimized strains to manufacturing partners." },
  { icon: Users, title: "Co-Development", desc: "Joint ventures for novel molecule discovery and scale-up." },
  { icon: RefreshCw, title: "Supply Agreements", desc: "Long-term offtake contracts for high-volume ingredients." },
  { icon: Globe, title: "Partnerships", desc: "Strategic alliances with global FMCG and chemical leaders." }
];

export const platformFeatures = [
  { icon: Activity, title: "Growth Coupling", desc: "The strain is genetically wired so it can only grow when it produces the target ingredient. No production means no growth.", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Database, title: "Modular Architecture", desc: "A standardized chassis separating the 'operating system' (survival) from the 'application' (production).", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: ShieldCheck, title: "Industrial Robustness", desc: "High tolerance to product toxicity and process variability (TRL 4).", color: "text-purple-600", bg: "bg-purple-50" }
];

export const platformProducts = [
  { name: "4-hydroxybenzoate", short: "4-HBA", convertsTo: ["Phenol", "Parabens", "Muconic Acid"], color: "#3B82F6", textColor: "text-blue-500", bg: "bg-blue-500" },
  { name: "3-hydroxybenzoate", short: "3-HBA", convertsTo: ["Resorcinol", "Adipic Acid", "Pharmaceuticals"], color: "#10B981", textColor: "text-emerald-500", bg: "bg-emerald-500" },
  { name: "Para-aminobenzoate", short: "pABA", convertsTo: ["Azo Dyes", "Folic Acid", "UV Filters"], color: "#F59E0B", textColor: "text-amber-500", bg: "bg-amber-500" },
  { name: "Salicylate", short: "SA", convertsTo: ["Aspirin", "Fragrances", "Agrochemicals"], color: "#8B5CF6", textColor: "text-purple-500", bg: "bg-purple-500" },
  { name: "Anthranilate", short: "AA", convertsTo: ["Indigo Dyes", "Perfumes", "Flavorings"], color: "#F43F5E", textColor: "text-rose-500", bg: "bg-rose-500" }
];

export const teamMembers = [
  { name: "Dr. Christos Batianis", role: "Co-Inventor & Team Lead", image: "https://page.gensparksite.com/v1/base64_upload/3bb00a55355c64aa26a789e45012979f", tags: ["Strain Engineering", "Project Mgmt"], color: "bg-teal-50 text-teal-700 border-teal-100" },
  { name: "Dr. Lyon Bruinsma", role: "Co-Inventor & Research Lead", image: "https://page.gensparksite.com/v1/base64_upload/9e3e70da21e07353ed7381322ae61a3d", tags: ["Metabolic Eng", "R&D Strategy"], color: "bg-blue-50 text-blue-700 border-blue-100" },
  { name: "Prof. Vitor Martins dos Santos", role: "Co-Inventor & Strategic Advisor", image: "https://page.gensparksite.com/v1/base64_upload/41252c603e3381ad2c964b96c6f4a5b3", tags: ["Sys Bio", "Tech Transfer"], color: "bg-purple-50 text-purple-700 border-purple-100" },
  { name: "Dr. Sumitha K Reddy", role: "Commercial Strategy Lead", image: "https://page.gensparksite.com/v1/base64_upload/50d54aba7de30220d992aa21e11a7c1d", tags: ["Business Dev", "Market Analysis"], color: "bg-rose-50 text-rose-700 border-rose-100" }
];

export const marketData1 = [
  { name: '2024', value: 200 }, { name: '2026', value: 250 },
  { name: '2028', value: 300 }, { name: '2030', value: 350 }, { name: '2032', value: 400 },
];

export const yieldData = [
  { name: '4-HBA', standard: 0.20, shikimax: 0.50 },
  { name: 'Salicylic Acid', standard: 0.10, shikimax: 0.40 },
  { name: 'pABA', standard: 0.15, shikimax: 0.45 },
  { name: 'Anthranilate', standard: 0.12, shikimax: 0.38 },
];

export const roadmapSteps = [
  { year: "Now", title: "Starting Point", phase: "Validation", desc: "Lab validation complete, platform patent filed (IPL 4), TRL 3-4 secured.", status: "completed" },
  { year: "2026", title: "Strain Optimization", phase: "Development", desc: "Improved productivity and robustness. Reach TRL 5-6 with defined process parameters.", status: "current" },
  { year: "2027", title: "Partners & Prototype", phase: "Scale-Up", desc: "2 pilots with partners. Commercial-scale prototype demonstrating scalability.", status: "upcoming" }
];
