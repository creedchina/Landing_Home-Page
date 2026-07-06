import "./Banner.css"
import red_blood from "../../assets/images/red_blood.jpg"

const Banner = () => {
    return (
        <div className="banner-container">

            <div className="banner-content">
                <h1>Welcome to Our Medical Center</h1>
                <p>Your health is our priority.</p>
            </div>

            <div className="banner-buttons">
                <button className="btn-primary">Request Appointment</button>
                <button className="btn-primary">Learn More</button>
                <button className="btn-primary">Contact Us</button>
            </div>

            <div className="banner-graphics">
                <img src={red_blood} alt="red_blood" />
            </div>  
        </div>
    );
};

export default Banner;