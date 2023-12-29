import React from "react";
import './Navbar.css';


const Navbar = () => {
  

    return ( 
        <div className='navbar_Container'>

            <div className='navbar_logo'>
                Blanquette
            </div>
            <div className='navbar_list_container'>
                <ul>
                    <li>Home</li>
                    <li>Pages</li>
                    <li>Blog</li>
                    <li>Shop</li>
                </ul>
            </div>
        <div className='navbar_cart'>
            Cart
        </div>
    </div>
);
}
 
export default Navbar;