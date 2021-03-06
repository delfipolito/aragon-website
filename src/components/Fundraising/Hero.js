import React from 'react';
import styled from 'styled-components';
import Section from '../General/Section';
import {Link} from 'react-static';
import background from './assets/hero-background.svg';
import template from './assets/hero-template.svg';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Hero = () => (
  <HeroSection>
    <TextContainer>
      <BreakPoint to="large"><img src={template} /></BreakPoint>
      <div>
        <h2>Fair and sustainable fundraising for all</h2>
        <h4>
          The Fundraising app empowers individuals and organizations to raise funds
          sustainably by maintaining accountability between projects and
          supporters.
        </h4>
        <div className="hero-button-container">
          <a
            className="principal-button"
            href="https://rinkeby.aragon.org/#/create"
            target="_blank">
            Try Fundraising now
          </a>
        </div>
      </div>
      <BreakPoint from="large"><img src={template} /></BreakPoint>
    </TextContainer>
  </HeroSection>
);

const HeroSection = styled(Section)`
  background: linear-gradient(
    156.5deg,
    #ff9372 -36.73%,
    #ffb471 33.53%,
    #ffd770 106.77%
  );
  background-image: url(${background});
  background-size: cover;
  background-position: bottom;
  height: auto;
  padding-bottom: 300px;
  ${medium('padding-bottom: 270px;')}
  ${large('height: 700px; padding-bottom: 0;')}
  padding-top: 94px;
  .container {
    padding: 0;
    max-width: 1300px;
  }
  h2 {
    font-family: 'FontSemiBold', sans-serif;
    font-weight: 600;
    font-size: 34px;
    ${medium('font-size: 38px;')}
    line-height: 52px;
    letter-spacing: -0.447059px;
    color: #ffffff;
    max-width: 370px;
    text-align: left;
    margin-bottom: 8px;
  }
  h4 {
    font-family: 'FontMedium', sans-serif;
    font-size: 21px;
    line-height: 35px;
    color: #ffffff;
    max-width: 370px;
    text-align: left;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  margin: auto;
  ${large('margin-top: 45px;')}
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  ${medium('align-items: center;')}
  ${large('align-items: flex-start;')}
  flex-direction: column;
  ${large('flex-direction: row;')}
  img {
    max-width: 100%;
    ${large('max-width: 760px;')}
  }
`;
export default Hero;
