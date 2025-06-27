import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    scrollToHash();

    // Also handle clicks on links that don't cause a route change
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('/#')) {
          const id = href.split('#')[1];
          const el = document.getElementById(id);
          if (el) {
            // Scroll after allowing React to process the click
            setTimeout(() => {
              el.scrollIntoView({ behavior: 'smooth' });
            }, 0);
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [location]);

  return null;
};

export default ScrollToHashElement;
