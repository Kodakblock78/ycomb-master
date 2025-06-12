"use client";

import { useEffect, useState } from 'react';

export function useScrollAnimation(threshold = 100) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > threshold) {
        setIsVisible(true);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    // Call handler right away to check initial position
    handleScroll();

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isVisible;
}
