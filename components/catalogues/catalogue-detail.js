import style from './catalogue-detail.module.css';

function CatalogueDetail(props) {
    const { image, plant_name, category, description} = props;
    
    return(
        <div className={style.catalogue_detail}>
            <img src={'/'+ image} alt={plant_name} />
            <div className={style.catalogue_detail_content}>
                <h4>{plant_name}</h4>
                <p className={style.category}>Category : {category}</p>
                <p className={style.description}>{description}</p>
            </div>
        </div>
    )
}

export default CatalogueDetail;