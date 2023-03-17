import { useRouter } from "next/router";
import { getFilteredArticles } from "@/utlis/local-data-articles";
import ArticlesList from "@/components/articles/aticle-list";
import NotFoundComp from "@/components/ui/404-comps";
import style from '@/styles/articles.module.css';

function FilteredArticle() {
    const router = useRouter();

    const filterData = router.query.slugs;

    if (!filterData) {
        return <p>Loading.../</p>
    }

    const filteredYear = filterData[0];
    const filterdMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filterdMonth;

    if (isNaN(numYear) ||
        isNaN(numMonth) ||
        numYear > 2030 ||
        numYear < 2021 ||
        numMonth > 12
    ) {
        return (
            <NotFoundComp
                desc={"Looks like you  have entered Invalid URL, Please Try again"}
                backlink={'/articles'} />
        )
    }

    const filteredArticles = getFilteredArticles({
        year: numYear,
        month: numMonth,
    });

    if (!filteredArticles || filteredArticles.length === 0) {
        return (
            <NotFoundComp
                desc={"Sorry We Can't Found The Article your looking for"}
                backlink={'/articles'} />
        )
    }

    return (
        <div className={style.articles_wrapper}>
            <div className={style.articles_banner} />
            <div className={style.articles_section}>
                <div className={style.all_articles}>
                    <ArticlesList listArticle={filteredArticles} />
                </div>
            </div>
        </div>
    )
}

export default FilteredArticle;