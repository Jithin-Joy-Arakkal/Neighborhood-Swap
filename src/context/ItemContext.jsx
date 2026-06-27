import { createContext, useContext, useState } from "react";
import initialItems from "../data/items";

const ItemContext = createContext();

export function ItemProvider({ children }) {

    const [items, setItems] = useState(initialItems);

    return (
        <ItemContext.Provider value={{ items, setItems }}>
            {children}
        </ItemContext.Provider>
    );
}

export function useItems() {
    return useContext(ItemContext);
}