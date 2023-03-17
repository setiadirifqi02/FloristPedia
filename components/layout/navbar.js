import { useRef } from "react";
import Link from "next/link";
import BarsIcon from "../icon/bars-icon";
import TimesIcon from "../icon/times-icon";

function Navbar () {
    const navRef = useRef();

    const navbarOpen = () => {
        navRef.current.classList.toggle("nav_open");
    }

    // const scrollDown = (ref) => {
    //     window.scrollTo({
    //       top: ref.current.offsetTop,
    //       behavior: 'smooth',
    //     });
    //   };

    return (
        <div className="navbar">
            <nav ref={navRef} className="navbar_nav">
                <h3>Florist Pedia</h3>
                <ul>
                    <li><Link href="/" onClick={navbarOpen}>Home</Link></li>
                    <li><Link href="/catalogue" onClick={navbarOpen}>Catalogue</Link></li>
                    <li><Link href="/articles" onClick={navbarOpen}>Articles</Link></li>
                    {/* <li><Link href="/#aboutme">About Me</Link></li> */}
                </ul>
                <button onClick={navbarOpen} className="times_close"><TimesIcon /></button>
            </nav>
            <button onClick={navbarOpen} className="bars_open"><BarsIcon /></button>
        </div>
    )
}

export default Navbar;