const initialChats = [
    {
        id : 1,
        itemId: 1,
        buyerId: 2,
        sellerId: 1,
        messages: [
            {
                id: 1,
                senderId: 2,
                text: "Is this still available?",
                timestamp: 123
            },
            {
                id: 2,
                senderId: 1,
                text: "Yes!",
                timestamp: 124
            }
        ]
    }
];

export default initialChats;