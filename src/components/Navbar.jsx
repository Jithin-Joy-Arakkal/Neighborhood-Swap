import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css'

function Navbar(){

    const location = useLocation();
  
    // Define paths where the navbar should be hidden
    const hiddenPaths = ['/'];

    if (hiddenPaths.includes(location.pathname)) {
    return null;
    }

    return(
        <nav>
            <Link className="link" to={"/home"}>Home</Link>
            <Link className="link" to={"/post"}>Create Post</Link>
            <Link className="link" to={"/"}>Log Out</Link>
        </nav>
    );
}

export default Navbar