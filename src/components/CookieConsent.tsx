import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ analytics: true }));
    setShowBanner(false);

    // Update consent and initialize analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
      // Initialize Google Analytics with the measurement ID
      (window as any).gtag('config', 'G-BYXDH55NKL');
    }
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ analytics: false }));
    setShowBanner(false);

    // Update analytics to denied state
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 p-4 sm:p-6 shadow-2xl"
      style={{
        zIndex: 99999,
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100vw',
        backgroundColor: '#18181b',
        borderTop: '2px solid rgb(168 85 247)'
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-white leading-relaxed">
            We use cookies to analyze site usage and improve your experience. By clicking "Accept", you consent to our use of analytics cookies.{' '}
            <a
              href="https://policies.google.com/technologies/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-purple-400 transition-colors text-gray-300"
            >
              Learn more
            </a>
          </p>
        </div>
        <div className="flex gap-4 sm:gap-6 w-full sm:w-auto shrink-0">
          <button
            onClick={handleReject}
            className="flex-1 sm:flex-none px-8 py-3 text-base font-semibold text-white border-2 border-gray-700 hover:border-gray-500 rounded-lg transition-all min-w-[120px]"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-8 py-3 text-base font-semibold bg-purple-600 text-white hover:bg-purple-700 rounded-lg transition-all min-w-[120px]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
