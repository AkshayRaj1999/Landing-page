import React from "react";
import "./LogoSlide.css";
import Marquee from "react-fast-marquee";
import LogoIpsum1 from "../../../images/images/LogoIpsum1.png";
import LogoIpsum2 from "../../../images/images/LogoIpsum2.png";
import LogoIpsum3 from "../../../images/images/LogoIpsum3.png";
import LogoIpsum4 from "../../../images/images/LogoIpsum4.png";
import LogoIpsum5 from "../../../images/images/LogoIpsum5.png";
import LogoIpsum6 from "../../../images/images/LogoIpsum6.png";

function LogoSlider() {
  const SliderImages = [LogoIpsum1,LogoIpsum2,LogoIpsum3,LogoIpsum4,LogoIpsum5,LogoIpsum6];
  return (
    <section>
      <div className="container-fluid">
        <div className="slider-wrapper">
          <h4>We are blessed to work with amazing brands worldwide</h4>
          <div className="slider-images">
            <Marquee speed={300}>
              {SliderImages.map((data,index)=>(
                <div className="slider-image-container">
                  <img src={data} alt={`slider ${index}`} />
                </div>
              ))}
              {SliderImages.map((data,index)=>(
                <div className="slider-image-container">
                  <img src={data} alt={`slider ${index}`} />
                </div>
              ))}
            </Marquee>
            <Marquee speed={300} direction="right">
              {SliderImages.map((data,index)=>(
                <div className="slider-image-container">
                  <img src={data} alt={`slider ${index}`} />
                </div>
              ))}
              {SliderImages.map((data,index)=>(
                <div className="slider-image-container">
                  <img src={data} alt={`slider ${index}`} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoSlider;
