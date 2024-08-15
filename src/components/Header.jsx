import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
        </div>
    );
};

export default Header;