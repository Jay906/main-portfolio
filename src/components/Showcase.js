import React from "react";
import Banner from "./Banner";

function Showcase() {
  return (
    <section className="showcase">
      <Banner
        title="Hard time getting noticed?"
        subtitle="It is getting
      extremely hard to get noticed in harshly competitive environment, isn't
      it? Every business wants to grab attention of a potential customer. 
      Some succeed in getting noticed and remembered crazily. Meanwhile 
      others stay unnoticed experiencing hard time leading their business.
      One of the best ways of having a good and long lasting impressions
      on your customer is by having a good and dynamic web-site, since it
      represents your company and should tell everything about your beliefs
      and what you stand for. I will help you to build that website and get
      stacks of customers."
      >
        <div className="buttons">
          <a href="#contacts" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </Banner>
    </section>
  );
}

export default Showcase;
