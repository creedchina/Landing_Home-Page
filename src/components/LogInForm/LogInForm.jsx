import { useState } from "react";
import './LogInForm.css'

export default function LoginForm(){

    const [loginCredentials, setLoginCredentials] = useState({}); 

    const handleChange = (e) => {
        const{name, value, type, checked} = e.target; 
        setLoginCredentials((currentData) => ({...currentData,
            [name] : type === 'checkbox' ? checked : value
        })); 
    }; 
    const handleSubmit = (e) => {
        e.preventDefault(); 

    console.log("Submitting login info:", loginCredentials);
    alert(`Attempting login for: ${loginCredentials.uname || 'Guest'}`);  };
    
    return(

    <div className="loginform-container">

        <h2>Welcome Back</h2>
        <p>Please Enter your credentials to log in.</p>
 
         <div className="login-container">
            <form onSubmit={handleSubmit} > 

                <label htmlFor="login-email"><b>Username or Email Address: </b></label>
                <input type="text" 
                placeholder="Enter Username" 
                name="uname" required 
                onChange={handleChange}
                required
                />

                <label htmlFor="login-password"><b>Password</b></label>
                <input type="password" 
                placeholder="Enter Password" 
                name="psw" required 
                value = {handleChange} 
                required
                />

                <button type="submit">Login</button>

           <label className="remember-me-label">
                <input type="checkbox" 
                checked={loginCredentials.remember || false}
                name="remember" 
                onChange = {handleChange} /> 
                Remember me
            </label>

                <div className="container" style={{backgroundColor:"#f1f1f1"}}>
                <button type="button" onClick={() => document.getElementById('id01').style.display='none'} className="cancelbtn">Cancel</button>
                <span className="psw">Forgot <a href="#">password?</a></span>
                </div>

            </form>
    </div>
</div>

    )
}