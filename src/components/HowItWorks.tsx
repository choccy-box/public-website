const steps = [
  {
    number: "01",
    title: "Program Your Workouts",
    description: "Create custom workout programs or choose from our library of professionally designed routines. Set times, sets, and reps for each station.",
  },
  {
    number: "02",
    title: "Deploy to Stations",
    description: "Your programmed workouts automatically sync to the TVs positioned near each exercise station in your gym.",
  },
  {
    number: "03",
    title: "Focus on Coaching",
    description: "With exercises displayed and timers automated, trainers spend less time managing logistics and more time improving member form and motivation.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-32" aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 id="how-it-works-heading" className="text-gray-900">How It Works</h2>
          <p className="mt-6 text-lg text-gray-600">
            Three simple steps to transform your gym operations
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <ol className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="relative">
                <div className="text-6xl font-light text-orange-400 mb-6" aria-label={`Step ${step.number}`}>{step.number}</div>
                <h3 className="text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}