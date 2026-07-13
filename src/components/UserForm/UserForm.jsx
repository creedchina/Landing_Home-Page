import './UserForm.css';
import {useState, useEffect} from 'react';

export default function UserForm(){

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
alert(`Booking requested for: ${bookingForm.name || 'Guest'} on 
                              ${bookingForm.date || 'no date chosen'} at 
                              ${bookingForm.time || 'no time chosen'}`);  
  }; 

  return (
    <div className="user-form">

      <h2>User Information</h2>
      
      <div className = "user-form-container">
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="username">Name:</label>
        <input type="text" id="username" name="name" />

        <label htmlFor="message">Date:</label>
        <input type="date" 
        name="date" 
        value={bookingForm.date || ""} onChange={handleChange} />
            
        <label htmlFor="message">Time:</label>
        <input type="time" 
        name="time" 
        value={bookingForm.time || ""} onChange={handleChange} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}

