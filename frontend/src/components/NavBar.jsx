import { Link } from "react-router-dom";
import './NavBar.css';
import { useState } from "react";
function NavBar() {
    const [showDropdown, setShowDropdown] = useState(false);

    return <>
        <div className="navbar">
            <div className="logo">
                <h2>Logo</h2>
            </div>
            <div className="navlinks">
                <ul className="navlinks">
                    <Link to="/Home">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Services">Services</Link>
                    <Link to="/Contact">Contact</Link>
                </ul>
            </div>
            <div className="profile">
                <ion-icon
                    className="prof"
                    name="person-circle-outline"
                    onClick={() => setShowDropdown(!showDropdown)}
                ></ion-icon>

                {showDropdown && (
                    <div className="dropdown-menu">
                        <Link to="/profile">
                            <button className="dropdown-btn">Profile</button>
                        </Link>
                        <hr />
                        <ion-icon  className="dropdown-btn" name="log-out-outline"></ion-icon>
                    </div>
                )}
            </div>
        </div>
    </>
}
export default NavBar; 