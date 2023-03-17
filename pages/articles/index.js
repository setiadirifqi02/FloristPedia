import { useRouter } from "next/router";
import CustomTitle from "@/components/layout/custom-title";
import ArticlesList from "@/components/articles/aticle-list";
import ArticleFilter from "@/components/articles/article-filter";
import { getPopularAricles, getAllArticles } from "@/utlis/local-data-articles";
import style from '@/styles/articles.module.css';

function ArticlesPage() {
    const articles = getAllArticles();
    const popularArticles = getPopularAricles();

    const router = useRouter();

    function onFilterHandler(year, month) {
        const urlPath = `/articles/${year}/${month}`;

        router.push(urlPath);
    }

    return (
        <>
            <CustomTitle titlePage={"hello"} />
            <div className={style.articles_wrapper}>
                <div className={style.articles_banner} />
                <div className={style.articles_section}>
                    <h4>Popular</h4>
                    <div className={style.popular_articles}>
                        <ArticlesList listArticle={popularArticles} />
                    </div>
                    <div className={style.all_articles_subtitle}>
                        <h4>Filter Articles</h4>
                        <ArticleFilter onFilter={onFilterHandler} />
                        <h4>All Articles</h4>
                    </div>
                    <div className={style.all_articles}>
                        <ArticlesList listArticle={articles} />
                    </div>
                </div>
            </div>
        </>
    )

}

export default ArticlesPage;