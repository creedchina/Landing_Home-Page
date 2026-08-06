
import"./ourDoctors.css"; 
import Doctor from "../Doctor/Doctor";


const Doctors = () => {
  return (
    <div className="doctors-container">

        <span className='section-tag'>Partners</span>
        
          <h2>
            Stronger together—
              <br />
            Our network of trusted medical partners.
          </h2>

        <p>Teamwork and effective communication among Doctor members is critical to <br />
            providing high-quality patient care and ensuring positive health outcomes.
        </p>
{/* 
        <img className="sphere2" src={sphere2} alt="sphere2" />
        <img className="sphere3" src={sphere3} alt="sphere3" /> */}

        <div className="doctors-wrapper">
            <Doctor />
        </div>

        <button
          className="partner-btn"
          onClick={() => window.location.href = "mailto:partnerships@medical.co.za"}
      >
          Become a Partner
        </button>

    </div>
  )
}

export default Doctors