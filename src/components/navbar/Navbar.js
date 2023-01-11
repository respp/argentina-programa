import React from 'react';
import './Navbar.css';
import argentinaPrograma from "../../media/logo_Argentina Programa 4.0.png";



const Nav = ({ isScrolling }) => {
const toTheTop = () => {
    window.scrollTo({top:0, left:0, behavior:'smooth'})//Esto se ejecuta cuando se toca el logo, te sube arriba 
}

    return (
        <nav className={`navbarr ${isScrolling > 20 ? "scrolling" : null}`}>
            <div className='about-arg' >
                <img src={argentinaPrograma} onClick={toTheTop} className='arg-programa' alt='argentina programa' />
            </div>
        </nav>
    )
}

export default Nav
