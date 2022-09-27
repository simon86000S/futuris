import React from 'react'
import './listItem.scss';
import {Link} from 'react-router-dom';

function ListItem({closeMenu}) {
  
  return (
    <div className="List">
    <div className="menu-item">
      <ul>
        <Link to="/"><li>Accueil</li></Link>
        <li>contact</li>
        <li>photos</li>
      </ul>
      <div onClick={closeMenu} className='closeMenu'>
        <span></span>
        <span></span>
      </div>

    </div>
      
    </div>
  )
}

export default ListItem