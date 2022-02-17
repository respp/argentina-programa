import React from 'react'//rafce el atajo para crear la estructura
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const Cover = () => {
    return (
        <div className='cover-container'>
            <video className='video' src={coverVideo} autoPlay loop muted /> 
            <h1>Renzo Espinosa</h1>
            <p>Frontend Developer | Designer </p>
        </div>
    )
}

export default Cover
