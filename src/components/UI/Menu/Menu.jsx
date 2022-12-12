import React from 'react';
import cl from  './Menu.module.css'
import { Link } from 'react-router-dom';
const Menu = function () {

    return (
        <div className={cl.navMenu}>
                <a href="#" className={cl.logo}>sinResearch</a>
                <ul className={cl.menuItems}>
                    <li className={cl.menuItem}><Link className={cl.linkToPage} to="/main">Главная</Link></li>
                    <li className={cl.menuItem}><Link className={cl.linkToPage} to="/main">Теория</Link></li>
                    <li className={cl.menuItem}><Link className={cl.linkToPage} to="/test">Тест</Link></li>
                </ul>
                <div></div>
            </div>
    )
};
export default Menu;