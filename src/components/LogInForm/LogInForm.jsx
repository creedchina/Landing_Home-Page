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
    alert(`Attempting login for: ${loginCredentials.uname || 'Guest'}`);  
    };
    return(

    <div className = "loginform-page-wrapper"> 

    <div className="loginform-container">

        <h2>Welcome Back</h2>
        <p className = "login-subtitle">Please Enter your credentials to log in.</p>

            <form onSubmit={handleSubmit}> 

                <label htmlFor="uname"><b>Username or Email Address: </b></label>
                <input type="text"
                id = "uname" 
                placeholder="Enter Username" 
                name="uname" 
                value = {loginCredentials.uname || ""} 
                onChange={handleChange}
                required
                />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" 
                id = "psw"
                placeholder="Enter Password" 
                name="psw"
                value = {loginCredentials.psw || ""} 
                onChange = {handleChange} 
                required
                />

                <button type="submit" className = "login-btn-primary">Login</button>

                <label className="remember-me-label">
                    <input type="checkbox" 
                    checked={loginCredentials.remember || false}
                    name="remember" 
                    onChange = {handleChange} 
                    /> 
                    Remember me
                </label>

                <div className="form-footer-actions">
                    <button type="button" onClick={() => document.getElementById('id01').style.display='none'} 
                    className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>

            </form>
        </div>
    </div>

    )
    }
 
