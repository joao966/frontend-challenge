import { useEffect, useState } from 'react';
import { ResizeTypes } from '@/types/home';

export default function useWindowSize(): ResizeTypes {
  const [windowSize, setWindowSize] = useState<ResizeTypes>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
