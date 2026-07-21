import "./NavBar.css"
import Medical_Log from "../../assets/images/Medical_Log.png"
import menuIcon from "../../assets/icons/menuIcon.png"

import { Link } from "react-router-dom"

function NavBar(){

    const handleScroll = (e, id) => {
        e.preventDefault(); 
        const element = document.getElementById(id); 
        if(element) {
            element.scrollIntoView({behavior: 'smooth'}); 
        }
    }; 

    return (
        <nav className="navbar-container">
        
            <div className="navbar-logo">
                <Link to = "/">
                <img src = {Medical_Log} alt="Medical_Log" className="logo-image" />
                </Link> 
            </div>

            <div className="navbar-items">  
                <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
                <a href="about" onClick={(e) => handleScroll(e, 'about')}>About Us</a>
                <a href="#services" onClick={(e) => handleScroll(e, 'services')}>Services</a>
                <a href="#partners" onClick={(e) => handleScroll(e, 'partners')}>Partners</a>
                <a href="#news" onClick={(e) => handleScroll(e, 'news')}>News</a>
                <a href="#contacts" onClick={(e) => handleScroll(e, 'contacts')}>Contacts</a>
            </div>

            <button className="menu-btn">
                <img src={menuIcon} alt="menu" />
            </button>

{/* 
            <div className="navbar-icons">
            <Link to = "/"><img src = {facebook_icon} alt="facebook-icon" className="facebook-icon " /></Link>
            <Link to = "/"><img src = {insta_icon} alt="insta_icon" className="insta_icon" /></Link>
            <Link to = "/"><img src = {linkedIn_icon} alt="linkedIn_icon" className="linkedIn_icon" /></Link>
            <Link to = "/"><img src = {twitter_icons} alt="twitter_icons" className="twitter_icons" /></Link>
            <Link to = "/"><img src = {search_icon} alt="search_icon" className="search_icon" /></Link>
            </div> */}

            {/* <div className="side-nav-items"> 
                <Link to = "/Login" className = "Login">
                    <h4>Login</h4>
                </Link>
                <Link to = "/Register" className="Register">
                <h4>Register</h4>
                </Link>
            </div> */}
            
        </nav>
    )
}

export default NavBar