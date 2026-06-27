import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../css/ItemCard.css'

function ItemCard({item}){

    const [favourite, setFavourite] = useState(false);
    const navigate = useNavigate();

    return(
        <div className="itemcard" 
        onClick={() => navigate(`/item/${item.id}`)}>
            <div className="image-container">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
                <h4>{item.name}</h4>
                <p>{item.category}</p>
                <p className="type-container">{item.type}</p>
                <button className="favourite-button" onClick={(e) => {
                    e.stopPropagation();
                    setFavourite(!favourite);}}>{ favourite ? "❤️" : "🩶" }
                </button>
            </div>
        </div>
    );
}

export default ItemCard;