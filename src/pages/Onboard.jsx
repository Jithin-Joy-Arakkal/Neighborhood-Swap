import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUsers } from "../context/UserContext";
import '../css/Onboard.css'

function Onboard(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        login: "",
        password: ""
    });

    const { users, setCurrentUser } = useUsers();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name] : value
        }));
    };

    function handleLogin(e) {
        e.preventDefault();

        const user = users.find(
            user =>
                (
                user.email.toLowerCase() === formData.login.toLowerCase() ||
                user.username.toLowerCase() === formData.login.toLowerCase()
                ) &&
                user.password === formData.password
        );

        if (!user || !formData.login || !formData.password) {
            alert("Invalid email or password");
            return;
        }

        setCurrentUser(user);

        navigate("/home");
    }

    return(
        <div className="onboard-content">
            <h1>Welcome to <br /> Neighborhood Swap</h1>

            <form id="login-form" onSubmit={handleLogin} className="login-box">
                <input 
                type="text" 
                name="login"
                value={formData.login}
                placeholder="Username or Email" 
                className="login-input"
                onChange={handleChange}/>
                <input 
                type="password" 
                name="password"
                value={formData.password}
                placeholder="Password" 
                className="login-input"
                onChange={handleChange}/>
            </form>

            <div className='login-buttons'>
                <button type="submit" form="login-form" className="login-button" 
                    >Login</button>
                <p>or</p>
                <button className="signup-button" onClick={() => navigate("/signup")}>Sign Up</button>
            </div>
        </div>
    );
}

export default Onboard;