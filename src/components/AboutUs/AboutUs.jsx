import './AboutUs.css'
import kid_1 from "../../assets/images/kid_1.jpg"
import kid_2 from "../../assets/images/kid_2.jpg"
import kid_3 from "../../assets/images/kid_3.jpg"
import emergency from "../../assets/images/emergency.jpg"
import complementary from "../../assets/images/complementary.jpg"; 
import FlipCard from "../flipcard/Flipcard";

const AboutUs = () => {
    return (
        <div className="aboutus-container">

            <section id = "mid-section" className="mid-section">

                <div className="subtitle"> 
                    <h3>
                        Why choose Medical?
                    </h3>
                        <p>We are dedicated to compassionate care, clinical excellence, 
                            quality service and a spirit of giving to those entrusted to our care.
                        </p>
                </div>

                <div className="aboutus-grid">
                    <FlipCard 
                        frontTitle="Pre-admission information"
                        backgroundImage={kid_3}
                        backTitle="Pre-admission"
                        backText="Find out everything you need to know before checking into the hospital."
                        linkTo="/pre-admission"
                    />
                    {/* <FlipCard 
                        frontTitle="Our hospitals"
                        backTitle="Hospitals & Clinics"
                        backText="Locate and explore medical facilities nearest to your location."
                        linkTo="/hospitals"
                    /> */}
                    <FlipCard 
                        frontTitle="Our doctors"
                        backgroundImage={kid_1}
                        backTitle="Find a Doctor"
                        backText="Connect with specialized, world-class healthcare professionals."
                        linkTo="/doctors"
                    />
                    {/* <FlipCard 
                        frontTitle="Hospital services"
                        backTitle="Specialized Care"
                        backText="Explore our dynamic ranges of surgical and emergency medical services."
                        linkTo="/services"
                    /> */}
                    <FlipCard 
                        frontTitle="Complementary services"
                        backgroundImage={complementary}
                        backTitle="Additional Services"
                        backText="From physical therapy to pharmacies, see how we care for your recovery."
                        linkTo="/complementary"
                    />
                    {/* <FlipCard 
                        frontTitle="Out-of-hospital services"
                        backTitle="Home & Chronic Care"
                        backText="Bringing world-class clinical excellence directly to the comfort of your home."
                        linkTo="/out-of-hospital"
                    /> */}

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
            </section>
        </div>
    );
}; 
export default AboutUs

  