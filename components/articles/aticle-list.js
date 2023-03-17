import ArticleItem from "./article-item";
import style from './article-list.module.css';

function ArticlesList(props) {
    const { listArticle } = props;

    return (
        <div className={style.article_list}>
            {listArticle.map((event =>
                <ArticleItem
                    key={event.id}
                    id={event.id}
                    image={event.image}
                    title={event.title}
                    date={event.date}
                    author={event.author}
                    content={event.content}
                />
            ))}
        </div>
    )
}

export default ArticlesList;