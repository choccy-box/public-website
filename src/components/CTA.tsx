export function CTA() {
  return (
    <section className="py-16 bg-gradient-athletic relative overflow-hidden">
      {/* Footer */}
      <footer className="text-center relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm mb-3" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            From a cozy London pub, where rainy days inspire new PBs. (We promise we&apos;re working)
          </p>
          <p className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            &copy; 2025 Choccy Box. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Background Decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-sage opacity-15 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-sky opacity-15 blur-3xl"></div>
    </section>
  );
}