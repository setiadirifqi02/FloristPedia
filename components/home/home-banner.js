import style from '../home/home-banner.module.css'

function HomeBanner(){
    return (
        <>
        <div className={style.banner}>
        </div>
        <div className={style.banner_overlay}>
            <div className={style.main_heading}>
                <div className={style.main_heading__brand}>Florist Pedia</div>
                <div className={style.main_heading__slogan}>Find Discover Explore or learn tips and Trick for your house plant</div>
            </div>
        </div>
        </>
    )
}

export default HomeBanner;