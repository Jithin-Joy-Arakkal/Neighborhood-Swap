import { useState } from "react";
import { useItems } from "../context/ItemContext";
import ItemCard from "./ItemCard";
import categories from "../data/categories";
import types from "../data/types";
import '../css/Home.css'

function Home(){
    const { items } = useItems();
    const [search, setSearch] = useState("");
    const [showFavourites, setShowFavourites] = useState(false);
    const [category, setCategory] = useState("All");
    const [type, setType] = useState("All");
    
    const displayedItems = items
    // Favourite filter
    .filter(item =>
        showFavourites ? item.isFavourite : true
    )

    // Search filter
    .filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    )

    // Category filter
    .filter(item =>
        category === "All" ? true : item.category === category
    )

    // Type filter
    .filter(item =>
        type === "All" ? true : item.type === type
    );

    

    return(
        <div className="content">
            
                <input type="text" placeholder="Search items..." value={search} className="searchbar" 
                onChange={
                    (e) => setSearch(e.target.value)
                }
                />
            <div className="search-filter">
                <p>Filters: </p>
                <button
                    className={`favourites-btn ${showFavourites ? "active" : ""}`}
                    onClick={() => setShowFavourites(prev => !prev)}
                >
                    Favourites
                </button>

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

                <button
                    className={"clear-btn"}
                    onClick={() => {setCategory("All");
                        setType("All");
                    }}
                >
                    Clear
                </button>

            </div>

            <div className="card-section">
                {
                    displayedItems.map((item) => (
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