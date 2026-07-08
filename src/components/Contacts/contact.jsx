import './contact.css'

const contact = () => {
    return(
        <div className='contact-us-container'>

            <h2>Contact Us</h2>

            <div className='contact-us-content'>
                <form>
        <label htmlFor="username">Name:</label>
        <input type="text" id="username" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Submit</button>
      </form>
            </div>





        </div>

    )
}
export default contact; 