import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";


const Testimonial = () => {
  const TestimonialData = [
    {
      TID: 1,
      Message:
        "They were incredibly attentive to our needs and worked tirelessly to ensure our space was spotless. We couldn't be happier with their service! They were incredibly attentive to our needs and worked tirelessly to ensure our space was spotless. We couldn't be happier with their service!",
      Image:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1719489808~exp=1719493408~hmac=8a58b1fb20897759a0785d142a2627783f257ee375f52e1542f6da9673a710d2&w=826",
      Name: "Samantha Al-Maktoum",
      Stars: "★ ★ ★ ★ ★",
    },
    {
      TID: 2,
      Message:
        "They were incredibly attentive to our needs and worked tirelessly to ensure our space was spotless. We couldn't be happier with their service! They were incredibly attentive to our needs and worked tirelessly to ensure our space was spotless. We couldn't be happier with their service!",
      Image:
        "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1719489195~exp=1719492795~hmac=777feeed8f4fcde41d39e2f71ba0ecaff28c256c72b408bb43abf64ee24fe68a&w=826",
      Name: "HH Al-Maktoum",
      Stars: "★ ★ ★ ★ ★",
    },
    {
      TID: 3,
      Message:
        "They were incredibly attentive to our needs and worked tirelessly to ensure our space was spotless. We couldn't be happier with their service! They were incredibly attentive to our needs and worked tirelessly to ensure our space was spotless. We couldn't be happier with their service!",
      Image:
        "https://img.freepik.com/premium-photo/memoji-happy-man-white-background-emoji_826801-6838.jpg?w=826",
      Name: "VV Al-Maktoum",
      Stars: "★ ★ ★ ★ ★",
    },
  ];
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className="container">
      <div className="testimonial-wrapper">
        <div className="testimonial-leftside-wrapper">
          <h3>
            Look Whats <br />
            <span>Our Customer Say!</span>{" "}
          </h3>
          <p>
            Fusce venenatis tellus a felis scelerisque, non pulvinar est
            pellentesque. Fusce venenatis tellus a felis scelerisque, non
            pulvinar est pellentesque
          </p>
          <div style={{ textAlign: "center" }} className="testimonial-btn-wrapper">
            <button className="button testimonial-prev-btn" onClick={previous}>
            ←
            </button>
            <button className="button testimonial-next-btn" onClick={next}>
            →
            </button>
          </div>
        </div>
        <div className="testimonial-rightside-wrapper">
          <div className="slider-container">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              {TestimonialData.map((data) => (
                <div key={data.TID} className="testimonial-rightside-wrapper">
                  <div className="testimonial-card-wrapper">
                    <p>{data.Message}</p>
                    <div className="testimonial-rightside-footer-content">
                      <div className="testimonial-avatar-container">
                        <img src={data.Image} alt={data.Name} />
                      </div>
                      <h4>{data.Name}</h4>
                      <div className="stars-wrapper">{data.Stars}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
