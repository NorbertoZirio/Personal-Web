import { useState, useEffect } from "react";


export default function useHandleResize() {
    const [isMovile, setIsMovile] = useState(window.innerWidth < 768)
    
    useEffect(() => {
        const resize = () => setIsMovile(window.innerWidth < 768);
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);
    
    return isMovile
}