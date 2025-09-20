import React from 'react'
import "./Navbar.css"
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='background'>
    <div className='navbar'>
        <div>
            <img src = "https://foodily.vercel.app/assets/images/logo.png" className='logo'/>
        </div>

        {/* list */}
            <div>
                <ul className='ul'>
                    <li><Link to="/home"  className="nav-link">Home</Link></li>
                    <li  className="nav-link">About</li>
                    <li><Link to = "/menu" className="nav-link">Menu</Link></li>
                    <li  className="nav-link">Gallery</li>
                    <li  className="nav-link">Blog</li>
                    <li className="nav-link">Contact</li>
                    <li>
                        <button className='Wishlistbtn'><Link to="/mylist" className="nav-link">Wishlist</Link></button>
                    </li> 
                </ul>
            </div>

        {/* Search */}
            <div>
                <Search size={24} color = "gray" className='search'/>
            </div>
    </div>
    </div>
  )
}
export default Navbar
