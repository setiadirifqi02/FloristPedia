import MailIcon from '../icon/mail-icon';
import PhoneIcon from '../icon/phone-icon';
import GlobeIcon from '../icon/globe-icon';
import style from './home-aboutme.module.css'

function HomeAboutMeSection() {
    return (
        <div className={style.home_about}>
            <div className={style.about_brand}>
                About Website
            </div>
            <div className={style.about_content}>
                <div className={style.about_content_bio}>
                    <h3>Florist Pedia</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias sint quae in blanditiis eum perspiciatis aliquid quia, magni veritatis iusto cumque porro nam? Doloribus deleniti eius sit explicabo eveniet dolor.
                        Incidunt, nam sequi deleniti sunt nostrum reprehenderit excepturi quam, nulla, fugit necessitatibus minus magni saepe nihil! Beatae consequuntur quibusdam nihil totam quos, laborum eveniet sed minima voluptate! Impedit, expedita at.
                        Sunt optio eos perferendis error dolorum ducimus voluptates recusandae,</p>
                </div>
                <div className={style.about_content_contact}>
                   <p> <span className={style.contact_icon}><MailIcon /></span>setiadirifqi2638@gmail.com</p>
                   <p> <span className={style.contact_icon}><PhoneIcon /></span>0878 3259 1993</p>
                   <p> <span className={style.contact_icon}><GlobeIcon /></span>dribbble.com/setiadirifqi02</p>
                </div>
            </div>

        </div>
    )
}

export default HomeAboutMeSection;