import React from "react";
import "./ServiceSection.css";
import Card from "../../Card/Card";
import Development from "../../../images/icons/Development.png";
import Design from "../../../images/icons/Design.png";
import Market from "../../../images/icons/Market.png";

function ServiceSection() {
  const ServiceCard = [
    {
      CardTitle: "Development services",
      CardContent:
        "Development services enhance economic, social, and technological growth through infrastructure, education, healthcare, and sustainability initiatives. These efforts foster innovation, improve quality of life, and ensure equitable access to resources, building resilient and thriving communities.",
      CardImage: Development,
      CardLink: "https://waves.com",
      className: "service-card",
    },
    {
      CardTitle: "Design services",
      CardContent:
        "Design services focus on creating visually appealing and functional solutions across various media and platforms. This includes graphic design, web design, product design, and interior design. By combining creativity with technical skills, design services help businesses and individuals communicate their message effectively, enhance user experience, and build strong brand identities.",
      CardImage: Design,
      CardLink: "https://waves.com",
      className: "service-card",
    },
    {
      CardTitle: "Market services",
      CardContent:
        "Market services involve activities aimed at promoting and selling products or services. These include market research, advertising, sales strategies, and customer relationship management. By understanding consumer needs and market trends, market services help businesses reach their target audience, increase sales, and build brand loyalty.",
      CardImage: Market,
      CardLink: "https://waves.com",
      className: "service-card",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="service-wrapper">
          <h6>OUR SERVICES</h6>
          <h2>
            Our agency experts will provide you with a full stack of services
          </h2>
          <div className="service-card-wrapper">
            {ServiceCard.map((data, index) => (
              <Card
                title={data.CardTitle}
                image={data.CardImage}
                content={data.CardContent}
                link={data.CardLink}
                className={data.className}
                Cindex={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
