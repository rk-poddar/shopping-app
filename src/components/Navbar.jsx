import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart);

    return (
        <div className='navbar'>
            <NavLink className="inactive" to="/">
                <span className="logo">TechiSource</span>
            </NavLink>
            <div>
                <NavLink className={({ isActive }) => (isActive ? 'navLink' : 'inactive')}  to="/">
                    Home
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'navLink' : 'inactive')} to="/product">
                    Product
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'navLink' : 'inactive')} to="/contactus">
                    ContactUs
                </NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'navLink' : 'inactive')} to="/login">
                    Login
                </NavLink>
                <NavLink className="inactive" to="/cart">
                    <span className="cartCount">Cart: ({cartItems.length})</span>
                </NavLink> 
            </div>
        </div>
    );
};

export default Navbar;