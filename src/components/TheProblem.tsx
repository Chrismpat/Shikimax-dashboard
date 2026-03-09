import { FlaskConical } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function TheProblem() {
    return (
        <section className="py-20 bg-white relative">
            <div className="max-w-4xl mx-auto px-6">
                <FadeIn className="flex flex-col items-center text-center gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
                            <FlaskConical size={14} className="text-slate-400" />
                            <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Industry Challenge</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-tech font-bold text-slate-900 mb-4 tracking-tight leading-tight">
                            The <span className="text-red-400">Yield Problem</span>
                        </h2>
                        <p className="text-slate-500 text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            Low Efficiency = High Costs
                        </p>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-[24px] border border-stone-100 shadow-sm max-w-2xl w-full">
                        <p className="text-slate-600 text-base leading-relaxed border-l-2 border-red-300 pl-5 text-left">
                            Despite 20+ years of attempts by industry leaders, bio-based aromatics production has failed to achieve commercial scale due to low yields.
                            Current fermentation approaches reach only <span className="font-bold text-slate-900">5–15% of theoretical maximum</span>, making bio-aromatics uncompetitive with petrochemical routes.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
