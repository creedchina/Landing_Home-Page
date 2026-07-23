import './ourService.css'
// import Service from '../services/Service'
import FlipCard from '../flipcard/Flipcard'
import modern_Tech from "../../assets/images/modern_Tech.jpg"
import emergency_med from "../../assets/images/emergency_med.jpg"
import pricing from "../../assets/images/pricing.jpg"
import kid_2 from "../../assets/images/kid_2.jpg"
import emergency_room from "../../assets/images/emergency_room.jpg"
import massage from "../../assets/images/massage.jpg"

import { Link } from 'react-router-dom'

const OurService = () => {
    return (
        <div className="ourService-container">

            <span className='section-tag'>General Practioner Services at Medical</span>

                <h3>Family Doctors Near You Modern General Practitioners 
                    in Bellville & Durbanville
                </h3>

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

                        <FlipCard 
                        frontTitle="Maternal Health Hygiene Protocols"
                        backgroundImage={kid_2}
                        backTitle="Maternal Health Hygiene Protocols"
                        backText="Ensuring the highest standards of maternal health and hygiene, providing safe and effective care for mothers and infants."
                        linkTo="/protocols/handwashing"
                        />
                        
                        <FlipCard 
                        frontTitle="Urgent Medical Response"
                        backgroundImage={emergency_room}
                        backTitle="Urgent Medical Response"
                        backText="Our team is ready to provide immediate medical attention in urgent situations, ensuring prompt and effective care for all patients."
                        linkTo="/patient-services/critical-care"
                        />

                        <FlipCard 
                        frontTitle="Therapeutic Touch Therapy"
                        backgroundImage={massage}
                        backTitle="Therapeutic Touch Therapy"
                        backText="A holistic approach to healing, using gentle touch techniques to relieve pain, reduce stress, and promote overall well-being."
                        linkTo="/services/holistic-wellness"
                        />

                    </div>
                             <Link to="/Service" className="btn-explore">
                                    Explore More
                             </Link>

                    
        </div>
    )
}   
export default OurService;


