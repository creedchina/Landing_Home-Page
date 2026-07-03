import "./NavBar.css"
import Medical_Logo from "../../assets/images/Medical_Logo.png"
import search from "../../assets/images/search.jpg"

const NavBar = () => {
    return (
        <div className="navbar-container">
        
            <div className="navbar-logo">

                <img src = {Medical_Logo} alt="Medical Logo" className="logo-image" />
                
            </div>

            <div className="navbar-items">
               <h3>Medical Home</h3>
               <h3>Medical Experts</h3>
               <h3>Medical Services</h3>
               <h3>Medical News</h3>
               <h3>Medical Contacts</h3>
                 </div>

            <div className="side-nav-items"> 
                <h3>Login</h3>
                <img src = {search} alt="Search" className="search" />

                <h3>Register</h3>
                <h3></h3>
            </div>
        </div>
    )
}

export default NavBar