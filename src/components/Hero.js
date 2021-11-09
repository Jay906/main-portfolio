import React from "react";
import Banner from "./Banner";

function Hero() {
  return (
    <section className="hero" id="start">
      <Banner
        title="I am a python and web developer based in Russia."
        subtitle="
        For me one of the most exciting things in this world are 
        solving different problems and investing 100% effort
        into quality of my work! Open mindedness and drive to learn
        make me look for different solutions for the same problem and find
        the most optimal option among them all! If you decide to work
        with me, you will not regret it! I promise!
        "
      >
        <div className="buttons">
          <a href="tel:+7(952)-211-64-77" className="btn call">
            Call me
          </a>
          <a
            href="mailto:atalykovj@gmail.com?subject=Ask something"
            className="btn btn-primary"
          >
            Email me!
          </a>
        </div>
      </Banner>
    </section>
  );
}

export default Hero;
