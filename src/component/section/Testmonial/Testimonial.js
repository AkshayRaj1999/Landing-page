import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import Av1 from "../../../images/images/Avatar-1.png";
import Av2 from "../../../images/images/Avatar-2.png";
import Av3 from "../../../images/images/Avatar-3.png";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const testimonials = [
    {
      image: Av1,
      quote:
        "Waves demonstrates an excellent understanding of user needs and all of their designs are creative and elegant in their simplicity.",
      name: "Jerome Bell",
      position: "Business Analyst,H&L Pvt.LTD",
    },
    {
      image: Av2,
      quote:
        "Working with Waves was a game-changer for our project. Their ability to seamlessly blend user needs with creativity resulted in a design that exceeded our expectations.",
      name: "Jane Smith",
      position: "CTO, LogiTech",
    },
    {
      image: Av3,
      quote:
        "I cannot recommend Waves highly enough. Their expertise in understanding user needs and transforming them into innovative designs is truly impressive.",
      name: "Michael Brown",
      position: "Digital Project Manager, NeoCore",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="testimonial-wrapper">
          <h4>What our great customers say</h4>
          <div className="testimonial-card-wrapper">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial">
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-content">
                    <h3>{testimonial.quote}</h3>
                    <p>{testimonial.name}</p>
                    <span>{testimonial.position}</span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
