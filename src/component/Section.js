import React from "react";
import HeroBanner from "./section/HeroBanner/HeroBanner";
import LogoSlider from "./section/LogoSlider/LogoSlider";
import ServiceSection from "./section/Servicez/ServiceSection";
import Projectz from "./section/Projectz/Projectz";
import Testimonial from "./section/Testmonial/Testimonial";

function Section() {
  return (
    <>
    <HeroBanner/>
    <LogoSlider/>
    <ServiceSection/>
    <Projectz/>
    <Testimonial/>
    </>
  );
}

export default Section;
