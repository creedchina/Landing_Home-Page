import "./Banner.css"
import kid_1 from "../../assets/images/kid_1.jpg"
import kid_2 from "../../assets/images/kid_2.jpg"
import kid_3 from "../../assets/images/kid_3.jpg"
import emergency from "../../assets/images/emergency.jpg"
import complementary from "../../assets/images/complementary.jpg"

import { Link } from "react-router-dom";
import FlipCard from "../flipcard/Flipcard";

const Banner = () => {
    return (
        <div className="banner-container">

            <section id="top-section" className="top-section">
            <div className="banner-content">
                <h1>Welcome to Our Medical Center</h1>
                <p>Your health is our priority.</p>
                <p>What to expect no matter what your age,
                going into hospital can be daunting, but Life Healthcare wants you to know that <b/>
                we are walking every step of the patient journey with you.</p>

                <Link to="/request-appointment" className="btn-primary">
                    Request an Appointment
                </Link>

                </div>
                </section>

                <section id = "mid-section" className="mid-section">
                <div className="subtitle"> 
                    <h3>Why choose Medical?</h3>
                    <p>We are dedicated to compassionate care, clinical excellence, 
                    quality service and a spirit of giving to those entrusted to our care.</p>
                </div>

                <div className="banner-grids-container">
                    <div className="banner-grid">
                    <FlipCard 
                        frontTitle="Pre-admission information"
                        backgroundImage={kid_3}
                        backTitle="Pre-admission"
                        backText="Find out everything you need to know before checking into the hospital."
                        linkTo="/pre-admission"
                    />
                    <FlipCard 
                        frontTitle="Our hospitals"
                        backTitle="Hospitals & Clinics"
                        backText="Locate and explore medical facilities nearest to your location."
                        linkTo="/hospitals"
                    />
                    <FlipCard 
                        frontTitle="Our doctors"
                        backgroundImage={kid_1}
                        backTitle="Find a Doctor"
                        backText="Connect with specialized, world-class healthcare professionals."
                        linkTo="/doctors"
                    />
                    <FlipCard 
                        frontTitle="Hospital services"
                        backTitle="Specialized Care"
                        backText="Explore our dynamic ranges of surgical and emergency medical services."
                        linkTo="/services"
                    />
                    <FlipCard 
                        frontTitle="Complementary services"
                        backgroundImage={complementary}
                        backTitle="Additional Services"
                        backText="From physical therapy to pharmacies, see how we care for your recovery."
                        linkTo="/complementary"
                    />
                    <FlipCard 
                        frontTitle="Out-of-hospital services"
                        backTitle="Home & Chronic Care"
                        backText="Bringing world-class clinical excellence directly to the comfort of your home."
                        linkTo="/out-of-hospital"
                    />
                    </div>

                    <div className="banner-grid-secondary">
                    <FlipCard 
                        frontTitle="Patient Support"
                        backTitle="Support Services"
                        backText="24/7 patient support and counseling services to help you through your healthcare journey."
                        linkTo="/patient-support"
                    />
                    <FlipCard 
                        frontTitle="Emergency Services"
                        backgroundImage={emergency}
                        backTitle="Emergency Care"
                        backText="Rapid response and expert emergency care available round the clock."
                        linkTo="/emergency"
                    />
                    <FlipCard 
                        frontTitle="Wellness Programs"
                        backgroundImage={kid_2}
                        backTitle="Wellness"
                        backText="Preventive health programs and wellness initiatives to keep you healthy."
                        linkTo="/wellness"
                    />
                    </div>
                </div>
                </section>
            </div>

    );
};

export default Banner;