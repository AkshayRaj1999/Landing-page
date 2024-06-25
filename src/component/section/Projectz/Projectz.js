import React from "react";
import BLVCK from "../../../images/images/Blvck.jpg";
import CREAM from "../../../images/images/Cream.png";
import FREDI from "../../../images/images/Fredi.png";
import APPOLO from "../../../images/images/Appolo.png";
import Card from "../../Card/Card";
import "./Projectz.css";

function Projectz() {
  const ProjectzCards = [
    {
      title: "BLVCK",
      tag: "Branding",
      image: BLVCK,
      className: "projects-card",
    },
    {
      title: "CREAM",
      tag: "UI/UX",
      image: CREAM,
      className: "projects-card",
    },
    {
      title: "FREDI",
      tag: "Development",
      image: FREDI,
      className: "projects-card",
    },
    {
      title: "APOLLO",
      tag: "SEO",
      image: APPOLO,
      className: "projects-card",
    },
  ];
  return (
    <section>
      <div className="container-fluid projectz-container">
        <div className="project-wrapper">
          <div className="container">
            <h6>PROJECTS</h6>
            <h3>
              We guide game-changing companies, across platforms & places,
              through agile design & digital experience. We make waves
            </h3>
            <div className="project-card-wrapper col-lg-12 col-md-12">
              {ProjectzCards.map((data, index) => (
                <div className="Projectz-card">
                  <Card
                    title={data.title}
                    image={data.image}
                    tag={data.tag}
                    Cindex={index}
                    className={data.className}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projectz;
