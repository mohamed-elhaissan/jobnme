import { Link } from "react-router-dom";
import './NavBar.css';
import { BsPersonCircle } from "react-icons/bs";
import { LuLogOut } from "react-icons/lu";
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
            <BsPersonCircle className="prof" onClick={() => setShowDropdown(!showDropdown)}/>

                {showDropdown && (
                    <div className="dropdown-menu">
                        <Link to="/profile">
                            <button className="dropdown-btn">Profile</button>
                        </Link>
                        <hr />
                        <LuLogOut className="dropdown-btn" />
                    </div>
                )}
            </div>
        </div>
    </>
}
export default NavBar; 