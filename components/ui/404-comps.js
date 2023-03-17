import ButtonLinkVer2 from '@/components/ui/button-link-v2';
import style from './404-not-found.module.css';

function NotFoundComp(props) {
    const { desc, backlink } = props
    return (
        <div className={style.not_found_wrapper}>
            <img src='/images/404-not-found.png' alt="404 Picture"/>

            <p>{desc}</p>
            <ButtonLinkVer2 link={backlink}>Go Back</ButtonLinkVer2>
        </div>
    )
}

export default NotFoundComp;