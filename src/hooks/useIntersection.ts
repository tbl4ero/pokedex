import { useRef, useEffect } from 'react';

const useIntersection = (callback: any, options = {}) => {
    const targetRef = useRef();
    const observer = new IntersectionObserver(callback, options);

    useEffect(() => {
        observer.observe(targetRef.current);
    }, []);

    return targetRef;
};

export default useIntersection;