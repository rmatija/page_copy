import React from 'react'

import './style.css'

function CardSpecial(props) {
    return (
        <div className="card-special">
            <h3> {props.title} </h3>
            <p> { props.text } </p>
            <button className="card-button-special">Send a photo</button>
        </div>
    )
}

export default CardSpecial
