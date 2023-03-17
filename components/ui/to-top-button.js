import { useState, useEffect } from 'react';
import ArrowUpIcon from '../icon/arrow-up-icon';
import style from './to-top-button.module.css';

function ScrollToTop () {
    const [showTopBtn, setTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 400) {
                setTopBtn(true);
            } else {
                setTopBtn(false);
            }
        });
    }, []);

    const goToTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return(
        <>
            {showTopBtn && (
                <button onClick={goToTopHandler} className={style.to_top_btn}>
                <span className={style.arrow_top_icon}><ArrowUpIcon /></span>
            </button>
            )}
        </>
    )
}

export default ScrollToTop;