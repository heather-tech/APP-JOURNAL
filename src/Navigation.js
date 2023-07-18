import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/ideas">My Ideas</NavLink>
            <NavLink exact to="/ideas/new">Add Idea</NavLink>
            <NavLink exact to="/ideas/:id">Add Idea</NavLink>
        </nav>
    );
}

export default Navigation;

