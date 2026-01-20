import { useState, useEffect } from 'react';

export default function MobileDetector({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile && !dismissed) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-6 z-50 font-rubik">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            <img 
              src="/assets/mobile.jpg" 
              alt="Desktop" 
              className="w-32 h-32 mx-auto object-cover rounded-lg"
            />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Best Viewed on Desktop
          </h1>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            This portfolio is optimized for desktop viewing to showcase the full experience. 
            Please visit on a laptop or desktop computer for the best experience.
          </p>
          
          <button
            onClick={() => setDismissed(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Continue Anyway
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}