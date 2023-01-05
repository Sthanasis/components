import { useEffect, useState } from 'react';

const useWindowResize = () => {
  const [hasResize, setHasResize] = useState(false);
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      setHasResize(true);
      timeout = setTimeout(() => {
        setHasResize(false);
      }, 0);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return hasResize;
};

export default useWindowResize;
