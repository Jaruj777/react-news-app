import React from 'react'
import {Link} from 'react-router-dom'
import Menu from '../Menu/Menu'

import './Navbar.css'

function Navbar() {
    return (
        <nav className="navigation">
            <Link to="/" className="logo">News-app</Link>
            <Menu />
        </nav>
    )
}

export default Navbar
