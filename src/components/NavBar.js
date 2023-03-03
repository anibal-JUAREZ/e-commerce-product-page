import React, {useState} from 'react';
import Basket from './Basket';
import MenuBurger from './MenuBurger';
import './NavBar.css';


 const NavBar = ({basket}) => {
    const [openMenu, setOpenMenu]=useState(false);
    const openMenuBurgerHandler=()=>{
        setOpenMenu(!openMenu)
    }
  return (
    <nav>
        <div className='left-side'>
            <img onClick={openMenuBurgerHandler} className='icon-menu' src='./images/icon-menu.svg'/>
            <a href=''><img src='./images/logo.svg'/></a>
            <ul>
                <svg className='icon-close' width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
                <li><a href=''>Collections</a></li>
                <li><a href=''>Men</a></li>
                <li><a href=''>Women</a></li>
                <li><a href=''>About</a></li>
                <li><a href=''>Contact</a></li>
            </ul>
        </div>
        <div className='right-side'>
            <Basket basket={basket}/>
            <img src='./images/image-avatar.png'/>
        </div>
        {openMenu && <MenuBurger openMenuBurgerHandler={openMenuBurgerHandler}/>}
    </nav>
  )
}

export default NavBar;
