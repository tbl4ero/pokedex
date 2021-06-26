import { useRef, useEffect, useState, useCallback } from "react";

interface IntersectionObserverOptions {
  shouldBeHidden?: boolean;
  root?: HTMLElement;
  rootMargin?: string;
  threshold?: number;
}

const useIntersection = (
  callback: () => void,
  options: IntersectionObserverOptions = {
    shouldBeHidden: false
  }
) => {

  const savedCallback = useRef<() => void>();
  const targetRef = useRef<HTMLElement>();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.intersectionRatio == 0) {
        if (options.shouldBeHidden) {
          savedCallback.current();
        }
      }
      else {
        savedCallback.current();
      }
    });
  }, options);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    observer.observe(targetRef.current);
  }, []);


  return targetRef;
};

export default useIntersection;
