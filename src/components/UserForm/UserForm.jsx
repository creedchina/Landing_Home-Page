import './UserForm.css';

const UserForm = () => {
  return (
    <div className="user-form">

      <h2>User Information</h2>
      
      <div className = "user-form-container">
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
  );
};

export default UserForm;