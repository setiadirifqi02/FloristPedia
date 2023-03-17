import style from './article-detail.module.css';

function ArticleDetail(props) {
    const { image, title, author, date, content } = props;
    return(
        <div className={style.article_detail}>
            <img src={'/' +image} alt={title} />
            <div className={style.article_detail_content}>
                <h4>{title}</h4>
                <div className={style.article_detail_content_info}>
                    <p>{author}</p>
                    <p>{date}</p>
                </div>
                <p className={style.description}>{content}</p>
            </div>
        </div>
    )
};

export default ArticleDetail;