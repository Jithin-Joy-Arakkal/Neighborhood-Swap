import { createContext, useContext, useState } from "react";
import initialItems from "../data/items";

const ItemContext = createContext();


export function ItemProvider({ children }) {
    const [items, setItems] = useState(initialItems);

    function updateItem(updatedItem) {
        setItems(prev =>
            prev.map(item =>
                item.id === updatedItem.id
                    ? updatedItem
                    : item
            )
        );
    }

    function deleteItem(id) {
        // Remove the item
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    }

    return (
        <ItemContext.Provider value={{ items, setItems, updateItem, deleteItem }}>
            {children}
        </ItemContext.Provider>
    );
}

export function useItems() {
    return useContext(ItemContext);
}