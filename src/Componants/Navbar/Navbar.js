import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {
    const [click, setClick] = useState(false);
    const [navbar, setNavbar]=useState(false)
    const handleClick = () => setClick(!click);

    const changebackground=()=>{
        if (window.scrollY>=80){
            setNavbar(true)
        } else{
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changebackground)
    return (
        <>
            <nav className={navbar? ' activee':'navbar'}>
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        Pleasing <span>Beauty.</span>
                        {/* <i className="fas fa-code"></i> */}
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/blog"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;