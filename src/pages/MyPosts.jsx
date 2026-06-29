import { useItems } from "../context/ItemContext";
import { useUsers } from "../context/UserContext";
import ItemGrid from "../components/ItemGrid";

function MyPosts(){
    const { items } = useItems();
    const { currentUser } = useUsers();
    
    const myPosts = items
    .filter(item =>
        item.ownerId === currentUser.id
    )

    return(
    <ItemGrid
        items={myPosts}
        emptyMessage="You haven't posted any items yet."
    />
    );
}

export default MyPosts;