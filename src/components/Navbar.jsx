import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from "react";
import { useUsers } from '../context/UserContext';
import '../css/Navbar.css'

function Navbar(){

    const { currentUser, setCurrentUser } = useUsers();
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
  
    // Define paths where the navbar should be hidden
    const hiddenPaths = ['/', '/signup'];

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    if (hiddenPaths.includes(location.pathname)) {
    return null;
    }

    if (!currentUser) {
        return null;
    }

    return(
        <nav>
            <Link className="link" to={"/home"}>Home</Link>
            <Link className="link" to={"/post"}>Create Post</Link>
            <div className="dropdown" ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    Profile ⩔
                </button>

                {isOpen && (
                    <div className="dropdown-menu">
                        <div className={"profilePic-container"}>
                            <img src={currentUser.profilePic} alt="ProfilePicture" />
                        </div>
                        <div className='dropdown-text'>
                            <p>Signed in as</p>
                            <p>{currentUser.name}</p>
                            <p>@{currentUser.username}</p>
                        </div>
                        <hr />
                        <Link to={`/profile/${currentUser.username}`}><button>My Profile</button></Link>
                        <Link to={`/favourites/${currentUser.id}`}><button>My Favourites</button></Link>
                        <Link to={`/myposts/${currentUser.id}`}><button>My Posts</button></Link>
                        <hr />
                        <button 
                        className='logout-button'
                        onClick={() => {setCurrentUser(null);
                        navigate("/");
                        }}>Log Out</button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar