import { useRef, useEffect } from 'react';

const useIntersection = (callback: any, options = {}) => {
    const targetRef = useRef<HTMLElement>();
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback();
            }
        })
    }, options);

    useEffect(() => {
        observer.observe(targetRef.current);
    }, []);

    return targetRef;
};

export default useIntersection;