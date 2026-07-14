import "./Footer.css"
import footer_image from "../../assets/images/footer_image.avif"
// import facebook_icon from "../../assets/icons/facebook_icon.png"
// import insta_icon from "../../assets/icons/insta_icon.png"
// import linkedIn_icon from "../../assets/icons/linkedIn_icon.png"
// import twitter_icons from "../../assets/icons/twitter_icons.png"
// import search_icon from "../../assets/icons/search_icon.png"

const Footer = () => {
    return (
        <>
            <div className="footer-container">

                <div className="footer-logo">
                    <img src={footer_image} alt="footer_image" />
                    <p>We are a medical clinic,<br />helping you for a better life.</p>
                </div>

                <div className="footer-medic">
                    <ul className="footer-lists">
                        <li>Medic</li>
                        <li>Home</li>
                        <li>Medical Care</li>
                        <li>Medical Health</li>
                        <li>Medical Test</li>
                        <li>Medical Lab</li>
                    </ul>
                </div>

                <div className="footer-about">
                    <ul className="footer-lists">
                        <li>About</li>
                        <li>Medic</li>
                        <li>Vision & Mission</li>
                        <li>Careers</li>
                        <li>Support</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div className="footer-social-media">

                    <ul className="footer-lists">

            {/* <div className="navbar-icons">
                <Link to = "/"><img src = {facebook_icon} alt="facebook-icon" className="facebook-icon " /></Link>
                <Link to = "/"><img src = {insta_icon} alt="insta_icon" className="insta_icon" /></Link>
                <Link to = "/"><img src = {linkedIn_icon} alt="linkedIn_icon" className="linkedIn_icon" /></Link>
                <Link to = "/"><img src = {twitter_icons} alt="twitter_icons" className="twitter_icons" /></Link>
                <Link to = "/"><img src = {search_icon} alt="search_icon" className="search_icon" /></Link>
            </div>  */}
            
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; Medic 2028</p>
                <p>Legal Policies</p>
                <p>Sitemap</p>
                <p>Cookies</p>
            </div>

        </>


    )
}   

export default Footer