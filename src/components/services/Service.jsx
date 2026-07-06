import services from '../../assets/services';
import './Service.css';

const Service = () => {
    return (
        <>
        {services.map((service) => (
        <div className="service-container">

                <div className="service-icons">
                    <img src={service.image} alt="Service Icon" className="service-icon" />
                </div>

                <div className="service-heading">
                    <h5>{service.name}</h5>
                </div>

                <div className="service-details">
                    <p>{service.body}</p>
                </div>
        </div>
        ))}
        </>
    )
}

export default Service;