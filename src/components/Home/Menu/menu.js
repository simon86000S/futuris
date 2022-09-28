import "../Menu/menu.scss";
import { useState,useEffect,useRef } from "react";
import ListItem from "../Menu-list/ListItem";
import { Link } from "react-router-dom";
import { TimelineLite } from "gsap/gsap-core";
import { Back } from "gsap";
import { Timeline } from "gsap/gsap-core";

function Menu() {
  const [showmenu, setShowMenu] = useState(false);

  const handleShow = () => {
    setShowMenu(true);
  };
  
  
  

  return (
    <div className="container">
      <div onClick={handleShow} className="menu">
        <h1 >Menu</h1>

        <span></span>
        <span></span>
        <span></span>
      </div>
      {showmenu && (
        <div className="list-menu">
          <ListItem closeMenu={() => setShowMenu(false)} />
        </div>
      )}
    </div>
  );
}

export default Menu;
