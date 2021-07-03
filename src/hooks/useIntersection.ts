import { useRef, useEffect, useState } from "react";

interface IntersectionObserverOptions {
  shouldBeHidden?: boolean;
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number;
}

const useIntersection = (
  options: IntersectionObserverOptions = {
    shouldBeHidden: false
  }
) => {

  const targetRef = useRef<HTMLElement>();
  const [inView, setInView] = useState(true);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        setInView(true);
      } else {
        setInView(false);
      }
    });
  }, options);

  useEffect(() => {
    observer.observe(targetRef.current);
  }, []);

  return [targetRef, inView];
};

export default useIntersection;
