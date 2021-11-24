import React, { Fragment, useState } from 'react'
import {NavLink} from 'react-router-dom'

import './Menu.css'

function Menu() {
    const [toggleMenu, setToggleMenu] = useState (false)
    const menuItems = [
        {title: 'Home',to: '/'},
        {title: 'News',to: '/news'}, 
        {title: 'Contacts',to: '/contacts'}
    ]

    return (
        <Fragment>
            <ul className={`menu ${toggleMenu && 'open'}`}>
                {menuItems.map((item,index) => {
                    return (
                        <li key = {index} className="menu__item">
                            <NavLink 
                                onClick = {()=>setToggleMenu(!toggleMenu)}
                                to={item.to} 
                                style={({isActive}) => ({color: isActive && 'blue'})}
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
            <div onClick={()=>setToggleMenu(!toggleMenu)} className={`menu__burger ${toggleMenu && 'active'}`}>
                <div className="elm"></div>
            </div>
        </Fragment>
    )
}

export default Menu
