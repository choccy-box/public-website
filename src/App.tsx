import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CookieConsent } from "./components/CookieConsent";

export default function App() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Global subtle grid pattern */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          opacity: 0.03,
          backgroundImage: `linear-gradient(#1a1a2e 1px, transparent 1px), linear-gradient(90deg, #1a1a2e 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          zIndex: 1
        }}
      />

      <div className="relative" style={{ zIndex: 2 }}>
        <Header />
        <div className="pt-20">
          <Hero />
          <div className="h-24"></div>
          <Features />
          <div className="h-24"></div>
          <HowItWorks />
          <div className="h-24"></div>
          <Footer />
        </div>
        <CookieConsent />
      </div>
    </div>
  );
}