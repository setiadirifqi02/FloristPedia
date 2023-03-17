import { getPlantById } from "@/utlis/local-data-house-plant";
import { useRouter } from "next/router";
import CatalogueDetail from "@/components/catalogues/catalogue-detail";
import NotFoundComp from "@/components/ui/404-comps";

function CatalogueDetailPage() {
    const Router = useRouter()
    const catalogueId = Router.query.catalogueid;
    const catalogueDetail = getPlantById(catalogueId);

    if(!catalogueDetail) {
        return (
            <NotFoundComp
            desc={"Ooh no!, We don't have a catalogue your looking for!."}
            backlink={'/catalogue'}
            />            
        )
    }
    
    return (
        <div>
            <CatalogueDetail 
            image ={catalogueDetail.image}
            alt = {catalogueDetail.plant_name}
            plant_name = {catalogueDetail.plant_name}
            category = {catalogueDetail.category}
            description = {catalogueDetail.description}
            />
        </div>
    )
}

export default CatalogueDetailPage;