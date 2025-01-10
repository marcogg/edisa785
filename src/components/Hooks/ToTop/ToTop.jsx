import React, { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa';

const ToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <button className="toTop" style={{ display: visible ? "flex" : "none" }} onClick={scrollToTop}>
            <FaArrowCircleUp style={{transform:'scale(2)', fontSize:'2rem'}} />
        </button>
    )
}

export default ToTop