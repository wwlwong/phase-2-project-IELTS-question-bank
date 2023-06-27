import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div className="navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to='/speakingpart1'>Speaking Part 1</NavLink>
    <NavLink to='/speakingpart2'>Speaking Part 2</NavLink>
    <NavLink to='/speakingpart3'>Speaking Part 3</NavLink>
    <NavLink to='/QuestionForm'>Create New Question</NavLink>
  </div>
  );
}

export default NavBar;