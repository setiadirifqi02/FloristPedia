import ButtonLink from '../ui/button-link';
import style from '../home/home-catalogue.module.css';

function HomeCatalogueSection() {
    return (
        <>
            <div className={style.home_catalogue}>
                <div className={style.home_catalogue__content}>
                    <h1>Explore our House Plant Catalogue to learning more about them </h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi et, architecto vel ipsa numquam amet hic nihil dolor facere
                        fuga veritatis ab porro cupiditate. Non, atque officiis? Laborum,
                        assumenda quaerat?Facilis laudantium doloremque quis molestiae!
                        Ipsum modi in harum dolorum laborum,</p>
                    <ButtonLink link={`/catalogue`} >See Catalogue</ButtonLink>
                </div>
                <div className={style.home_catalogue__feautered_plant_wrapper}>
                    <div className={style.home_catalogue__feautered_plant_1}>
                        plant 1
                    </div>
                    <div className={style.home_catalogue__feautered_plant_2}>
                        plant 2

                    </div>

                </div>
            </div>
        </>
    )
}

export default HomeCatalogueSection;