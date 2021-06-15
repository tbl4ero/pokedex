import { useState, MouseEvent } from 'react';

const useHover = (trackCursor = false) => {
    const [isHovered, setHovered] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0});
    
    return {
        isHovered, 
        hoverOptions: {
            onMouseMove: (evt: MouseEvent) => {
                setHovered(true);
                if (trackCursor) {
                    const { left, top } = evt.currentTarget.getBoundingClientRect();
                    setCursorPos({
                        x: evt.pageX - left,
                        y: evt.pageY - top
                    });
                }
            },
            onMouseLeave: () => setHovered(false)
        },
        cursorPos
    };
};

export default useHover;