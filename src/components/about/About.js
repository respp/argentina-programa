import React from 'react';
import './About.css';
import perfil from "../../media/foto_curriculum4.jpg"

const About = () => {
    return (
        <div className='all'>
        <div className='about-container'>
            <div className='about-desc'>
                <h3>Te cuento sobre mí</h3> 
                <p>Soy un Técnico recibido en Programación en la escuela EETN7 con experiencia laboral en el ámbito y me encuentro cursando la Licenciatura en la Universidad Nacional de Quilmes.<br></br>
Aspiro a escalar mis conocimientos de manera potencial mientras estudio y también de manera autodidacta como lo hago.<br></br> Estoy acostumbrado a trabajar tanto de manera individual como grupal, soy ordenado y detallista. Incorporo conocimientos fácilmente y soy muy autoexigente con mis proyectos.<br></br>
Mis prácticas las he desarrollado en Vivencia Baires de Avellaneda.</p>
            </div>
            <div className='about-img'>
                <img src={perfil} alt='about' />
            </div>
        </div>
        </div>
    )
}

export default About
