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
               <Link to = "/"> <h3>Medical Home</h3></Link> 
               <Link to = "/"> <h3>Medical Services</h3></Link> 
               <Link to = "/"> <h3>Medical Doctors</h3></Link> 
               <Link to = "/"> <h3>Medical News</h3></Link> 
               <Link to = "/Contacts"> <h3>Medical Contacts</h3></Link> 
            </div>

            <div className="side-nav-items"> 

                <Link to = "/Login" className = "Login">
                    <h3>Login</h3>
                </Link>
                
                <img src = {search} alt="Search" className="search" />

                <Link to = "/Register" className="Register">
                <h3>Register</h3>
                </Link>

            </div>
        </div>
    )
}

export default NavBar