import ButtonLinkVer2 from "../ui/button-link-v2";
import { showFormattedDate } from "@/utlis/local-data-articles";
import style from './article-item.module.css';

function ArticleItem(props) {
    const { id, image, title, date, author, content } = props;
    const formattedDate = showFormattedDate(date);
    const DetailLink = `/articles/${id}`;

    return(
        <div className={style.articles_item_card}>
            <img src={'/'+image} alt={title}  className={style.articles_img}/>
            <div className={style.item_card_content}>
                <h5>{title}</h5>
                <div className={style.item_card_info}>
                    <p>{formattedDate}</p>
                    <p>{author}</p>
                </div>
                <p className={style.item_card_content_text}>{content}</p>
                <ButtonLinkVer2 link={DetailLink}> Read More </ButtonLinkVer2>
            </div>
        </div>
    )
}

export default ArticleItem;