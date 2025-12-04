import logo from "figma:asset/87139ddc19e99919b90200b48c503d5a017773d2.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex flex-col items-center gap-4 mb-6">
            <img 
              src={logo} 
              alt="Choccy Box Logo" 
              className="w-128 h-auto"
            />
            <h1 className="text-gray-900">Choccy Box</h1>
          </div>
          <p className="text-xl text-purple-600 mb-6">Program, Display, Empower.</p>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            The intelligent workout management system that empowers gym owners and trainers to focus on what matters most—their members.
          </p>
          <div className="mt-10">
            <div className="inline-block rounded-full bg-black px-8 py-3 text-white">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}