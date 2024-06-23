import React from "react";
import "./HeroBanner.css";

function HeroBanner() {
  return (
    <section>
      <div className="conatiner-fluid">
        <div className="hero-banner-wrapper">
          <div className="banner-contetnt-wrapper">
            <h4>Global Brandmakers making <span>Waves</span></h4>
            <div className="banner-content-btn-wrapper">
              <button className="service-btn">Explore our services</button>
              <button className="watch-reel-btn">Watch our reel</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
