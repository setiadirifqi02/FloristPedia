import CatalogueItem from "./catalogue-item";
import style from './catalogue-list.module.css';

function CatalogueList(props) {
    const { item } = props;

    return (
        <div className={style.catalogue_list}>
            {item.map((event) =>
            <CatalogueItem
            key={event.id}
            id={event.id}
            image={event.image}
            plant_name={event.plant_name}
            category={event.category} 
            />
            )}
        </div>
    )
}

export default CatalogueList;