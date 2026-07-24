import './UserForm.css';
import {useState, useEffect} from 'react';
import before from "../../assets/images/before.jpg"
import during from "../../assets/images/during.jpg"
import after from "../../assets/images/after.jpg"

export default function UserForm({ onClose }){

  const [bookingForm, setBookingForm] = useState(() => {
    const savedData = localStorage.getItem("bookingApplication"); 
    return savedData ? JSON.parse(savedData) : {}; 
  }); 

  useEffect(() => {
    localStorage.setItem("bookingApplication", JSON.stringify(bookingForm));
  }, [bookingForm]); 

  const handleChange = (e) => {
  const {name, value} =  e.target; 
  setBookingForm((currentData) => ({...currentData, 
    [name]: value
  })); 
}; 

  const handleSubmit = (e) => { 
    e.preventDefault();   
      if(!bookingForm.name){
        alert("Please enter your Name."); 
        return; 
      }
      if(!bookingForm.date){
        alert("Please select a date");
        return; 
      }
      if(!bookingForm.time){
        alert('Please select a time'); 
        return; 
      }
      if(!bookingForm.message){
        alert("Please enter a message."); 
        return; 
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

    </div>
  );
}

