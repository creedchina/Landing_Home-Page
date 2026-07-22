import './AboutUs.css'
import { FaUserDoctor } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import aboutMetrics from '../../assets/aboutMetrics'
import AnimatedCounter from '../AnimatedCounter/AnimatedCounter';
import medical_Patient_2 from '../../assets/images/medical_Patient_2.jpg'

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={aboutRef} className='about'>
            <div className='about-body'>
                <div className={`about-image ${isVisible ? "show" : ""}`}>
                    <img src={medical_Patient_2} alt="Nurse with patient" />

                    <div className='floating-badge'>
                        <span className="badge-icon">
                            <FaUserDoctor />
                        </span>

                        <div className="badge-text">
                            <h4>24/7 Care</h4>
                            <p>Always Here For You</p>
                        </div>
                    </div>
                </div>

                <div className={`about-content ${isVisible ? "show" : ""}`}>
                    <div className={`about-header ${isVisible ? "show" : ""}`}>
                        <span className="section-tag">
                            ABOUT US
                        </span>

                        <h2>
                            Compassionate Healthcare
                            <br />
                            Built Around Your Well-Being
                        </h2>
                    </div>

                    <div className={`about-text ${isVisible ? "show" : ""}`}>
                        <p>
                            We believe every patient deserves compassionate,
                            timely, and professional healthcare. Our team is
                            committed to making quality medical care accessible
                            while putting your health first.
                        </p>
                    </div>
                </div>
            </div>

            <div className={`about-metrics ${isVisible ? "show" : ""}`}>
                {aboutMetrics.map((metric, index) => (
                    <div
                        className={`metric ${isVisible ? "show" : ""}`}
                        key={metric.label}
                        style={{ transitionDelay: `${0.5 + index * 0.15}s` }}
                    >
                        <span className='metric-value'>
                            <AnimatedCounter
                                end={metric.value}
                                suffix={metric.suffix}
                                isVisible={isVisible}
                            />
                        </span>

                        <span className='metric-label'>
                            {metric.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutUs;