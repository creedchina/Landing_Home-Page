import './ourService.css'
import Service from '../services/Service'
import FlipCard from '../flipcard/Flipcard'
import modern_Tech from "../../assets/images/modern_Tech.jpg"
import emergency_med from "../../assets/images/emergency_med.jpg"
import pricing from "../../assets/images/pricing.jpg"

const OurService = () => {
    return (
        <div className="ourService-container">

            <h4>General Practioner Services</h4>

            <h3>Family Doctors Near You Modern General Practitioners 
                in Bellville & Durbanville</h3>

                <div className="service-grid">
                    <FlipCard 
                        frontTitle="Modern Technology"
                        backgroundImage={modern_Tech}
                        backTitle="Modern Technology"
                        backText="Fast digital check-in, secure electronic records, e-scripts, point-of-care testing and 
                        coordinated ultrasound/radiology to speed up answers and treatment."
                        linkTo="/patient-support"
                    />
                    <FlipCard 
                        frontTitle="Affordable Pricing"
                        backgroundImage={pricing}
                        backTitle="Affordable Pricing"
                        backText="We explain costs up front and help you choose the most sensible next step. 
                        Most medical schemes are accepted, but give us a ring to confirm you'd be covered."
                        linkTo="/emergency"
                    />
                    <FlipCard 
                        frontTitle="Specialists in Emergency Medicine"
                        backgroundImage={emergency_med}
                        backTitle="Specialists in Emergency Medicine"
                        backText="Experienced General Practitioners (many with Emergency Medicine diplomas) delivering safe, 
                    guideline-led care for the whole family."
                        linkTo="/wellness"
                    />
                    </div>
                    
            <h3>General Practioner Services at Medical</h3>
            <div className="ourService-wrapper">
                <Service />
            </div>
        </div>
    )
}   
export default OurService;


