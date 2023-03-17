import Link from "next/link";
import ArrowRightIcon from "../icon/arrow-right-icon";
import style from '../ui/button-link.module.css'

function  ButtonLink(props) {
    return (
        <Link className={style.button_link} href={props.link}>
            <span className={style.label}>{props.children}</span>
            <span className={style.icon_arrow}><ArrowRightIcon/></span>
        </Link>
    )   
}

export default ButtonLink;