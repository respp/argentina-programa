import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Renzo Espinosa</h1>
                <p>Buenos Aires, Avellaneda</p>
            </div>
            <div className='footer-contact'>
                <h3>Contactame</h3>
                <p>Y pongamonos a trabajar</p>
            </div>
            <div className='footer-sns'>
                <div className='design-by'>
                    Creado por Renzo Espinosa:
                </div>
                <div className='sns-links'>
                    <a href='https://www.linkedin.com/in/renzo-espinosa-barcos/' target='_blank'>
                        <i className='fab fa-linkedin linkedin'>

                        </i>
                    </a>
                    <a href='https://github.com/respp' target='_blank'>
                        <i className='fab fa-github github'>

                        </i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=+5491155027401&text=Hola%20Renzo,%20me%20estoy%20comunicando%20desde%20tu%20portfolio%20web%20!%20Quiero%20contactarme%20con%20vos%20.." target='_blank'>
                        <i className='fab fa-whatsapp whatsapp'>

                        </i>
                    </a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer
