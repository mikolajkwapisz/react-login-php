import { Link } from "react-router-dom";
import "./navbar.css";
import { AiFillHome } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { FaLock, FaUnlockAlt } from "react-icons/fa";
import { useState } from "react";

interface NavbarProps{
  setIsDeleteContainerVisible?: React.Dispatch<React.SetStateAction<boolean>>
  isLogged: boolean
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({ setIsDeleteContainerVisible, isLogged, setIsLogged}: NavbarProps) => {

  // function changeVisibility () {
  //   setIsDeleteContainerVisible( prev => !prev)
  // }
  return (
    <nav className="navbar">
      <ul className="navbar__nav">
        <li className="navbar__nav--list">
          <Link to="/" className="navbar__nav--list--link">
            <AiFillHome 
              style={{ color: 'var(--color-orange)'}}/>
            <p>List</p>
          </Link>
        </li>
        <li className="navbar__nav--list"> 
          <div  >
            {isLogged ? (
              <div className='navbar__nav--list--link account' onClick={() => setIsLogged(false)}>
                <FaLock 
                  style={{ color: 'var(--color-orange)'}}/>
                <p>Log out</p>
              </div>
            ) : (
              <Link to="login" className='navbar__nav--list--link account'>
                <FaUnlockAlt 
                  style={{ color: 'var(--color-white)'}}/>
                <p>Log in</p>
              </Link>
            )}
          </div>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
