import { getPopularPlants, getAllPlants } from "@/utlis/local-data-house-plant";
import CustomTitle from "@/components/layout/custom-title";
import CatalogueList from "@/components/catalogues/catalogue-list";
import style from "@/styles/catalogue.module.css";

function HousePlantsCatalogue() {
    const popularHousePlants = getPopularPlants();
    const allHousePlants = getAllPlants()
    
    return (
        <>
            <CustomTitle titlePage={"Our Catalogue"} />
            <div className={style.catalogue_wrapper}>
                <div className={style.catalogue_banner} />
                <div className={style.catalogue_section}>
                    <h4>Popular</h4>
                    <div className={style.popular_catalogue}>
                        <CatalogueList item={popularHousePlants} />
                    </div>
                    <h4>All Catalogue</h4>
                    <div className={style.all_catalogue}>
                        <CatalogueList item={allHousePlants} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HousePlantsCatalogue