import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useItems } from "../context/ItemContext";
import { useUsers } from "../context/UserContext";
import { useParams } from "react-router-dom";
import categories from "../data/categories";
import types from "../data/types";
import default_img from "../assets/default_img.png"
import '../css/Item.css'

function Item(){
    const { items, updateItem, deleteItem } = useItems();
    const { users, setUsers, currentUser } = useUsers();
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const item = items.find(
        item => item.id === Number(id)
    );

    if (!item) {
        return <h2>Item not found.</h2>;
    }

    const [formData, setFormData] = useState({
        name: item.name,
        description: item.description,
        category: item.category,
        type: item.type,
        image: item.image || default_img
    });

    const owner = users.find(
        owner => owner.id === item.ownerId
    );

    const isOwner = currentUser.id === item.ownerId;

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
            name: item.name,
            description: item.description,
            category: item.category,
            type: item.type,
            image: item.image || default_img
        });
    }

    function handleSavePost(e) {
        e.preventDefault();
        
        if (!formData.name || !formData.description || !formData.category || 
        !formData.type || !formData.image) {
            alert("Empty fields.");
            return;
        }

        const updatedItem = {
            id: item.id,
            ownerId: currentUser.id,
            name: formData.name,
            description: formData.description,
            category: formData.category,
            type: formData.type,
            image: formData.image || default_img
        };

        updateItem(updatedItem);

        setIsEditing(false);
    }

    function handleDeletePost() {

        const confirmed = window.confirm(
            "Are you sure you want to delete this post?"
        );

        if (!confirmed) return;
        
        deleteItem(item.id);

        const updatedUsers = users.map(user => ({
            ...user,
            favouriteItemIds: user.favouriteItemIds.filter(
                id => id !== item.id
            )
        }));

        setUsers(updatedUsers);
    }

    return(
        <form className="item-content">
            {
                isEditing ?
                (
                    <div className={`img-container ${isEditing ? "active" : ""}`}>
                        <label htmlFor="image-upload" >
                            <img src={formData.image || default_img} alt="Upload" />
                        </label>

                        <input
                            id="image-upload"
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            style={{ display: "none" }}
                        />
                    </div>
                )
                :
                (
                    <div className={`img-container ${isEditing ? "active" : ""}`}>
                        <img src={item.image} alt="ProfilePicture" />
                    </div>
                )
            }
            
            <div className="item-details">
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
                            {item.name}</p>
                    )
                }</div>

                <p>Description: </p><div>{
                    isEditing ?
                    (
                        <textarea
                            className={`details-block ${isEditing ? "active" : ""}`}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={6}
                        />
                    )
                    :
                    (
                        <p className={`details-block ${isEditing ? "active" : ""}`}>
                            {item.description}</p>
                    )
                }</div>

                <p>Category: </p><div>{
                    isEditing ?
                    (
                        <select
                            className={`details-block ${isEditing ? "active" : ""}`}
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >

                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                {cat}
                                </option>
                            ))}
                        </select>
                    )
                    :
                    (
                        <p className={`details-block ${isEditing ? "active" : ""}`}>
                            {item.category}</p>
                    )
                }</div>

                <p>Type: </p><div>{
                    isEditing ?
                    (
                        <select
                            className={`details-block ${isEditing ? "active" : ""}`}
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                        >

                            {types.map((typ) => (
                                <option key={typ} value={typ}>
                                {typ}
                                </option>
                            ))}
                        </select>
                    )
                    :
                    (
                        <p className={`details-block ${isEditing ? "active" : ""}`}>
                            {item.type}</p>
                    )
                }</div>
                <p>Owner: </p>
                <div className={`details-block`}>
                    <div className="ownerPic-container">
                        <img className="ownerPic" src={owner.profilePic} alt="OwnerPic" />
                    </div>
                    <p >{owner.name}</p>
                </div>
            </div>
            
            { isOwner && (
                <div>{
                    isEditing ?
                    (   
                        <div className="edit-buttons">
                            <button type="button" 
                            onClick={handleSavePost}>
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
                    onClick={() => {handleDeletePost();
                        navigate("/home");
                    }}
                    >Delete Post</button>
                </div>
            </div>
            )}
        </form>
    );
}

export default Item;