import { useState, useEffect, useRef } from "react";
import { useItems } from "../context/ItemContext";
import { useUsers } from "../context/UserContext";
import { useChats } from "../context/ChatContext";
import { useParams } from "react-router-dom";
import "../css/Chat.css"

function Chat(){

    const { items } = useItems();
    const { users, currentUser } = useUsers();
    const { getChat, createChat, sendMessage } = useChats();
    const { itemId, buyerId } = useParams();
    const [formData, setFormData] = useState({
        input_message: ""
    });

    const item = items.find(
        item => item.id === Number(itemId)
    );

    if (!item) {
        return <p>Item not found.</p>;
    }

    const owner = users.find(
        owner => owner.id === item.ownerId
    );

    const buyerIdNum = Number(buyerId);

    const buyer = users.find(
        user => user.id === buyerIdNum
    );

    const chattingWith = currentUser.id === buyer?.id ? owner : buyer;

    const chat = getChat(item.id, buyerIdNum, item.ownerId);

    function getUsername(id) {
        return users.find(user => user.id === id)?.username;
    }

    const handleMessageChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

    };

    function handleSubmit(e) {
        e.preventDefault();

        const text = formData.input_message.trim();

        if (!text) return;

        sendMessage(
            item.id,
            buyerIdNum,
            item.ownerId,
            currentUser.id,
            text
        );

        setFormData({
            input_message: ""
        });
    }

    const chatRef = useRef(null);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chat?.messages]);

    return(
        <div>
            <h2 className="mychats-heading">
                Chatting with '{chattingWith?.name}' on item '{item.name}'
            </h2>
            <div className="green-container">
                <div className="white-container">
                    <div className="chat-container" ref={chatRef}>
                        {chat ? (
                            chat.messages.map(message => (
                                <div 
                                key={message.id} 
                                className={`message ${
                                    message.senderId === currentUser.id
                                        ? "my-message"
                                        : "other-message"
                                }`}>
                                    <p className="sender-name">
                                        {message.senderId === currentUser.id
                                            ? "You"
                                            : `@${getUsername(message.senderId)}`}
                                    </p>
                                    <p className="message-text">{message.text}</p>
                                </div>
                            ))
                        ) : (
                            <p>No messages yet.</p>
                        )}
                    </div>
                    <form 
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    className="input-box">
                    <input 
                    type="text" 
                    name="input_message"
                    value={formData.input_message}
                    placeholder="Enter message..." 
                    className="message-input"
                    autoComplete="off"
                    onChange={handleMessageChange}/>
                    <button className="send">✓</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Chat;