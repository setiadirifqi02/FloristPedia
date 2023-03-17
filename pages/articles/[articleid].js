import { useRouter } from "next/router";
import ArticleDetail from "@/components/articles/article-detail";
import { getArticles } from "@/utlis/local-data-articles";
import NotFoundComp from "@/components/ui/404-comps";

function ArticleDetalPage() {
    const Router = useRouter();
    const articleId = Router.query.articleid;
    const artileDetail = getArticles(articleId)

    if(!artileDetail) {
        return (
            <NotFoundComp
                desc={"Sorry We Can't Found The Article your looking for"}
                backlink={'/articles'} 
                />
        )
    }

    return (
        <div>
            <ArticleDetail image={artileDetail.image}
            alt={artileDetail.title}
            title={artileDetail.title}
            author={artileDetail.author}
            date={artileDetail.date}
            content={artileDetail.content} />
        </div>
    )
}

export default ArticleDetalPage;