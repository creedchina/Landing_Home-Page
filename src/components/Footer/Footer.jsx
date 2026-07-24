import "./Footer.css"
import Medical_Log from "../../assets/images/Medical_Log.png"
// import facebook_icon from "../../assets/icons/facebook_icon.png"
// import insta_icon from "../../assets/icons/insta_icon.png"
// import linkedIn_icon from "../../assets/icons/linkedIn_icon.png"
// import twitter_icons from "../../assets/icons/twitter_icons.png"
// import search_icon from "../../assets/icons/search_icon.png"
// import { Link } from "react-router-dom"

function Footer(){ 
    const handleScroll = (e, id) => {
        e.preventDefault(); 
        const element = document.getElementById(id); 
        if(element){
            element.scrollIntoView({behavior: 'smooth'});
        }
    }; 
    return (
        <>
            <div className="footer-container">

                <div className="footer-logo">
                    <img src={Medical_Log} alt="footer_image" />
                    <p>We are a medical clinic,<br />helping you for a better life.</p>
                </div>

                <div className="footer-medic">

                    <ul className="footer-lists">
                        <li>Quick Links</li>
                            <a href = "#about" onClick={(e) => handleScroll(e, "about")}>
                                About Us 
                            </a>
                            <a href = "#services" onClick={(e) => handleScroll(e, "services")}>
                                Services 
                            </a>
                            <a href = "#partners" onClick={(e) => handleScroll(e, "partners")}>
                                Partners 
                            </a>
                            <a href = "#news" onClick={(e) => handleScroll(e, "news")}>
                                News 
                            </a>
                            <a href = "#contacts" onClick={(e) => handleScroll(e, "contacts")}>
                                Contacts 
                            </a>
                    </ul>

                </div>

                {/* <div className="footer-about">
                    <ul className="footer-lists">
                        <li>About</li>
                        <li>Medic</li>
                        <li>Vision & Mission</li>
                        <li>Careers</li>
                        <li>Support</li>
                        <li>FAQ</li>
                    </ul>
                </div> */}

                <div className='footer-address'>

                    <ul className="footer-lists">
                        <li>Physical Address</li>
                        <li>Oxford Parks</li>
                        <li>203 Oxford Road (corner</li>
                        <li>Eastwood & Oxford Roads)</li>
                        <li>Cape Town, South Africa</li>
                        </ul>
                </div>

                <div className='footer-hours'>

                    <ul className="footer-lists">
                    <li>Hours</li>
                    <li>Monday – Friday: 08:00 – 17:00</li>
                    <li>Saturday: 08:00 – 13:00</li>
                    <li>Sunday: 08:00 – 13:00</li>
                    </ul>
                </div>

{/*                 
                <div className='footer-postal-address'>
                    
                    <ul className="footer-lists">

                        <h3>Postal Address</h3>
                        <li>Oxford Parks</li>
                        <li>203 Oxford Road (corner</li>
                        <li>Eastwood & Oxford Roads)</li>
                        <li>Cape Town, South Africa</li>
                    </ul>
                </div> */}

                {/* <div className="footer-social-media">

                    <ul className="footer-lists">

            <div className="navbar-icons">
                <Link to = "/"><img src = {facebook_icon} alt="facebook-icon" className="facebook-icon " /></Link>
                <Link to = "/"><img src = {insta_icon} alt="insta_icon" className="insta_icon" /></Link>
                <Link to = "/"><img src = {linkedIn_icon} alt="linkedIn_icon" className="linkedIn_icon" /></Link>
                <Link to = "/"><img src = {twitter_icons} alt="twitter_icons" className="twitter_icons" /></Link>
                <Link to = "/"><img src = {search_icon} alt="search_icon" className="search_icon" /></Link>
            </div> 
            
                    </ul>
                </div> */}

            </div>

            <div className="footer-bottom">
                <p> Medic 2026</p>
                <p>Legal Policies</p>
                <p>Sitemap</p>
                <p>Cookies</p>
            </div>

        </>


    )
}   

export default Footer