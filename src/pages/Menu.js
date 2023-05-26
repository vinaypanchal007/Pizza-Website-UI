import React from 'react'
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../helpers/MenuItem';
import '../Styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
      <h1 className='title'>Our Menu</h1> 
      <div className='menuList'>
        {MenuList.map((menuitem,key)=>{
          return(<MenuItem
            key = {key}
            image = {menuitem.image}
            name = {menuitem.name}
            price = {menuitem.price}
          />
          );
        })}
        </div>  
    </div>
  );
} 
export default Menu
