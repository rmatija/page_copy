import React from 'react'
import './style.css'

import staySafe from '../../../assets/images/stay_safe.png'
import corona from '../../../assets/images/corona-vector.svg'


const CovidNav = () => {
    return (
        <div className="covid-header">
            <div className="container">
                <img src={staySafe} alt="stay_safe" className="stay-safe"/>
                <div className="corona">
                    <a href="https://www.infozagreb.hr/corona-virus&lang=en" target="_blank" rel="noreferrer">
                        <img src={corona} alt="corona" className="corona-img"/>
                        COVID-19 INFO
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CovidNav;
