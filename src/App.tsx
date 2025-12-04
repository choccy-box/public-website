import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { CTA } from "./components/CTA";
import { Header } from "./components/Header";
import { CookieConsent } from "./components/CookieConsent";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </div>
      <CookieConsent />
    </div>
  );
}