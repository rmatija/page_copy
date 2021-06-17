import React from 'react'

import './style.css'

import video from '../../../assets/images/video1.mp4'


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
