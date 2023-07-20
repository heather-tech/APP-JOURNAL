import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink  to="/">Home</NavLink>
            <NavLink  to="/ideas">My Ideas</NavLink>
            <NavLink  to="/ideas/new">Add Idea</NavLink>
        </nav>
    );
}

export default NavBar;
