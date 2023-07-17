import React from "react";
/* Add NavLink to import */
import { NavLink } from "react-router-dom";

/* Add basic styling for NavLinks */
const link = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

/* define the NavBar component */
const Navigation = () => 
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        // exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
        activestyle={{
          background: "darkblue",
        }}
      >Home</NavLink>

      <NavLink
        to="/ideas/new"
        // exact
        style={link}
        activestyle={{
          background: "darkblue",
        }}
      >New App Idea</NavLink>

<NavLink
        to="/ideas"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        // exact
        /* add styling to Navlink */
        style={link}
        /* add prop for activeStyle */
        activestyle={{
          background: "darkblue",
        }}
      >My App Ideas</NavLink>
    </div>;


export default Navigation;