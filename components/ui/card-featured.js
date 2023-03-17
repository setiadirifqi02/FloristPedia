import ButtonLink from "./button-link";
import style from '../ui/card-featured.module.css';

function CardFeatured(props) {
    return (
        <div className={style.card_featured}>
            <h2>{props.title}</h2>
            <div className={style.article_attribute}>
                <p>{props.date}</p>
                <p>{props.author}</p>
            </div>

            <p className={style.article_content}>
                {props.content}
            </p>

            <ButtonLink link={props.link}>Read More</ButtonLink>

        </div>
    )
}

export default CardFeatured;