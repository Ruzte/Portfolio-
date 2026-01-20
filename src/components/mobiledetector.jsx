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
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-6 z-50">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="mb-6">
            {/* You can replace this with any icon you want */}
            <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-4xl">💻</span>
            </div>
                <img src="../assets/mobile.jpg" alt="Desktop" className="w-20 h-20 rounded-full mx-auto" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Best Viewed on Bigger Screens
          </h1>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            This portfolio is optimized for desktop viewing because I have not made it 
            responsive to mobile devices yet. 
            Please visit on a laptop or desktop computer to view my portfolio.
          </p>

        </div>
      </div>
    );
  }

  return <>{children}</>;
}