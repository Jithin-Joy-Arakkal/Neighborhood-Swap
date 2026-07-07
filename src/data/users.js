import default_img from "../assets/default_img.png"

const initialUsers = [
    {
        id : 1,
        name : "Admin",
        username : "admin",
        email : "admin@email.com",
        password : "admin123",
        profilePic : default_img,
        favouriteItemIds : [1, 2]
    },
    {
        id : 2,
        name : "Admin2",
        username : "admin2",
        email : "admin2@email.com",
        password : "admin2123",
        profilePic : default_img,
        favouriteItemIds : [3, 4]
    }
];

export default initialUsers;