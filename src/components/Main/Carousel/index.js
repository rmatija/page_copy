import React from 'react'
import Slider from "react-slick";

import "./style.css";

import sImage1 from '../../../assets/images/small-image-1.jpg'
import sImage2 from '../../../assets/images/small-image-2.jpg'
import sImage3 from '../../../assets/images/small-image-3.jpeg'
import sImage4 from '../../../assets/images/small-image-4.jpg'
import sImage5 from '../../../assets/images/small-image-5.jpg'
import sImage6 from '../../../assets/images/river-zg.jpg'

function Carousel() {

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className="carousel-wrapper">
            <Slider {...settings}>
            <div className="slide">
                <img src={sImage1} alt="" />
                <div className="text-overlay">
                    <h3>More than Words</h3>
                    <h6>Where to take next best selfie?</h6>
                    <p>This Advent is all about bringing light back to our lives which is also a perfect metaphor for more positivity and that warm feeling that Christmas time usually gives us.</p>
                </div>
            </div>
            <div className="slide">
                <img src={sImage2} alt="" />
                <div className="text-overlay">
                    <h3>More than Words</h3>
                    <h6>Where to take next best selfie?</h6>
                    <p>This Advent is all about bringing light back to our lives which is also a perfect metaphor for more positivity and that warm feeling that Christmas time usually gives us.</p>
                </div>
            </div>
            <div className="slide">
                <img src={sImage3} alt="" />
                <div className="text-overlay">
                    <h3>More than Words</h3>
                    <h6>Where to take next best selfie?</h6>
                    <p>This Advent is all about bringing light back to our lives which is also a perfect metaphor for more positivity and that warm feeling that Christmas time usually gives us.</p>
                </div>
            </div>
            <div className="slide">
                <img src={sImage4} alt="" />
                <div className="text-overlay">
                    <h3>More than Words</h3>
                    <h6>Where to take next best selfie?</h6>
                    <p>This Advent is all about bringing light back to our lives which is also a perfect metaphor for more positivity and that warm feeling that Christmas time usually gives us.</p>
                </div>
            </div>
            <div className="slide">
                <img src={sImage5} alt="" />
                <div className="text-overlay">
                    <h3>More than Words</h3>
                    <h6>Where to take next best selfie?</h6>
                    <p>This Advent is all about bringing light back to our lives which is also a perfect metaphor for more positivity and that warm feeling that Christmas time usually gives us.</p>
                </div>
            </div>
            <div className="slide">
                <img src={sImage6} alt="" />
                <div className="text-overlay">
                    <h3>More than Words</h3>
                    <h6>Where to take next best selfie?</h6>
                    <p>This Advent is all about bringing light back to our lives which is also a perfect metaphor for more positivity and that warm feeling that Christmas time usually gives us.</p>
                </div>             
            </div>
            
            </Slider>
      </div>
    );
}

export default Carousel
