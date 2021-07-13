import React from "react";
import "./style.scss";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import BigCard from './BigCard';
import SmallCard from './Grid6/SmallCard';
import CardSpecial from "./Grid6/CardSpecial";
import Video from './Video';
import Carousel from "./Carousel";
import LatestImages from "./LatestImages";

import sImage1 from '../../assets/images/small-image-1.jpg'
import sImage2 from '../../assets/images/small-image-2.jpg'
import sImage3 from '../../assets/images/small-image-3.jpeg'
import sImage4 from '../../assets/images/small-image-4.jpg'
import sImage5 from '../../assets/images/small-image-5.jpg'
import sImage6 from '../../assets/images/river-zg.jpg'
import sImage7 from '../../assets/images/cevapi-zg.jpg'
import sImage8 from '../../assets/images/medvednica-utrka.jpg'
import sImage10 from '../../assets/images/kucice-zg.jpeg'
import sImage11 from '../../assets/images/alchemy-zg.jpg'


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
          title="Fala"
          text="There is a curious place in Zagreb called Stone Gate. It looks like a small tunnel with a chapel within. Back in the day, this was a medieval town gate that guarded the Upper Town area."
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
          title="The City and Its River"
          text="Zagreb lies on the banks of the river Sava. I bet that some of you who don’t live in Croatia, even if you visited Zagreb once, are asking yourselves as you’re reading this: “Wait, there’s a river in Zagreb?”"
          span="Untold stories"
        />
        <CardSpecial 
          title="Share your photo"
          text="Send us your photo of Zagreb with your personal details"
        />
        <SmallCard 
          src={sImage3}
          title="Street Art In Zagreb"
          text="With warm weather comes a side of Zagreb that Zagrebians love; more sun, spending more time outdoors, and walking around their favorite city, while discovering new places to enjoy. That's a perfect opportunity for outdoor art projects that quickly grab your attention as soon as you see them."
          span="More than Words"
        />
        <SmallCard 
          src={sImage4}
          title="Mysterious World of Zagreb Legends"
          text="Sunny days and the enchanting fragrance of tree blossoms give us a spirit-lifting sense of joy these days. No matter how good Zagreb looks in the Sun, don't be fooled by its inviting face. As soon as the night falls, mysterious tales from the times long past lurk from the shadows."
          span="More than Words"
        />
        <SmallCard 
          src={sImage5}
          title="Alchemy of Zagreb"
          text="When I walk around Zagreb, I sometimes feel like there’s a special chemistry between Zagreb... and chemistry."
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

      <div className="grid-6">
        <SmallCard 
          src={sImage6}
          title="The City and Its River"
          text="Zagreb lies on the banks of the river Sava. I bet that some of you who don’t live in Croatia, even if you visited Zagreb once, are asking yourselves as you’re reading this: “Wait, there’s a river in Zagreb?”"
          span="More than Words"
        />
        <SmallCard 
          src={sImage7}
          title="Ćevapi – The Visitors That Came to Stay"
          text="Ćevapi are the most famous representative of the Balkan grill genre, a dish that entered south-eastern Europe during the Ottoman period. Their origin is oriental, deriving from the Turkish kebab."
          span="Untold stories"
        />
        <SmallCard 
          src={sImage8}
          title="Winter Wonderland - Medvednica And Samobor Mountains"
          text="Although it seems to many that the ideal time for hiking trips is in the warmer months, nature in winter has a special charm and carries its own beauties that can only be experienced during that time."
          span="Untold stories"
        />
        <SmallCard 
          src={sImage7}
          title="Sunday Roast – In Good Times and in Bad Times"
          text="One of my fondest childhood memories when it comes to food is our typical Sunday family lunch. In 99% of the cases it was the same dish, but I never got bored of it – roast chicken and potatoes, lettuce salad on the side."
          span="More than Words"
        />
        <SmallCard 
          src={sImage10}
          title="Zagreb University - A Student Guide Through the City"
          text="The old saying goes: 'The student days are the most beautiful ones.' And, the Zagreb is a city which confirms that popular opinion."
          span="More than Words"
        />
        <SmallCard 
          src={sImage11}
          title="Alchemy of Zagreb"
          text="When I walk around Zagreb, I sometimes feel like there’s a special chemistry between Zagreb... and chemistry."
          span="More than Words"
        />
      </div>

      <div className="explore-title">
        <h2>Explore topics</h2>
      </div>

      <div className="carousel">
        < Carousel />        
      </div>

      <div className="latest-images">
        <h2>Latest images</h2>
      </div>

      <div className="latest-images-container">
        < LatestImages />
      </div>
      
    </div>
  );
};

export default Main;
