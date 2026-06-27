import { useState } from "react";
import { useItems } from "../context/ItemContext";
import ItemCard from "./ItemCard";
import '../css/Home.css'

function Home(){
    const { items } = useItems();

    const [search, setSearch] = useState("");

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    )

    return(
        <div className="content">
            <input type="text" placeholder="Search items..." value={search} className="searchbar" 
            onChange={
                (e) => setSearch(e.target.value)
            }
            />

            <div className="card-section">
                {
                    filteredItems.map((item) => (
                        <ItemCard
                            key={item.id}
                            item={item}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home