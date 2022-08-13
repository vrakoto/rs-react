import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../css/navbar.css'

function Navbar() {
    const Link = ({path, title}) => {
        return (
            <NavLink to={path} className={({ isActive }) => (isActive ? 'link active' : 'link')}>{title}</NavLink>
        )
    }

    return (
        <header>
            <div className="navbar-search">
                <input type="text" placeholder="Rechercher..."></input>
                <button>Ok</button>
            </div>
            <div className="navbar-links">
                <Link path="/" title="Accueil" />
                <Link path="/tendances" title="Tendances" />
            </div>
            <div className="settings">
                <button>Connexion</button>
                <button>Inscription</button>
            </div>
        </header>
    )
}

export default Navbar