import "./NavBar.css"
import Medical_Logo from "../../assets/images/Medical_Logo.png"
import facebook_icon from "../../assets/icons/facebook_icon.png"
import insta_icon from "../../assets/icons/insta_icon.png"
import linkedIn_icon from "../../assets/icons/linkedIn_icon.png"
import twitter_icons from "../../assets/icons/twitter_icons.png"
import search_icon from "../../assets/icons/search_icon.png"

import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navbar-container">
        
            <div className="navbar-logo">
                <Link to = "/">
                <img src = {Medical_Logo} alt="Medical Logo" className="logo-image" />
                </Link> 
            </div>

            <div className="navbar-items">
               <Link to = "/"> <h4>Home</h4></Link> 
               <Link to = "/services"> <h4>Services</h4></Link> 
               <Link to = "/patners"> <h4>Patners</h4></Link> 
               <Link to = "/news"> <h4>News</h4></Link> 
               <Link to = "/Contacts"> <h4>Contacts</h4></Link> 
            </div>


            <div className="navbar-icons">
            <Link to = "/"><img src = {facebook_icon} alt="facebook-icon" className="facebook-icon " /></Link>
            <Link to = "/"><img src = {insta_icon} alt="insta_icon" className="insta_icon" /></Link>
            <Link to = "/"><img src = {linkedIn_icon} alt="linkedIn_icon" className="linkedIn_icon" /></Link>
            <Link to = "/"><img src = {twitter_icons} alt="twitter_icons" className="twitter_icons" /></Link>
            <Link to = "/"><img src = {search_icon} alt="search_icon" className="search_icon" /></Link>
            </div>

            {/* <div className="side-nav-items"> 
                <Link to = "/Login" className = "Login">
                    <h4>Login</h4>
                </Link>
                <Link to = "/Register" className="Register">
                <h4>Register</h4>
                </Link>
            </div> */}
            
        </div>
    )
}

export default NavBar