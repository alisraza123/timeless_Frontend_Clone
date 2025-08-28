import { useEffect } from 'react';

export const useScrollProgress = (scroll, callback) => {
  useEffect(() => {
    if (!scroll) return;
    
    const handleScroll = ({ scroll }) => {
      const progress = scroll.y / (scroll.limit - window.innerHeight);
      callback(progress);
    };

    scroll.on('scroll', handleScroll);
    
    return () => {
      scroll.off('scroll', handleScroll);
    };
  }, [scroll, callback]);
};