import React from "react";
import "./listItem.scss";
import { Link } from "react-router-dom";


function ListItem({ closeMenu }) {

 
  return (
    <div className="List">
      <div className="menu-item">
        <ul>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <li>contact</li>
          </Link>
          <Link to="/photo"><li>photos</li></Link>
        </ul>
        <div onClick={closeMenu} className="closeMenu">
          <div className="menuClose">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
