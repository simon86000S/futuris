import React from 'react'
import './listItem.scss';
import {Link} from 'react-router-dom';

function ListItem({closeMenu}) {
  
  return (
    <div className="List">
    <div className="menu-item">
      <ul>
        
        <Link to="/contact"><li>contact</li></Link>
        <li>photos</li>
      </ul>
      <div onClick={closeMenu} className='closeMenu'>
       <div className='menuClose'>
        <span></span>
        <span></span>
        </div>
      </div>

    </div>
      
    </div>
  )
}

export default ListItem