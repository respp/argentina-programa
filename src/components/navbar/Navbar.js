import React from 'react';
import './Navbar.css';



const Nav = ({ isScrolling }) => {
const toTheTop = () => {
    window.scrollTo({top:0, left:0, behavior:'smooth'})//Esto se ejecuta cuando se toca el logo, te sube arriba 
}

    return (
        <nav className={`navbarr ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className='navbarLogo' onClick={toTheTop}>
                Renzo Espinosa
            </div>
        </nav>
    )
}

export default Nav
