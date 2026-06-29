import { useState } from "react";
import { useItems } from "../context/ItemContext";
import { useUsers } from "../context/UserContext";
import { useNavigate } from 'react-router-dom';
import '../css/ItemCard.css'

function ItemCard({item}){

    const { setItems } = useItems();
    const navigate = useNavigate();
    const { currentUser, toggleFavourite } = useUsers();
    const isFavourite = currentUser.favouriteItemIds.includes(item.id);

    return(
        <div className="itemcard" 
        onClick={() => navigate(`/item/${item.id}`)}>
            <div className="image-container">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <p className="type-container">{item.type}</p>
                <button className="favourite-button" onClick={(e) => {
                    e.stopPropagation();
                    toggleFavourite(item.id);}}>{ isFavourite ? "❤️" : "🩶" }
                </button>
            </div>
        </div>
    );
}

export default ItemCard;