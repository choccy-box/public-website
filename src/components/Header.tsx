export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-orange-500">
      <nav className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-white">Choccy Box</span>
          </div>
          
          {/* Navigation items will go here */}
          <div className="flex items-center gap-8">
            {/* Future nav items */}
          </div>
        </div>
      </nav>
    </header>
  );
}