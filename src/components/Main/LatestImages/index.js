import React from 'react'
import Slider from 'react-slick';

import './style.scss';

import lImage1 from '../../../assets/images/latest-image1.jpeg'
import lImage2 from '../../../assets/images/latest-image2.jpeg'
import lImage3 from '../../../assets/images/latest-image3.jpeg'
import lImage4 from '../../../assets/images/latest-image4.jpeg'
import lImage5 from '../../../assets/images/latest-image5.jpeg'
import lImage6 from '../../../assets/images/latest-image6.jpeg'

function LatestImages() {

    const settings = {
        infinite: true,
        slidesToShow: 4,
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
        <div className="latest-images-wrapper">
            <Slider {...settings}>
                <div className="image-container">
                    <div className="image">
                        <img src={lImage1} alt="" />
                    </div>
                    <div className="author-details">
                        <span>Marko Vezir</span>
                    </div>
                </div>
                <div className="image-container">
                    <div className="image">
                        <img src={lImage2} alt="" />
                    </div>
                    <div className="author-details">
                        <span>Jure Veljko</span>
                    </div>
                </div>
                <div className="image-container">
                    <div className="image">
                        <img src={lImage3} alt="" />
                    </div>
                    <div className="author-details">
                        <span>Ivana Bonacic</span>
                    </div>
                </div>
                <div className="image-container">
                    <div className="image">
                        <img src={lImage4} alt="" />
                    </div>
                    <div className="author-details">
                        <span>Mateja Kreg</span>
                    </div>
                </div>
                <div className="image-container">
                    <div className="image">
                        <img src={lImage5} alt="" />
                    </div>
                    <div className="author-details">
                        <span>Luka Vek</span>
                    </div>
                </div>
                <div className="image-container">
                    <div className="image">
                        <img src={lImage6} alt="" />
                    </div>
                    <div className="author-details">
                        <span>Ilijana Babic</span>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default LatestImages
