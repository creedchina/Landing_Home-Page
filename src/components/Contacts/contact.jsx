import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

export default function Contact() {
  const [contactForm, setContactForm] = useState(() => {
    
    const savedData = localStorage.getItem('ContactApplication')
    return savedData ? JSON.parse(savedData) : {
      name: '', 
      surname: '',
      email: '',
      date: '',
      query: '',
    }
  })

  useEffect(() => {
    localStorage.setItem('ContactApplication', JSON.stringify(contactForm))
  }, [contactForm])

  const handleChange = (e) => {
    const { name, value } = e.target
    setContactForm((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const name = contactForm.name?.trim() ?? ''
    const surname = contactForm.surname?.trim() ?? ''
    const email = contactForm.email?.trim() ?? ''
    const date = contactForm.date?.trim() ?? ''
    const query = contactForm.query?.trim() ?? ''

    if (!name) {
      alert('Please enter your Name.')
      return
    }

    if (!surname) {
      alert('Please enter your Surname.')
      return
    }

    if (!email) {
      alert('Please enter your Email.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Please enter a valid Email.')
      return
    }

    if (!date) {
      alert('Please select an Admission Date.')
      return
    }

    if (!query) {
      alert('Please enter your Query.')
      return
    }

    const templateParams = {
      name,
      surname,
      email,
      date,
      query,
    }

    try {
      await emailjs.send(
        'service_flhrx4p',
        'template_gl5jssv',
        templateParams,
        'UFDAefszT8u1qLjxI'
      ); 

      setContactForm({
        name: '',
        surname: '',
        email: '',
        date: '',
        query: '',
      });

      localStorage.removeItem('ContactApplication');

      alert('Your message has been submitted successfully!')
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert('Email could not be sent. Please try again later.')
    }
  }

  return (
    <div className='contact-us-container'>
      <span className='section-tag'>Contact Us</span>
      <div className='contact-us-content'>
        <p className='subtitle'>
          <b>Have questions or need medical assistance?</b> <br />
          Our friendly team is here to help.
          For feedback on our quality of service – please use the contact form. <br />
          We will direct your message to the correct team and get back to you within 48 hours.<br />
          If you have not received a response, please leave a message on 011 219 9111.
        </p>

        <form onSubmit={handleSubmit}>
          <div className='contact-form'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              name='name'
              value={contactForm.name || ''}
              onChange={handleChange}
              required
            />

            <label htmlFor='surname'>Surname:</label>
            <input
              type='text'
              id='surname'
              name='surname'
              value={contactForm.surname || ''}
              onChange={handleChange}
              required
            />

            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={contactForm.email || ''}
              onChange={handleChange}
              required
            />

            <label htmlFor='date'>Admission Date:</label>
            <input
              type='date'
              id='date'
              name='date'
              value={contactForm.date || ''}
              onChange={handleChange}
              required
            />

            <label htmlFor='query'>Query:</label>
            <textarea
              id='query'
              name='query'
              value={contactForm.query || ''}
              onChange={handleChange}
              required
            />

            <button type='submit'>Submit</button>
          </div>
        </form>

        <div className='contact-lists'>
          <p className='subtitle'>
            Please note that our office hours are from 08h00 to 16h30 on weekdays. <b>
            Numbers below are only available during office hours.</b>
          </p>
        </div>
      </div>
    </div>
  )
}

