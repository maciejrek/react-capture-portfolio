import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <StyledFrame1 variants={slider} />
        <StyledFrame2 variants={slider} />
        <StyledFrame3 variants={slider} />
        <StyledFrame4 variants={slider} />
      </motion.div>
      <StyledMovie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <StyledHide>
            <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
          </StyledHide>
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </StyledMovie>
      <StyledMovie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>The Good Time</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </StyledMovie>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const StyledFrame2 = styled(StyledFrame1)`
  background: #ff8efb;
`;

const StyledFrame3 = styled(StyledFrame1)`
  background: #8ed2ff;
`;

const StyledFrame4 = styled(StyledFrame1)`
  background: #8effa0;
`;

export default OurWork;
