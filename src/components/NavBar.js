import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  
  width: "160px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "#6900ff",
  textDecoration: "none",
  textAlign: "center",
  color: "white",
};

function NavBar() {
  return (
  <div className="navbar">
    <NavLink to="/" exact style={linkStyles} activeStyle={{background: "darkblue",}}>Home</NavLink>
    <NavLink to='/speakingpart1' style={linkStyles}
        activeStyle={{background: "darkblue",}}>Speaking Part 1</NavLink>
    <NavLink to='/speakingpart2' style={linkStyles}
        activeStyle={{ background: "darkblue",}}>Speaking Part 2</NavLink>
    <NavLink to='/speakingpart3' style={linkStyles}
        activeStyle={{background: "darkblue",}}>Speaking Part 3</NavLink>
    <NavLink to='/QuestionForm' style={linkStyles}
        activeStyle={{background: "darkblue",}}>Create New Question</NavLink>
  </div>
  );
}

export default NavBar;