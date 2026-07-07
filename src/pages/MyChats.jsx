import { useUsers } from "../context/UserContext";
import { useItems } from "../context/ItemContext";
import { useChats } from "../context/ChatContext";
import { useNavigate, useParams } from "react-router-dom";
import "../css/MyChats.css"

function MyChats() {
    const { users, currentUser } = useUsers();
    const { items } = useItems();
    const { chats } = useChats();
    const { itemId } = useParams();
    const navigate = useNavigate();

    const item = items.find(
        item => item.id === Number(itemId)
    );

    if (!item) {
        return <p>Item not found.</p>;
    }

    const itemChats = chats
        .filter(chat =>
            chat.itemId === Number(itemId) &&
            chat.sellerId === currentUser.id
        );

    const sortedChats = [...itemChats].sort((a, b) => {
        const aTime = a.messages.at(-1)?.timestamp ?? 0;
        const bTime = b.messages.at(-1)?.timestamp ?? 0;

        return bTime - aTime;
    });

    return (
        <div>
            <h2>Chats on item '{item.name}'</h2>
            <div className="my-chats">
                {sortedChats.length === 0 ? (
                    <p>No conversations yet.</p>
                ) : (
                    sortedChats.map(chat => {
                        const buyer = users.find(
                            user => user.id === chat.buyerId
                        );

                        return (
                            <div
                                key={chat.id}
                                className="mychats-text"
                                onClick={() =>
                                    navigate(`/chat/${itemId}/${chat.buyerId}`)
                                }
                            >
                                <h3>@{buyer?.username}</h3>
                                <p>{chat.messages.at(-1)?.text ?? "No messages yet"}</p>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default MyChats;