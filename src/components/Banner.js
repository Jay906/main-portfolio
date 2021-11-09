import React from "react";

function Banner({ title, subtitle, children }) {
  return (
    <div className="banner">
      <h2 className="banner-title">{title}</h2>
      <p className="banner-subtitle">{subtitle}</p>
      {children}
    </div>
  );
}

export default Banner;
