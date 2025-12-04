import logoWebp from "@/assets/choccylogo.webp";
import logoPng from "@/assets/choccylogo.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Hero section">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-col items-center gap-4 mb-6">
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img
                src={logoPng}
                alt="Choccy Box - Intelligent workout management system logo"
                className="w-128 h-auto"
                width="550"
                height="550"
                loading="eager"
                fetchPriority="high"
              />
            </picture>
            <h1 className="text-gray-900">Choccy Box</h1>
          </div>
          <p className="text-xl text-purple-600 mb-6"><strong>Program. Display. Empower.</strong></p>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            The intelligent workout management system that empowers gym owners and trainers to focus on what matters most—their members.
          </p>
          <div className="mt-10">
            <div className="inline-block rounded-full bg-black px-8 py-3 text-white" role="status" aria-label="Product launch status">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}