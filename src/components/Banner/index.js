import React from "react";
import "./style.scss";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-text-wrapper">
        <h1>Where To Take The Best Selfie In Zagreb?</h1>
        <p className="banner-text">
          There is a curious place in Zagreb called Stone Gate. It looks like a small tunnel with a chapel within. Back in the day, this was a medieval town gate that guarded the Upper Town area.
        </p>
        <p className="banner-hashtag">#More than Words</p>
        <button className="banner-button">Read more</button>
      </div>
    </div>
  );
};

export default Banner;
