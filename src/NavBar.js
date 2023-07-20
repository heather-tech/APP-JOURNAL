import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            
            <NavLink  to="/">Home</NavLink>
            <br/>
            <NavLink  to="/ideas/new">Add Idea</NavLink>
            <br/>
            <NavLink  to="/ideas">My Ideas</NavLink>
            
            
        </nav>
    );
}

export default NavBar;
