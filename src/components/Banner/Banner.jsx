import "./Banner.css"
import red_blood from "../../assets/images/red_blood.jpg"
import kid_1 from "../../assets/images/kid_1.jpg"
import kid_2 from "../../assets/images/kid_2.jpg"
import kid_3 from "../../assets/images/kid_3.jpg"
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="banner-container">

            <div className="banner-content">
                <h1>Welcome to Our Medical Center</h1>
                <p>Your health is our priority.</p>
                <p>What to expect no matter what your age,
                going into hospital can be daunting, <br></br>but Life Healthcare wants you to know that 
                we are walking every step of the patient journey with you.</p>

                <Link to = "/request-appointment" className = "btn-primary">
                    Request an Appointment
                </Link>
            </div>

            <div className="banner-graphics">
                <img src={red_blood} alt="red_blood" />
            </div>  

            <div className="banner-kids">
                    <h3>Before, during and after your stay</h3>

                    <div className="banner_pic">
                    <img src = {kid_1} alt="kid_1"/>

                    <img src = {kid_2} alt="kid_2"/>
                    
                    <img src = {kid_3} alt="kid_3"/>

                    </div>
                    
            </div>

        </div>
    );
};

export default Banner;