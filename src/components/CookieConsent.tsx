import { useState, useEffect } from "react";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
};

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    } else {
      // Load existing preferences and apply them
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      if (savedPreferences.analytics) {
        loadGoogleAnalytics();
      }
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Load Google Analytics if not already loaded
    if (!window.gtag) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-BYXDH55NKL";
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        window.gtag = gtag;
        gtag("js", new Date());
        gtag("config", "G-BYXDH55NKL");
      };
    }
  };

  const handleAcceptAll = () => {
    const newPreferences = { necessary: true, analytics: true };
    localStorage.setItem("cookie-consent", JSON.stringify(newPreferences));
    setPreferences(newPreferences);
    loadGoogleAnalytics();
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleRejectAll = () => {
    const newPreferences = { necessary: true, analytics: false };
    localStorage.setItem("cookie-consent", JSON.stringify(newPreferences));
    setPreferences(newPreferences);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    if (preferences.analytics) {
      loadGoogleAnalytics();
    }
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-900 shadow-lg">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          {!showPreferences ? (
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <h3 className="text-gray-900 mb-2">We value your privacy</h3>
                <p className="text-gray-600">
                  We use cookies to enhance your browsing experience and analyze our traffic.
                  By clicking "Accept All", you consent to our use of cookies.{" "}
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="text-purple-600 underline"
                  >
                    Customize preferences
                  </button>
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-3 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-50"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700"
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h3 className="text-gray-900 mb-2">Cookie Preferences</h3>
                <p className="text-gray-600">
                  Choose which cookies you want to accept. You can change your preferences at any time.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <input
                    type="checkbox"
                    id="necessary"
                    checked={preferences.necessary}
                    disabled
                    className="mt-1 h-5 w-5"
                  />
                  <div className="flex-1">
                    <label htmlFor="necessary" className="text-gray-900 font-medium block mb-1">
                      Necessary Cookies (Required)
                    </label>
                    <p className="text-gray-600">
                      Essential for the website to function properly. These cannot be disabled.
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <input
                    type="checkbox"
                    id="analytics"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="mt-1 h-5 w-5"
                  />
                  <div className="flex-1">
                    <label htmlFor="analytics" className="text-gray-900 font-medium block mb-1">
                      Analytics Cookies
                    </label>
                    <p className="text-gray-600">
                      Help us understand how visitors interact with our website by collecting anonymous data.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-6 py-3 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-30 z-40" />
    </>
  );
}

// Add type definitions for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
