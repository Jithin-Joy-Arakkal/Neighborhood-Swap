import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useUsers } from "../context/UserContext";
import default_img from "../assets/default_img.png"
import '../css/SignUp.css'

function SignUp(){
    const { users, setUsers, setCurrentUser } = useUsers();
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePic: default_img
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files, type } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === "file" ? URL.createObjectURL(files[0]) : value
        }));

    };

    const handleSignUp = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.username || !formData.email || 
        !formData.password || !formData.confirmPassword) {
            alert("Empty fields.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert("Password and Confirm Password should be same.");
            return;
        }

        if (users.some(user => user.username === formData.username)) {
            alert("Username already in use.");
            return;
        }

        if (users.some(user => user.email === formData.email)) {
            alert("Email already in use.");
            return;
        }

        const newUser = {
            id: Date.now(),
            name: formData.name,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            profilePic: formData.profilePic || default_img,
            favouriteItemIds: []
        };

        setUsers(prev => [...prev, newUser]);
        setCurrentUser(newUser);

        navigate("/home");
    }

    return(
        <div>
            <h2>Sign Up</h2>
            <div className="green-container">

                    <form onSubmit={handleSignUp} className="white-container">
                        <label htmlFor="image-upload" className="signup-img-container">
                            <img src={formData.profilePic || default_img} alt="Upload" />
                        </label>

                        <input
                            id="image-upload"
                            type="file"
                            name="profilePic"
                            accept="image/*"
                            onChange={handleChange}
                            style={{ display: "none" }}
                        />

                        <input 
                            type="text" 
                            name="name"
                            placeholder="Name" 
                            className="name-input" 
                            value={formData.name}
                            onChange={handleChange}/>

                        <input 
                            type="text" 
                            name="username"
                            placeholder="Username" 
                            className="username-input" 
                            value={formData.username}
                            onChange={handleChange}/>

                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            className="email-input" 
                            value={formData.email}
                            onChange={handleChange}/>

                        <input 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            className="password-input" 
                            value={formData.password}
                            onChange={handleChange}/>

                        <input 
                            type="password" 
                            name="confirmPassword"
                            placeholder="Confirm Password" 
                            className="confirm-password-input" 
                            value={formData.confirmPassword}
                            onChange={handleChange}/>
                        
                        <button type="submit">
                            Sign Up
                        </button>
                    </form>

            </div>
        </div>
    );
}

export default SignUp;