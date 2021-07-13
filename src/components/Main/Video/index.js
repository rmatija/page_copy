import React from 'react'

import './style.scss'

import video from '../../../assets/videos/video1.mp4'


const playMovie = (e) => {
    e.currentTarget.play();
    console.log('on');
  }
  
const stopMovie = (e) => {
    e.currentTarget.pause();
    console.log('off');
}


function index() {
    return (
        <div className="video-container">
            <video 
                className="video"
                onMouseOver={playMovie}
                onMouseOut={stopMovie}
                loop
                muted="muted">
                <source src={video} type='video/mp4'/>
            </video> 
        </div>
    )
}

export default index
