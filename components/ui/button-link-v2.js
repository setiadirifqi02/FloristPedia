import Link from "next/link";
import ArrowRightIcon from "../icon/arrow-right-icon";
import style from './button-link-v2.module.css';

function ButtonLinkVer2(props) {
    if (props.link) {
        return (
            <Link className={style.button_link} href={props.link}>
                <span className={style.label}>{props.children}</span>
                <span className={style.icon_arrow}><ArrowRightIcon /></span>
            </Link>
        )
    }

    return (
        <button onClick={props.onClick} className={style.button_links}>
            <span className={style.label}>{props.children}</span>
            <span className={style.icon_arrow}><ArrowRightIcon /></span>
        </button>
    )
}

export default ButtonLinkVer2;