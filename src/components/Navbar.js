import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { MenuItems } from '../data/MenuItems';


const Navbar = () => {
  const [toggle, SetToggle]= useState(false)

  const handleClick =()=>{
    SetToggle(!toggle)
  }
  
  return (
    <nav className={toggle ? 'Navbar responsive' : 'Navbar'}>
        <h1 className='Navbar-logo'>
        <Link to="/">Hikmah</Link></h1>
        <div className='Dropdown-Icons' onClick={handleClick}>
        {toggle ? <FaBars /> : <FaTimes />}
     
        </div>
        
    <ul className='Navbar-menu'>
        {MenuItems.map((item,index)=>{
           return ( 
              <li key={index} className="Navbar-lists">
            <Link to={item.url} className="Navbar-link">
                {item.title}</Link>
            </li> 
           )
            
        })}
        
    </ul>
    </nav>
  )
}

export default Navbar