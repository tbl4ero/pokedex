import { useState } from 'react';

const useHover = () => {
    const [isHovered, setHovered] = useState(false);

    return {
        isHovered, 
        hoverOptions: {
            onMouseOver: () => setHovered(true),
            onMouseLeave: () => setHovered(false)
        }
    };
};

export default useHover;