import { createContext, useContext, useState } from "react";
import initialChats from "../data/chats";

const ChatContext = createContext();

export function ChatProvider({ children }) {

    const [chats, setChats] = useState(initialChats);

    function getChat(itemId, buyerId, sellerId) {
        let chat = chats.find(chat =>
            chat.itemId === itemId &&
            chat.buyerId === buyerId &&
            chat.sellerId === sellerId
        );

        if (chat) return chat;
    }

    function createChat(itemId, buyerId, sellerId) {
        setChats(prev => {
            const existing = prev.find(chat =>
                chat.itemId === itemId &&
                chat.buyerId === buyerId &&
                chat.sellerId === sellerId
            );

            if (existing) {
                return prev;
            }

            return [
                ...prev,
                {
                    id: Date.now(),
                    itemId,
                    buyerId,
                    sellerId,
                    messages: []
                }
            ];
        });
    }

    function sendMessage(itemId, buyerId, sellerId, senderId, text) {
        setChats(prev => {
            // Find existing chat
            const existingChat = prev.find(chat =>
                chat.itemId === itemId &&
                chat.buyerId === buyerId &&
                chat.sellerId === sellerId
            );

            const newMessage = {
                id: Date.now(),
                senderId,
                text,
                timestamp: Date.now()
            };

            // Chat already exists
            if (existingChat) {
                return prev.map(chat =>
                    chat.id === existingChat.id
                        ? {
                            ...chat,
                            messages: [...chat.messages, newMessage]
                        }
                        : chat
                );
            }

            // Otherwise create a new chat
            return [
                ...prev,
                {
                    id: Date.now(),
                    itemId,
                    buyerId,
                    sellerId,
                    messages: [newMessage]
                }
            ];
        });
    }

    return (
        <ChatContext.Provider value={{ chats, setChats, getChat, createChat, sendMessage }}>
            {children}
        </ChatContext.Provider>
    );

}

export function useChats() {
    return useContext(ChatContext);
}