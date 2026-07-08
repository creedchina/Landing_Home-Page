import "./Testimonials.css"
import medical_Patient_1 from "../../assets/images/medical_Patient_1.jpg"
import medical_Patient_2 from "../../assets/images/medical_Patient_2.jpg"
import medical_Patient_3 from "../../assets/images/medical_Patient_3.jpg"

const Testimonials = () => {

    return(
        <div className="testimonial-container">

                <h3>What Our Patient Say</h3>

        <div className="testimonial-grid">

                <div className="testimonial-card">
                    <img src={medical_Patient_1} alt="medical_Patient_1"/>
                    <p>"The doctors were incredibly professional and caring.<br />
                     I received excellent treatment from start to finish."</p>
                    <span>— Sarah M.</span>
                </div>          

                <div className="testimonial-card">
                    <img src={medical_Patient_2} alt="medical_Patient_2"/>
                    <p>"Booking an appointment was easy, and <br />
                     the medical staff made me feel comfortable throughout my visit."</p>
                    <span>— David K.</span>
                </div>

                 <div className="testimonial-card">
                 <img src={medical_Patient_3} alt="medical_Patient_3"/>
                 <p>"Outstanding service, knowledgeable doctors, and a welcoming environment.<br />
                  Highly recommended."</p>
                 <span>— Linda P.</span>
                </div>

            </div>
            </div>
    )
}
export default Testimonials; 
