import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useItems } from "../context/ItemContext";
import { useUsers } from "../context/UserContext";
import default_img from "../assets/default_img.png"
import "../css/Profile.css";

function Profile(){
    const [isEditing, setIsEditing] = useState(false);
    const { setItems } = useItems();
    const { users, currentUser, setCurrentUser, updateUser, deleteUser } = useUsers();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: currentUser.name,
        username: currentUser.username,
        email: currentUser.email,
        profilePic: currentUser.profilePic || default_img
    });

    const handleChange = (e) => {
        const { name, value, files, type } = e.target;

        if (type === "file") {
            const file = files[0];

            if (!file) return; // User pressed Cancel

            setFormData(prev => ({
                ...prev,
                [name]: URL.createObjectURL(file)
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    function resetForm() {
        setFormData({
            name: currentUser.name,
            username: currentUser.username,
            email: currentUser.email,
            password: currentUser.password,
            profilePic: currentUser.profilePic
        });
    }

    function handleSave(e) {
        e.preventDefault();
        
        if (!formData.name || !formData.username || !formData.email) {
            alert("Empty fields.");
            return;
        }
        
        if (users.some(user => user.username === formData.username && formData.username !== currentUser.username)) {
            alert("Username already in use.");
            return;
        }

        if (users.some(user => user.email === formData.email && formData.email !== currentUser.email)) {
            alert("Email already in use.");
            return;
        }

        const updatedUser = {
            id: currentUser.id,
            name: formData.name,
            username: formData.username,
            email: formData.email,
            password: formData.password,
            profilePic: formData.profilePic || default_img
        };

        updateUser(updatedUser);

        setIsEditing(false);
    }

    function handleDelete() {

        const confirmed = window.confirm(
            "Are you sure you want to delete your account?"
        );

        if (!confirmed) return;

        deleteUser(currentUser.id);
    }

    return(
        <div>
            <h2>Profile</h2>
            <div className="green-container">
            
                <form className="profile-white-container">
                    {
                        isEditing ?
                        (
                            <div className={`profilePic-container ${isEditing ? "active" : ""}`}>
                                <label htmlFor="image-upload" >
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
                            </div>
                        )
                        :
                        (
                            <div className={`profilePic-container ${isEditing ? "active" : ""}`}>
                                <img src={currentUser.profilePic} alt="ProfilePicture" />
                            </div>
                        )
                    }
                    
                    <div className="profile-details">
                        <p>Name: </p><div>{
                            isEditing ?
                            (
                                <input
                                    className={`details-block ${isEditing ? "active" : ""}`}
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            )
                            :
                            (
                                <p className={`details-block ${isEditing ? "active" : ""}`}>
                                    {currentUser.name}</p>
                            )
                        }</div>

                        <p>Username: </p><div>{
                            isEditing ?
                            (
                                <input
                                    className={`details-block ${isEditing ? "active" : ""}`}
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                            )
                            :
                            (
                                <p className={`details-block ${isEditing ? "active" : ""}`}>
                                    {currentUser.username}</p>
                            )
                        }</div>

                        <p>Email: </p><div>{
                            isEditing ?
                            (
                                <input
                                    className={`details-block ${isEditing ? "active" : ""}`}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            )
                            :
                            (
                                <p className={`details-block ${isEditing ? "active" : ""}`}>
                                    {currentUser.email}</p>
                            )
                        }</div>

                    </div>
                    
                    {
                        isEditing ?
                        (   
                            <div className="edit-buttons">
                                <button type="button" 
                                onClick={handleSave}>
                                    Save
                                </button>
                                <button type="button"
                                onClick={() => {
                                    setIsEditing(false);
                                    resetForm();
                                }}>
                                    Cancel
                                </button>
                            </div>
                        )
                        :
                        (
                            <button type="button" 
                            onClick={() => {
                                setIsEditing(true);
                                resetForm();
                            }}>
                                Edit
                            </button>
                        )
                    }
                    
                    <div className="buttons-box">
                        <button 
                        type="button"
                        className="delete-button"
                        onClick={handleDelete}
                        >Delete Account</button>

                        <button 
                        type="button"
                        className="logout-button"
                        onClick={() => {setCurrentUser(null);
                        navigate("/");
                        }}>Log Out</button>
                    </div>
                </form>
                

        </div>
        </div>
    );
}

export default Profile;