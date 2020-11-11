import React from "react";
//Styles
import styled from "styled-components";
import { StyledAbout } from "../styles";
import Toggle from "./Toggle";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <Toggle>
        <div className="question">
          <h4>How Do I Start</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>

      <Toggle>
        <div className="question">
          <h4>Daily Schedule</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <Toggle>
        <div className="question">
          <h4>Different Payment Methods</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <Toggle>
        <div className="question">
          <h4>What Products do you offer.</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem orem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
