import React from "react";
import "./style.css";

import BigCard from './BigCard';
import SmallCard from './Grid6/SmallCard';
import CardSpecial from "./Grid6/CardSpecial";
import Video from './Video';

import sImage1 from '../../assets/images/small-image-1.jpg'
import sImage2 from '../../assets/images/small-image-2.jpg'
import sImage4 from '../../assets/images/small-image-4.jpg'
import sImage5 from '../../assets/images/small-image-5.jpg'
import sImage6 from '../../assets/images/small-image-6.jpeg'


const Main = () => {
  return (
    <div className="main-container">
      <div className="bigCard-container">
        <BigCard 
          title="Where To Take The Best Selfie In Zagreb?"
          text="If you want that perfect picture that captures your mood and Zagreb's beauty in the best way, don't worry, we got you covered. We prepared a short list of some of the most beautiful Zagreb's locations so you can have that amazing memory captured in your pictures.."
          span="More than Words"
        />
        <BigCard 
          title="Alchemy of Zagreb"
          text="When I walk around Zagreb, I sometimes feel like there’s a special chemistry between Zagreb... and chemistry."
          span="Untold stories"
        />
      </div>
      
      <div className="grid-6">
        <SmallCard 
          src={sImage1}
          title="Running in Zagreb - where to go?"
          text="If you are visiting Zagreb and want to stay active but you're not sure what the best locations for running, hiking, or even cycling are, we're here to help you. You can stay active and enjoy Zagreb's beautiful nature at the same time.
          "
          span="More than Words"
        />
        <SmallCard 
          src={sImage2}
          title="Running in Zagreb - where to go?"
          text="If you are visiting Zagreb and want to stay active but you're not sure what the best locations for running, hiking, or even cycling are, we're here to help you. You can stay active and enjoy Zagreb's beautiful nature at the same time.
          "
          span="More than Words"
        />
        <CardSpecial 
          title="Running in Zagreb - where to go?"
          text="Send us your photo of Zagreb with your personal"
        />
        <SmallCard 
           src={sImage4}
           title="Running in Zagreb - where to go?"
          text="If you are visiting Zagreb and want to stay active but you're not sure what the best locations for running, hiking, or even cycling are, we're here to help you. You can stay active and enjoy Zagreb's beautiful nature at the same time.
          "
          span="More than Words"
        />
        <SmallCard 
          src={sImage5}
          title="Running in Zagreb - where to go?"
          text="If you are visiting Zagreb and want to stay active but you're not sure what the best locations for running, hiking, or even cycling are, we're here to help you. You can stay active and enjoy Zagreb's beautiful nature at the same time.
          "
          span="More than Words"
        />
        <SmallCard 
          src={sImage6}
          title="Running in Zagreb - where to go?"
          text="If you are visiting Zagreb and want to stay active but you're not sure what the best locations for running, hiking, or even cycling are, we're here to help you. You can stay active and enjoy Zagreb's beautiful nature at the same time.
          "
          span="More than Words"
        />
      </div>
     
      <div className="more-stories-container">
        <button className="more-stories-button"> More Stories </button>
      </div>

      <div className="video-title">
                <h2>Latest ZagrebLoops</h2>
                <p>Move your cursor over the video to play it</p>
      </div>
      
      <div className="video-grid">
        <Video />
        <Video />
        <Video />
        <Video />
      </div>

      <div className="more-loops-container">
        <button className="more-loops-button"> More loops </button>
      </div>

    </div>
  );
};

export default Main;
