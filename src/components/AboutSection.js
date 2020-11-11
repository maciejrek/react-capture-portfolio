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
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
        staggerChildren: 0.5,
        when: "afterChildren",
      },
    },
  };
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <StyledHide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
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
