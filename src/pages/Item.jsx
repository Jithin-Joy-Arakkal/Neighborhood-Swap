import { useState } from "react";
import { useItems } from "../context/ItemContext";
import { useUsers } from "../context/UserContext";
import { useParams } from "react-router-dom";
import '../css/Item.css'

function Item(){
    const { items } = useItems();
    const { users } = useUsers();

    const { id } = useParams();

    const item = items.find(
        item => item.id === Number(id)
    );

    if (!item) {
        return <h2>Item not found.</h2>;
    }

    const owner = users.find(
        owner => owner.id === item.ownerId
    );

    return(
        <div className="item-content">
            <div className="img-container">
                <img src={item.image} alt={item.name} />
            </div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Category: {item.category}</p>
            <p>Type: {item.type}</p>
            <p>Owner: {owner.name}</p>
        </div>
    );
}

export default Item;