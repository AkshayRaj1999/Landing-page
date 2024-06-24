import React from "react";

function Card({ title, image, content, tag, date,link, className, Cindex}) {
  return (
    <div className={className}>
      <div className="card-image-wrapper">
        <img src={image} alt={title} />
      </div>
      {tag && <p>{tag}|{date}</p>}
      <h3>{title}</h3>
      <h6>{content}</h6>
      {link && (
      <a href={link}>Learn More</a>
    )}
    </div>
  );
}

export default Card;
