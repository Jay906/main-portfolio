import React from "react";

function Service({ icon, text }) {
  return (
    <article className="service">
      <span className="icon">{icon}</span>
      <span className="service-text">{text}</span>
    </article>
  );
}

export default Service;
