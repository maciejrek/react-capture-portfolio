import React from "react";
import home1 from "../img/home1.png";
import {
  StyledHide,
  StyledAbout,
  StyledDescription,
  StyledImage,
} from "../styles";

//Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>true.</motion.h2>
          </StyledHide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with a camera"></img>
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
