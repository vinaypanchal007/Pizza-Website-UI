import React from 'react'
import Logo from '../pics/pizzaLogo.png';
import {Link} from 'react-router-dom'
import "../Styles/Navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from 'react';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () =>{
    setOpenLinks(!openLinks);
  }

  return (

    
    <div>
        <div className="navbar">
          <div className="leftside" id={openLinks? 'open':'close'}>
                <img src={Logo} alt = "Logo"  /> 
                <div className="hiddenLinks">
                  <Link to="/">Home</Link>
                  <Link to="/Menu">Menu</Link>
                  <Link to="/About">About</Link>
                  <Link to="/Contact">Contact</Link>
                </div>
            </div>
            <div className="rightside">
              <Link to="/">Home</Link>
              <Link to="/Menu">Menu</Link>
              <Link to="/About">About</Link>
              <Link to="/Contact">Contact</Link>
              <button><ReorderIcon onClick={toggleNavbar}/></button>
              
            </div> 
        </div> 
    </div>
  )
}

export default Navbar