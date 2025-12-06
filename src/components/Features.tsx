import { Dumbbell, Tv, Timer, List } from "lucide-react";

const features = [
  {
    name: "Smart Programming",
    description: "Program custom workouts or select from our expertly curated exercise lists tailored for every fitness level.",
    icon: Dumbbell,
    color: "sage",
  },
  {
    name: "Station-Based Display",
    description: "Exercises automatically appear on TVs near each station, keeping your members informed and engaged.",
    icon: Tv,
    color: "sky",
  },
  {
    name: "Automated Timers",
    description: "Built-in work and rest timers eliminate the need for trainers to constantly watch the clock.",
    icon: Timer,
    color: "coral",
  },
  {
    name: "Flexible Configuration",
    description: "Easily set times, sets, and reps for each station to match your training methodology.",
    icon: List,
    color: "sage",
  },
];

export function Features() {
  return (
    <section className="py-32 sm:py-40 bg-white relative" aria-labelledby="features-heading">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/50 to-white"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-24">
          <h2 id="features-heading" className="font-display text-5xl md:text-6xl text-charcoal mb-6 tracking-tight">
            Everything You Need
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            Choccy Box handles the logistics so your trainers can focus on coaching, motivation, and building stronger communities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <article
                key={feature.name}
                className="relative group p-10 bg-white rounded-2xl refined-border-light card-hover animate-slide-up cursor-pointer overflow-hidden"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                {/* Hover gradient background */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                    feature.color === "sage"
                      ? "bg-gradient-sage"
                      : feature.color === "sky"
                      ? "bg-gradient-sky"
                      : "bg-gradient-coral"
                  }`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 ${
                    feature.color === "sage"
                      ? "bg-sage/10 group-hover:bg-sage group-hover:scale-110 group-hover:rotate-6"
                      : feature.color === "sky"
                      ? "bg-sky/10 group-hover:bg-sky group-hover:scale-110 group-hover:rotate-6"
                      : "bg-coral/10 group-hover:bg-coral group-hover:scale-110 group-hover:rotate-6"
                  }`}
                  aria-hidden="true"
                >
                  <feature.icon
                    className={`h-8 w-8 transition-all duration-300 ${
                      feature.color === "sage"
                        ? "text-sage group-hover:text-white"
                        : feature.color === "sky"
                        ? "text-sky group-hover:text-white"
                        : "text-coral group-hover:text-white"
                    }`}
                    strokeWidth={2}
                  />
                </div>

                {/* Title */}
                <h3 className="relative text-xl font-bold text-charcoal mb-3 transition-colors duration-300">
                  {feature.name}
                </h3>

                {/* Description */}
                <p className="relative text-gray-600 leading-relaxed transition-colors duration-300">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
