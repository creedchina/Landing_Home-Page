import "./NavBar.css"
import Medical_Logo from "../../assets/images/Medical_Logo.png"
import search from "../../assets/images/search.jpg"
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
               <Link to = "/"> <h4>Services</h4></Link> 
               <Link to = "/"> <h4>Patners</h4></Link> 
               <Link to = "/"> <h4>News</h4></Link> 
               <Link to = "/Contacts"> <h4>Contacts</h4></Link> 
            </div>

            <div className="side-nav-items"> 

                <Link to = "/Login" className = "Login">
                    <h4>Login</h4>
                </Link>
                
                <img src = {search} alt="Search" className="search" />

                <Link to = "/Register" className="Register">
                <h4>Register</h4>
                </Link>

            </div>
        </div>
    )
}

export default NavBar