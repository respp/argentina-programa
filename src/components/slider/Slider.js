import React from 'react'
import './Slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';//Si no se importa el css no funciona
//npm install react-bootstrap bootstrap@5.1.3
import Carousel from 'react-bootstrap/Carousel'
import img1 from "../../media/img_slider1.jpg";
import img2 from "../../media/img_slider2.jpg";
import img3 from "../../media/img_slider3.jpg";
import img4 from "../../media/img_slider4.jpg";

const Slider = () => {
    return (
        <div className='fondo'>
                <h1 className='title'>Mis trabajos recientes..</h1>
            <Carousel className='carousel-container'>
            <Carousel.Item className='slide-container'>
            <a href="https://github.com/respp/MOVIE-LISTING" target="_blank">
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
            </a>
                    <Carousel.Caption>
                    <h3>Movie Listing</h3>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='slide-container'>
            <a href="https://github.com/respp/registro_login_con_CRUD" target="_blank">
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
            </a>
                    <Carousel.Caption>
                    <h3>Registro/login con CRUD</h3>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='slide-container'>
                <a href="https://respp.github.io/Todo-list-app/" target="_blank">
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                </a>
                    <Carousel.Caption>
                    <h3>To Do list</h3>
                    </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='slide-container'>
            <a href="https://github.com/respp/Memes_generator" target="_blank">
                <img
                className="d-block w-100"
                src={img4}
                alt="Third slide"
                />
            </a>
                    <Carousel.Caption>
                    <h3>Memes Generator</h3>
                    </Carousel.Caption>
            </Carousel.Item>
            
            </Carousel>

        </div>
    )
}

export default Slider
