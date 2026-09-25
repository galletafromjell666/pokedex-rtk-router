import { useState, useEffect, useRef } from "react";
export const useIntersectionObserver = ({
  root = null,
  rootMargin = "0px",
  threshold = 0,
} = {}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { root, rootMargin, threshold }
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, [root, rootMargin, threshold]);

  return [containerRef, isVisible];
};
