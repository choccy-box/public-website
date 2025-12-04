import { Dumbbell, Tv, Timer, List } from "lucide-react";

const features = [
  {
    name: "Smart Programming",
    description: "Program custom workouts or select from our expertly curated exercise lists tailored for every fitness level.",
    icon: Dumbbell,
  },
  {
    name: "Station-Based Display",
    description: "Exercises automatically appear on TVs near each station, keeping your members informed and engaged.",
    icon: Tv,
  },
  {
    name: "Automated Timers",
    description: "Built-in work and rest timers eliminate the need for trainers to constantly watch the clock.",
    icon: Timer,
  },
  {
    name: "Flexible Configuration",
    description: "Easily set times, sets, and reps for each station to match your training methodology.",
    icon: List,
  },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50" aria-labelledby="features-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="features-heading" className="text-gray-900">Everything You Need to Run Better Workouts</h2>
          <p className="mt-6 text-lg text-gray-600">
            Choccy Box handles the logistics so your trainers can focus on coaching, motivation, and building stronger communities.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article key={feature.name} className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-600 text-white mb-6" aria-hidden="true">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-gray-900 mb-3">{feature.name}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
