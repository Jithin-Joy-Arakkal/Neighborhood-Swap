import { useItems } from "../context/ItemContext";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import categories from "../data/categories";
import types from "../data/types";
import '../css/Post.css'

import default_img from "../assets/default_img.png"

function Post(){
    const { items, setItems } = useItems();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");
    const [image, setImage] = useState(null);

    const navigate = useNavigate();


    const handleCreatePost= () => {
        const newItem={
                id : Date.now(),
                name,
                description,
                category,
                type,
                image,
                isFavourite : false
            };

        setItems(prevItems => [...prevItems, newItem]);

        navigate("/home");
    }

    function handleImageChange(e) {
        const file = e.target.files[0];

        if (file) {
            setImage(URL.createObjectURL(file));
        }
    }

    return(
        <div>
            <section>
                <h2>Create Post</h2>
            </section>
            <div className="green-container">
                <div className="white-container">
                    
                    <label htmlFor="image-upload" className="new-img-container">
                        <img src={image || default_img} alt="Upload" />
                    </label>

                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                    />

                    <input type="text" placeholder="Name" className="name-input" value={name}
                    onChange={(e) => setName(e.target.value)}/>

                    <textarea
                        placeholder="Description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={6}
                    />

                    <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>

                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                            {cat}
                            </option>
                        ))}
                    </select>

                    <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Select Type</option>

                        {types.map((typ) => (
                            <option key={typ} value={typ}>
                            {typ}
                            </option>
                        ))}
                    </select>

                    <button onClick={handleCreatePost}>Create Post</button>

                </div>
            </div>
        </div>
    );
}

export default Post;
