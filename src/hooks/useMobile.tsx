import { useState, useEffect } from 'react';

interface UseMobileReturn {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const useMobile = (): UseMobileReturn => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobileQuery = window.matchMedia('(max-width: 767px)');
      const tabletQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
      const desktopQuery = window.matchMedia('(min-width: 1024px)');

      setIsMobile(mobileQuery.matches);
      setIsTablet(tabletQuery.matches);
      setIsDesktop(desktopQuery.matches);
    };

    // Initial check
    checkDevice();

    // Add event listeners
    window.addEventListener('resize', checkDevice);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
};

export { useMobile };
