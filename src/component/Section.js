import React from "react";
import HeroBanner from "./section/HeroBanner/HeroBanner";
import LogoSlider from "./section/LogoSlider/LogoSlider";
import ServiceSection from "./section/Servicez/ServiceSection";
import Projectz from "./section/Projectz/Projectz";
import Testimonial from "./section/Testmonial/Testimonial";
import Footer from "./Footer/Footer";

function Section() {
  return (
    <>
    <HeroBanner/>
    <LogoSlider/>
    <ServiceSection/>
    <Projectz/>
    <Testimonial/>
    <Footer/>
    </>
  );
}

export default Section;
