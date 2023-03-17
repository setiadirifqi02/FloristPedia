import CardFeatured from "../ui/card-featured";
import style from '../home/home-articles.module.css';
import HomeArticleBanner from "./home-articles-banner";

function HomeArticlesSection() {
    return (
        <div className={style.home_articles}>
            <div className={style.articles_content}>
                <CardFeatured
                    title={`How to Watering Your House Plant`}
                    date={"20 February 2020"}
                    author={"by Bambieta"}
                    content={`Lorem ipsum, dolor sit amet consectetur
            adipisicing elit Animi et,
            architecto vel ipsa numquam amet hic nihil dolor
            facere fuga veritatis ab porro cupiditate.maiores temporibus necessitatibus distinctio aspernatur aperiam.
            Officia deserunt iste iusto eius distinctio tempore`}

                    link={`/articles`}
                />

                <CardFeatured
                    title={`How to Watering Your House Plant`}
                    date={"20 February 2020"}
                    author={"by Bambieta"}
                    content={`Lorem ipsum, dolor sit amet consectetur
            adipisicing elit Animi et,
            architecto vel ipsa numquam amet hic nihil dolor
            facere fuga veritatis ab porro cupiditate.maiores temporibus necessitatibus distinctio aspernatur aperiam.
            Officia deserunt iste iusto eius distinctio tempore`}

                    link={`/articles`}
                />

                <CardFeatured
                    title={`How to Watering Your House Plant`}
                    date={"20 February 2020"}
                    author={"by Bambieta"}
                    content={`Lorem ipsum, dolor sit amet consectetur
            adipisicing elit Animi et,
            architecto vel ipsa numquam amet hic nihil dolor
            facere fuga veritatis ab porro cupiditate.maiores temporibus necessitatibus distinctio aspernatur aperiam.
            Officia deserunt iste iusto eius distinctio tempore`}

                    link={`/articles`}
                />
            </div>

            <div className={style.articles_banner}>
                <HomeArticleBanner />
            </div>

        </div>
    )
}

export default HomeArticlesSection;