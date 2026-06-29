import { useItems } from "../context/ItemContext";
import { useUsers } from "../context/UserContext";
import ItemGrid from "../components/ItemGrid";

function Favourites(){
    const { items } = useItems();
    const { currentUser } = useUsers();
    
    const favouriteItems = items.filter(
        item => currentUser.favouriteItemIds.includes(item.id)
    );

    return(
    <ItemGrid 
        items={favouriteItems} 
        emptyMessage="You have not added any items to Favourites yet."
    />
    );
}

export default Favourites;