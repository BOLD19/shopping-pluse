import { useState, useEffect } from 'react';

export const useHomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [expandedFaqItems, setExpandedFaqItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toggleFaqItem = (index: number) => {
    setExpandedFaqItems(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return {
    isLoading,
    expandedFaqItems,
    toggleFaqItem,
  };
}; 