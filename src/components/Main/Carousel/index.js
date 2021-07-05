import React from 'react'
import Slider from "react-slick";

import "./style.scss";

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
                    <h3>Gastro</h3>
                    <h6>Spring is served!</h6>
                    <p>Although it's technically not here yet, it's definitely in the air. I'm talking about spring in Zagreb, of course. All the usual signs are clearly visible. Longer, sunnier days, spring flowers in bloom, life back in the streets... And when it comes to food, is there such a dish or produce that just screams spring? What are the heralds of spring on a plate? The answer is not so clear-cut, but let's try to paint a picture.</p>
                </div>
            </div>
            <div className="slide">
                <img src={sImage2} alt="" />
                <div className="text-overlay">
                    <h3>Become a Zagrebian</h3>
                    <h6>Make Zagreb Your Next Work And Travel Destination!</h6>
                    <p>Once the COVID-19 pandemic is over I believe people will travel and explore the world more than ever, and Croatia is the perfect place to put on your bucket list.</p>
                </div>
            </div>
            <div className="slide">
                <img src={sImage3} alt="" />
                <div className="text-overlay">
                    <h3>More than Words</h3>
                    <h6>The Smallest Museum In The World</h6>
                    <p>Zagreb offers a lot of different museums, from the old school ones, like the Archaeological Museum and the Natural History Museum, to less conventional ones, like the Museum of Broken Relationships and the Museum of Illusions. Even though these are amazing museums you should definitely visit if you still haven't, in this blog post you will find out everything you need to know about none other than The smallest museum in the world.</p>
                </div>
            </div>
            <div className="slide">
                <img src={sImage4} alt="" />
                <div className="text-overlay">
                    <h3>Seasonal Zagreb</h3>
                    <h6>Zagreb Advent 2021 in a New Virtual Form</h6>
                    <p>This Advent is all about bringing light back to our lives which is also a perfect metaphor for more positivity and that warm feeling that Christmas time usually gives us.</p>
                </div>
            </div>
            <div className="slide">
                <img src={sImage5} alt="" />
                <div className="text-overlay">
                    <h3>Something to Look Forward to</h3>
                    <h6>When the Longest Street in Zagreb Comes to Life - Q'Art: Project Ilica</h6>
                    <p>It was 20 years ago that Aleksandar Battista Ilić initiated the Community Art Project and the Ilica project along with it. From the very beginnings, the emphasis was on socially engaged art forms in the community.</p>
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
