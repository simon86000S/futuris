
import '../Menu/menu.scss'
import { useState } from "react";
import ListItem from "../Menu-list/ListItem";

function Menu() {
  const [showmenu, setShowMenu] = useState(false)

  const handleShow=()=>{

setShowMenu(true)


  }

  return (
    <div className='container'>
      <div onClick={handleShow} className='menu'>
      <h1>Menu</h1>
      
      <span></span>
      <span></span>
      <span></span>
      
      </div>
      {
      showmenu &&(
        <div className="list-menu"> 
        <ListItem closeMenu={()=>setShowMenu(false)}/></div>
  )
     }
      </div>
      
  )
}

export default Menu