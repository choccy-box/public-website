const steps = [
  {
    number: "01",
    title: "Program Your Workouts",
    description: "Create custom workout programs or choose from our library of professionally designed routines. Set times, sets, and reps for each station.",
    accent: "sage",
  },
  {
    number: "02",
    title: "Deploy to Stations",
    description: "Your programmed workouts automatically sync to the TVs positioned near each exercise station in your gym.",
    accent: "sky",
  },
  {
    number: "03",
    title: "Focus on Coaching",
    description: "With exercises displayed and timers automated, trainers spend less time managing logistics and more time improving member form and motivation.",
    accent: "coral",
  },
];

export function HowItWorks() {
  return (
    <section className="py-32 sm:py-40 bg-white relative overflow-hidden" aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-24">
          <h2 id="how-it-works-heading" className="font-display text-5xl md:text-6xl text-charcoal mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            Three simple steps to transform your gym operations
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mx-auto mt-16 max-w-6xl">
          <ol className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-3">
            {steps.map((step, idx) => (
              <li
                key={step.number}
                className="relative group p-10 bg-cream rounded-2xl refined-border-light refined-shadow hover:refined-shadow-lg card-hover-subtle animate-slide-up cursor-pointer overflow-hidden"
                style={{
                  animationDelay: `${(idx + 2) * 100}ms`,
                }}
              >
                {/* Large Number Badge */}
                <div
                  className={`inline-block font-mono text-6xl font-bold mb-6 transition-all duration-300 ${
                    step.accent === "sage"
                      ? "text-sage group-hover:scale-125"
                      : step.accent === "sky"
                      ? "text-sky group-hover:scale-125"
                      : "text-coral group-hover:scale-125"
                  }`}
                  aria-label={`Step ${step.number}`}
                >
                  {step.number}
                </div>

                {/* Accent Bar - animated on hover */}
                <div
                  className={`absolute top-0 left-0 w-0 group-hover:w-full h-1 rounded-t-2xl transition-all duration-500 ease-out ${
                    step.accent === "sage"
                      ? "bg-gradient-sage"
                      : step.accent === "sky"
                      ? "bg-gradient-sky"
                      : "bg-gradient-coral"
                  }`}
                ></div>

                {/* Static full-width bar (background) */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-20 ${
                    step.accent === "sage"
                      ? "bg-sage"
                      : step.accent === "sky"
                      ? "bg-sky"
                      : "bg-coral"
                  }`}
                ></div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-charcoal mb-4 transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-10 right-20 w-40 h-40 bg-sage opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-40 h-40 bg-sky opacity-10 blur-3xl"></div>
    </section>
  );
}