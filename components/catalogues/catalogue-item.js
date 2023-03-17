import ButtonLinkVer2 from "../ui/button-link-v2";
import style from './catalogue-item.module.css';

function CatalogueItem(props) {
    const { image, plant_name, category, id} = props;
    const DetailLink = `/catalogue/${id}`;

    return(
        <div className={style.catalogue_item_card}>
            <img src={'/'+ image} alt={plant_name} className={style.catalogue_img}/>
            <div className={style.item_card_content}>
            <h5>{plant_name}</h5>
            <p>{category}</p>
            {/* <ButtonLink link={DetailLink}>See Detail </ButtonLink>    */}
            <ButtonLinkVer2 link={DetailLink}>See Detail</ButtonLinkVer2>
            </div>
        </div>
    )
}

export default CatalogueItem;