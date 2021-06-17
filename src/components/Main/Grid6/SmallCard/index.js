import React from 'react'

import './style.css'

function SmallCard(props) {
    return (
        <div className="card-small">
            <a href="https://www.lovezagreb.hr/" target="_blank" rel="noreferrer">
                <div className="card-small-image-wrapper">
                    <img src={props.src} alt="" className="card-small-image"/>
                </div>
                <div className="card-small-content">
                    <div className="card-small-content-main">
                        <h4> {props.title} </h4>
                        <p> {props.text} </p>
                    </div>
                    <div className="card-small-content-footer">
                        <div className="card-small-content-footer-likes">
                            <span className="svg-icon"></span>
                            <span>230</span>
                        </div>
                        <div className="card-small-content-footer-date">
                            <p>12.05.2021.</p>
                            <span> {props.span} </span>
                        </div>  
                    </div>
                </div>
            </a>
        </div>
    )
}

export default SmallCard
