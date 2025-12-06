import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
      // Trigger animation after mount
      setTimeout(() => setIsVisible(true), 100);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ analytics: true }));
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);

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
    setIsVisible(false);
    setTimeout(() => setShowBanner(false), 300);

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
    <>
      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          padding: 1.25rem 1.5rem;
          z-index: 99999;
          background: linear-gradient(135deg, rgba(26, 26, 46, 0.98) 0%, rgba(42, 42, 62, 0.98) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 2px solid #6B9080;
          box-shadow: 0 -8px 24px rgba(107, 144, 128, 0.15),
                      0 -2px 8px rgba(0, 0, 0, 0.1);
          transform: translateY(100%);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .cookie-banner.visible {
          transform: translateY(0);
          opacity: 1;
        }

        .cookie-content {
          max-width: 80rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .cookie-icon-wrapper {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .cookie-icon {
          width: 24px;
          height: 24px;
          color: #6B9080;
          animation: cookieFloat 3s ease-in-out infinite;
        }

        @keyframes cookieFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(5deg);
          }
        }

        .cookie-title {
          font-family: 'Manrope', sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
          color: #FAFAF9;
          letter-spacing: 0.025em;
          text-transform: uppercase;
        }

        .cookie-text-wrapper {
          flex: 1;
          text-align: center;
          width: 100%;
        }

        .cookie-text {
          font-family: 'Manrope', sans-serif;
          font-size: 0.875rem;
          color: rgba(250, 250, 249, 0.9);
          line-height: 1.6;
          margin: 0;
          padding: 0;
          font-weight: 400;
        }

        .cookie-link {
          color: #6B9080;
          text-decoration: none;
          font-weight: 600;
          border-bottom: 1px solid transparent;
          transition: all 0.2s ease;
        }

        .cookie-link:hover {
          color: #7BA5D6;
          border-bottom-color: #7BA5D6;
        }

        .cookie-buttons {
          display: flex;
          gap: 0.75rem;
          width: 100%;
          flex-wrap: wrap;
          justify-content: center;
        }

        .cookie-button {
          font-family: 'Manrope', sans-serif;
          flex: 1;
          min-width: 120px;
          max-width: 160px;
          padding: 0.625rem 1.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .cookie-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .cookie-button:active::before {
          width: 300px;
          height: 300px;
        }

        .cookie-button-reject {
          background: transparent;
          color: #FAFAF9;
          border: 1.5px solid rgba(250, 250, 249, 0.2);
        }

        .cookie-button-reject:hover {
          background: rgba(250, 250, 249, 0.05);
          border-color: rgba(250, 250, 249, 0.4);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .cookie-button-reject:active {
          transform: translateY(0);
        }

        .cookie-button-accept {
          background: linear-gradient(135deg, #6B9080 0%, #588573 100%);
          color: #FAFAF9;
          border: 1.5px solid rgba(107, 144, 128, 0.3);
          box-shadow: 0 4px 12px rgba(107, 144, 128, 0.25);
        }

        .cookie-button-accept:hover {
          background: linear-gradient(135deg, #7BA5D6 0%, #6891C4 100%);
          border-color: rgba(123, 165, 214, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(123, 165, 214, 0.35);
        }

        .cookie-button-accept:active {
          transform: translateY(0);
        }

        /* Tablet and up */
        @media (min-width: 640px) {
          .cookie-banner {
            padding: 1.25rem 2rem;
          }

          .cookie-content {
            flex-direction: row;
            gap: 1.5rem;
          }

          .cookie-icon-wrapper {
            margin-bottom: 0;
          }

          .cookie-text-wrapper {
            text-align: left;
            width: auto;
          }

          .cookie-text {
            font-size: 0.9375rem;
          }

          .cookie-buttons {
            width: auto;
            flex-shrink: 0;
            flex-wrap: nowrap;
          }

          .cookie-button {
            flex: none;
            min-width: 110px;
          }
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .cookie-banner {
            padding: 1.5rem 2.5rem;
          }

          .cookie-content {
            gap: 2rem;
          }

          .cookie-buttons {
            gap: 1rem;
          }

          .cookie-button {
            min-width: 130px;
            padding: 0.75rem 2rem;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .cookie-banner,
          .cookie-button,
          .cookie-link,
          .cookie-icon {
            animation: none !important;
            transition: none !important;
          }

          .cookie-button::before {
            display: none;
          }
        }
      `}</style>
      <div className={`cookie-banner ${isVisible ? 'visible' : ''}`}>
        <div className="cookie-content">
          <div className="cookie-text-wrapper">
            <div className="cookie-icon-wrapper">
              <Cookie className="cookie-icon" strokeWidth={2} />
              <span className="cookie-title">Cookie Notice</span>
            </div>
            <p className="cookie-text">
              We use cookies to analyze site usage and improve your experience. By clicking "Accept", you consent to our use of analytics cookies.{' '}
              <a
                href="https://policies.google.com/technologies/cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="cookie-link"
              >
                Learn more
              </a>
            </p>
          </div>
          <div className="cookie-buttons">
            <button
              onClick={handleReject}
              className="cookie-button cookie-button-reject"
              aria-label="Reject cookies"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="cookie-button cookie-button-accept"
              aria-label="Accept cookies"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
