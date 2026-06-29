import { createContext, useContext, useState } from "react";
import { useItems } from "./ItemContext";
import initialUsers from "../data/users";

const UserContext = createContext();

export function UserProvider({ children }) {
    const { setItems } = useItems();
    const [users, setUsers] = useState(initialUsers);
    const [currentUser, setCurrentUser] = useState(null);

    function updateUser(updatedUser) {
        setUsers(prev =>
            prev.map(user =>
                user.id === updatedUser.id
                    ? updatedUser
                    : user
            )
        );

        setCurrentUser(updatedUser);
    }

    function deleteUser(id) {
        setUsers(prev =>
            prev.filter(user => user.id !== id)
        );

        setItems(prev =>
            prev.filter(item =>
                item.ownerId !== currentUser.id
            )
        );

        setCurrentUser(null);
    }

    function toggleFavourite(itemId) {
        const isFavourite = currentUser.favouriteItemIds.includes(itemId);

        const updatedUser = {
            ...currentUser,
            favouriteItemIds: isFavourite
                ? currentUser.favouriteItemIds.filter(id => id !== itemId)
                : [...currentUser.favouriteItemIds, itemId]
        };

        updateUser(updatedUser);
    }

    return (
        <UserContext.Provider 
        value={{ users, setUsers, currentUser, setCurrentUser, updateUser, deleteUser, toggleFavourite }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUsers() {
    return useContext(UserContext);
}