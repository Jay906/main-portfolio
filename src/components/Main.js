import React from "react";
import Freelancing from "../Freelancing";
import Contacts from "./Contacts";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
import Showcase from "./Showcase";

function Main() {
  return (
    <main>
      <Hero />
      <Showcase />
      <Services />
      <Projects />
      <Freelancing />
      <Contacts />
    </main>
  );
}

export default Main;
