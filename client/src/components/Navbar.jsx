import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useState, useEffect } from 'react';


function Navbar() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    return(
        <nav className={`navbar ${isVisible ? 'navbar-slide-in' : 'navbar-hidden'}`}>
           <Link to="/">Home</Link>
           <Link to="/menu">Menu</Link>
           <Link to="/reservation">Reserve</Link>
        </nav>
    );
}

// git test text

export default Navbar;