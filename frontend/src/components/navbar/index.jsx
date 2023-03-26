import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBone,
    faPaw,
    faFeatherPointed,
    faCarrot,
    faHorse,
  } from "@fortawesome/free-solid-svg-icons";
  import userSvg from "../../assets/user.svg"
  import heartSvg from "../../assets/heart.svg"
  import cartSvg from "../../assets/cart.png"
  import menuSvg from "../../assets/menu.svg"
  import logo from "../../assets/pet-care.png"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='section navbar'>
        <div className="container">
            <Link className="logo" to="/">
                <img src={logo} alt="" />
                <span>PetPal</span>
            </Link>
            <ul className="menu">
                <li className="menu-item">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/pets">
                        Our pets
                    </Link>
                </li>
                <li className="menu-item" >
                    <Link to="/shop">
                        Shop
                    </Link>
                </li>
                <li className="menu-item">
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li className="menu-item" >
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
                {/* <div className="menu-item active">
                    <FontAwesomeIcon icon={faPaw} />
                    <span>Cats</span>
                </div> */}
            </ul>
            <div className="nav-items">
                <Link className="nav-link" to="/wishlist">
                    <img src={heartSvg} alt="" />
                </Link>
                <Link className="nav-link" to="/auth">
                    <img src={userSvg} alt="" />
                </Link>
                <Link className="nav-link cart-icon" to="/cart">
                    <img src={cartSvg} alt="" />
                    <span className="cart-count">0</span>
                </Link>
                <Link className="nav-link hamburger-menu" to="/wishlist">
                    <img src={menuSvg} alt="" />
                </Link>
            </div>   
        </div>
    </div>
  )
}

export default Navbar;
