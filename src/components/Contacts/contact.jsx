import { useEffect, useState } from 'react'
import './contact.css'

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    surname: '',
    email: '',
    date: '',
    query: '',
  })

  useEffect(() => {
    localStorage.setItem('ContactApplication', JSON.stringify(contactForm))
  }, [contactForm])

  const handleChange = (e) => {
    const { name, value } = e.target
    setContactForm((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      `Booking requested for: ${contactForm.name || 'Guest'} on 
                            ${contactForm.date || 
                                'no date chosen'}`
    )
  }

  return (
    <div className='contact-us-container'>
      <h2>Contact Us</h2>

      <div className='contact-us-content'>
        <h2>Get in Touch</h2>

        <p className='subtitle'>
          Have questions or need medical assistance? <b>Our friendly team is here to help.</b>
          For feedback on our quality of service – please use the contact form. <b>
            We will direct your message to the correct team and get back to you within 48 hours.</b>
          If you have not received a response, please leave a message on 011 219 9111.
        </p>

        <form onSubmit={handleSubmit}>

          <div className='contact-form'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={contactForm.name}
              onChange={handleChange}
            />

            <label htmlFor='surname'>Surname:</label>
            <input
              type='text'
              id='surname'
              name='surname'
              value={contactForm.surname}
              onChange={handleChange}
            />

            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={contactForm.email}
              onChange={handleChange}
            />

            <label htmlFor='date'>Admission Date:</label>
            <input
              type='date'
              id='date'
              name='date'
              value={contactForm.date}
              onChange={handleChange}
            />

            <label htmlFor='message'>Query:</label>
            <textarea
              id='message'
              name='message'
              value={contactForm.query}
              onChange={handleChange}
            />

            <button type='submit'>Submit</button>
          </div>
        </form>

        <div className='contact-lists'>
          <h2>Head Office</h2>

          <p className='subtitle'>
            Please note that our office hours are from 08h00 to 16h30 on weekdays. <b>
              Numbers below are only available during office hours.</b>
          </p>

          <div className='contact-list-section'>
            <h3>Physical Address</h3>
            <ul>
              <li>Oxford Parks</li>
              <li>203 Oxford Road (corner</li>
              <li>Eastwood & Oxford Roads)</li>
              <li>Cape Town, South Africa</li>
            </ul>
          </div>

          <div className='contact-list-section'>
            <h3>Postal Address</h3>
            <ul>
              <li>Oxford Parks</li>
              <li>203 Oxford Road (corner</li>
              <li>Eastwood & Oxford Roads)</li>
              <li>Cape Town, South Africa</li>
            </ul>
          </div>

          <div className='contact-list-section'>
            <h3>Hours</h3>
            <ul>
              <li>Monday – Friday: 08:00 – 17:00</li>
              <li>Saturday: 08:00 – 13:00</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

