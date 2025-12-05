import Hero from "./Hero";
import WhatIsSexTherapy from "./WhatIsSexTherapy";
import About from "./About";
import Help from "./Help";
import HelpNot from "./HelpNot";
import Education from "./Education";
import Values from "./Values";
import Prices from "./Prices";
import FAQ from "./FAQ";
import { useState, useRef } from "react";
import Contacts from "./Contacts";

const Main = () => {
  const [isSideMenuClicked, setIsSideMenuClicked] = useState(false);
  const helpSectionRef = useRef<HTMLElement>(null);

  const handleClick = () => {
    setIsSideMenuClicked(!isSideMenuClicked);
  };

  return (
    <main>
      <Hero />
      <WhatIsSexTherapy />
      <About />
      <section id="help" ref={helpSectionRef}>
        {isSideMenuClicked ? (
          <HelpNot onClick={handleClick} />
        ) : (
          <Help onClick={handleClick} />
        )}
      </section>
      <Values />
      <Education />
      <Prices />
      <FAQ />
      <Contacts />
    </main>
  );
};

export default Main;
