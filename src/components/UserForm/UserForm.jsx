import './UserForm.css';
import {useState, useEffect} from 'react';
import Modal from '../Modal/Modal';
import emailjs from '@emailjs/browser'; 
import before from "../../assets/images/before.jpg"
import during from "../../assets/images/during.jpg"
import after from "../../assets/images/after.jpg"

export default function UserForm({ onClose }){

    const [bookingForm, setBookingForm] = useState(() => {
        const savedData = localStorage.getItem("bookingApplication"); 
        return savedData ? JSON.parse(savedData) : {
          name: "",
          date: "", 
          time: "", 
          message: "", 
        }; 
    }
  ); 

        const [modalOpen, setModalOpen] = useState(false);
        const [modalTitle, setModalTitle] = useState("");
        const [modalMessage, setModalMessage] = useState("");
        const [modalType, setModalType] = useState("");

        const showModal = (title, message, type) => {
          setModalTitle(title);
          setModalMessage(message);
          setModalType(type);
          setModalOpen(true);
        };

    useEffect(() => {
      localStorage.setItem("bookingApplication", JSON.stringify(bookingForm));
    }, [bookingForm]); 

    const handleChange = (e) => {
    const {name: fieldName, value} =  e.target; 
    setBookingForm((currentData) => ({...currentData, 
      [fieldName]: value
    })); 
  }; 

  const handleSubmit = async (e) => { 
    e.preventDefault();   

    const name = bookingForm.name?.trim() ?? "";
    const date = bookingForm.date?.trim() ?? "";
    const time = bookingForm.time?.trim() ?? "";
    const message = bookingForm.message?.trim() ?? "";

    if (!name) {
        showModal(
          "Validation Error",
          "Please enter your Name.",
          "error"
        );
        return;
    }

    if (!date) {
        showModal(
          "Validation Error",
          "Please select a date.",
          "error"
        );
        return;
    }

    if (!time) {
        showModal(
          "Validation Error",
          "Please select a time.",
          "error"
        );
        return;
    }

    if (!message) {
        showModal(
          "Validation Error",
          "Please enter a message.",
          "error"
        );
        return;
    }

    const templateParams = {
        name,
        date,
        time,
        message,
      };

    try{

      await emailjs.send(    
            "service_la8nlvo", // this tells the EmailJS which email service to use (e.g., Gmail, Outlook, etc.)
            "template_g6q83c9", // this tells EmailJS which email template to use for sending the email
            templateParams, // the data to be sent in the email, which includes the user's name, date, time, and message
            "UFDAefszT8u1qLjxI"); // this is the public key provided by EmailJS for authentication and authorization when sending emails from the client-side application

            setBookingForm({
              name: "",
              date: "",
              time: "",
              message: "",
          });

            localStorage.removeItem("bookingApplication");
            showModal(
              "Success",
              "Your appointment request has been submitted successfully!",
              "success"
            );
    
          }catch(error){

            console.log("Error sending email: ", error); 
            console.log("EmailJS Error:", error);
            console.log("Status:", error.status);
            console.log("Text:", error.text);
            showModal(
              "Email Failed",
              "Your appointment could not be sent. Please try again.",
              "error"
            );
    }
  };
      return (
        <div className="user-form">
          {onClose && (
            <button
              type='button'
              className='user-form-close'
              onClick={onClose}
              aria-label='Close form'
            >
              X
            </button>
          )}

          <header className="user-form-header">
            <h2 className="user-form-title">
              User Information
            </h2>
          </header>

          <div className='user-form-layout'>
            <div className="user-form-container">
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="username">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="name"
                    value={bookingForm.name || ""}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field-row">
                  <div className="form-field">
                    <label htmlFor="appointment-date">
                      Date:
                    </label>
                    <input
                      type="date"
                      id="appointment-date"
                      name="date"
                      value={bookingForm.date || ""}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="appointment-time">
                      Time:
                    </label>
                    <input
                      type="time"
                      id="appointment-time"
                      name="time"
                      value={bookingForm.time || ""}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">
                    Message:
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={bookingForm.message || ""}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <button
                  className="user-form-submit"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>

            <aside className="banner-kids">
              <h3>Before, during and after your stay</h3>
              <div className="banner-pic">
                <img src={before} alt="Patient before treatment"/>
                <img src={during} alt="Patient during treatment"/>
                <img src={after} alt="Patient after treatment"/>
              </div>
            </aside>
          </div>

          <Modal
            isOpen={modalOpen}
            title={modalTitle}
            message={modalMessage}
            type={modalType}
            onClose={() => setModalOpen(false)}
          />
        </div>
      );
    }

