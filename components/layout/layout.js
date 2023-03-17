import { Fragment } from "react";
import Footer from "./footer";
import ScrollToTop from "../ui/to-top-button";
import Navbar from "./navbar";

function Layout(props) {
    return <Fragment>
        <Navbar />

        <main>
            {props.children}

            <ScrollToTop />
        </main>
        <Footer />
    </Fragment>
}

export default Layout;