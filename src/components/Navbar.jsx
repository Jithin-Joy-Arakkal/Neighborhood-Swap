import { Link, useLocation } from 'react-router-dom';
import { useUsers } from '../context/UserContext';
import '../css/Navbar.css'

function Navbar(){

    const { currentUser } = useUsers();
    const location = useLocation();
  
    // Define paths where the navbar should be hidden
    const hiddenPaths = ['/', '/signup'];

    if (hiddenPaths.includes(location.pathname)) {
    return null;
    }

    return(
        <nav>
            <Link className="link" to={"/home"}>Home</Link>
            <Link className="link" to={"/post"}>Create Post</Link>
            <Link className="link" to={`/profile/${currentUser.username}`}>Profile</Link>
        </nav>
    );
}

export default Navbar