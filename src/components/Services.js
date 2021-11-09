import React from "react";
import Banner from "./Banner";
import { FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import Service from "./Service";

const services = [
  { icon: <FaHtml5 />, text: "HTML" },
  { icon: <FaCss3Alt />, text: "CSS" },
  { icon: <IoLogoJavascript />, text: "Javascript" },
  { icon: <MdOutlineWeb />, text: "Web development" },
  { icon: <FaPython />, text: "Python" },
];

function Services() {
  return (
    <section className="services" id="services">
      <Banner
        title="Services"
        subtitle="The core of my services is web development! If you are someone
        who is looking for SPAs, I can help you to achieve it via React.js"
      ></Banner>
      <div className="services-grid">
        {services.map((service, index) => (
          <Service icon={service.icon} text={service.text} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Services;
