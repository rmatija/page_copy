import React from 'react';
import './style.css'

function BigCard(props) {
    return (
        <div className="card">
            <a href="https://www.lovezagreb.hr/" target="_blank" rel="noreferrer">
                <div className="card-content">
                    <div className="card-content-main">
                        <h4> {props.title} </h4>
                        <p> {props.text} </p>
                    </div>
                    <div className="card-content-footer">
                        <div className="card-content-footer-likes">
                            <span className="svg-icon"></span>
                            <span>230</span>
                        </div>
                        <div className="card-content-footer-date">
                            <p>12.05.2021.</p>
                            <span> {props.span} </span>
                        </div> 
                    </div>
                </div>
            </a> 
        </div>
    )
}

export default BigCard


