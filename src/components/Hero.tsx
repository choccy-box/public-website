import logoWebp from "@/assets/choccylogo.webp";
import logoPng from "@/assets/choccylogo.png";
import { RegisterDialog } from "./RegisterDialog";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-cream" aria-label="Hero section">
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40 relative">
        <div className="mx-auto max-w-5xl">
          {/* Logo with Animation */}
          <div className="flex flex-col items-center gap-10 mb-12">
            <picture className="animate-scale">
              <source srcSet={logoWebp} type="image/webp" />
              <img
                src={logoPng}
                alt="Choccy Box - Intelligent workout management system logo"
                className="w-128 h-auto drop-shadow-2xl"
                width="550"
                height="550"
                loading="eager"
                fetchPriority="high"
              />
            </picture>

            {/* Title with Bold Display Font */}
            <h1 className="font-display text-6xl md:text-8xl text-charcoal text-center animate-slide-up delay-100 tracking-tight">
              Choccy Box
            </h1>
          </div>

          {/* Tagline Card */}
          <div className="max-w-4xl mx-auto mb-12 animate-slide-up delay-200">
            <div className="bg-gradient-sage rounded-3xl refined-shadow-lg p-10 md:p-12 relative overflow-hidden border border-white/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
              <p className="text-2xl md:text-4xl text-white text-center font-bold relative z-10 leading-tight">
                Program. Display. Empower.
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="text-center animate-slide-up delay-300 mb-12">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light mb-10">
              The intelligent workout management system that empowers gym owners and trainers to focus on what matters most—their members.
            </p>
            
            <RegisterDialog>
              <button className="inline-flex items-center gap-3 bg-gradient-sage text-white text-lg font-bold px-8 py-4 rounded-full refined-shadow-lg hover:refined-shadow-coral transition-all duration-300 hover:scale-105">
                Join the Waitlist <ArrowRight className="h-5 w-5" />
              </button>
            </RegisterDialog>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute top-32 left-20 w-48 h-48 bg-sage opacity-[0.07] blur-3xl rounded-full"></div>
      <div className="absolute bottom-32 right-20 w-56 h-56 bg-coral opacity-[0.07] blur-3xl rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky opacity-[0.03] blur-3xl rounded-full"></div>
    </section>
  );
}
