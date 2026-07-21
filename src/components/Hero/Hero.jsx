import "./Hero.css"
import { useState } from "react";
import UserForm from '../UserForm/UserForm'

const Hero = () => {
    // showform -> tell us the whether the form is currently visible (T, F)
    // Whilst the setShowForm -> changes showForm 
    const [showForm, setShowForm] = useState(false); 

    return (
        <div className="banner-container">

            <section id="top-section" className="top-section">

                <div className="banner-content">
                    <h1>
                        Welcome to Our Medical Center
                    </h1>
                        <p>
                            Your health is our priority.
                        </p>
                        <p>What to expect no matter what your age,
                            going into hospital can be daunting, 
                            but Life Healthcare wants you to know that
                            we are walking every step of the patient 
                            journey with you.
                        </p>

                    <button 
                        className="btn-primary" 
                        onClick={() => {console.log("button clicked")
                                setShowForm(true)
                        }}   
                        >
                        Request an Appointment
                    </button>
                </div>

            </section>
            {showForm && (<UserForm onClose = {() => setShowForm(false)} />
    )}

        </div>
    );
};

export default Hero;