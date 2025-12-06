export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-sage rounded-lg w-10 h-10 flex items-center justify-center refined-shadow">
              <span className="font-display text-white text-lg">CB</span>
            </div>
            <span className="font-display text-xl text-charcoal">Choccy Box</span>
          </div>

          {/* Badge */}
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 bg-sage/10 rounded-full px-5 py-2.5 hidden sm:flex">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-3 h-3 bg-sage/30 rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-sage"></div>
              </div>
              <span className="text-sm text-sage font-bold tracking-wide">Coming Soon</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
