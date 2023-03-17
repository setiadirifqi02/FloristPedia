import Link from 'next/link';
import style from '../home/home-articles-banner.module.css';

function HomeArticleBanner() {
    return (
        <div className={style.article_banner}>
            <div className={style.overlay}>
                <Link href={`/articles`}className={style.btn}>See All Articles</Link>
            </div>
            
        </div>
    )
}

export default HomeArticleBanner;