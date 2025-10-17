import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { 
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <button 
            className={`btn-scroll-top ${showButton ? "show" : ""}`} 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            ⬆ Subir
        </button>
    );
};

export default ScrollToTopButton;
