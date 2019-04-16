import React from 'react';
import styled from 'styled-components';
import Section from '../General/Section';
import video from './home-assets/home-video.mp4';
import videoMobile from './home-assets/video-mobile.mp4';
import blur from './home-assets/blur2.png';
import {Link} from 'react-static';

import {breakpoint, BreakPoint, Button} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Hero = () => (
  <HeroSection>
    <Box>
      <BreakPoint to="medium">
        <VideoContainer>
          <video playsInline autoPlay muted loop>
            <source src={videoMobile} type="video/mp4" />
          </video>
        </VideoContainer>
      </BreakPoint>
      <TextContainer>
        <h2>
          Freedom to <br />
          organize
        </h2>
        <h4>
          Aragon lets you freely organize and collaborate without borders or
          intermediaries. Create global, bureaucracy-free organizations,
          companies, and communities.
        </h4>
        <Button.Anchor
          className="principal-hero-link"
          mode="strong"
          href="./discover">
          Discover the product
        </Button.Anchor>
      </TextContainer>
      <BreakPoint from="medium">
      <VideoContainer>
        <img src={blur} />
        <video playsInline autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </VideoContainer>
      </BreakPoint>
    </Box>
  </HeroSection>
);
const VideoContainer = styled.div`
  width: 100%;
  text-align: center;
  video {
    width: 90%;
    max-width: 312px;
    margin-top: 30px;
    ${medium('width: auto; margin-left: 28px; max-width: inherit; margin-top: 0;')};
    z-index: 2;
    position: relative;
    border-radius: 8px;

    @media (min-width: 10px) and (max-width: 960px) {
      display: none;
    }
    @media (min-width: 960px) and (max-width: 1120px) {
      display: block;
      height: 300px;
      margin-right: -10px;
    }
    @media (min-width: 1120px) and (max-width: 1260px) {
      display: block;
      height: 350px;
      margin-right: -30px;
    }
    @media (min-width: 1260px) and (max-width: 1330px) {
      display: block;
      height: 400px !important;
      margin-right: -50px;
    }
    @media (min-width: 1330px) {
      display: block;
      height: 450px;
      margin-right: -70px;
    }
  }

  img {
    position: absolute;
    z-index: 1;
    height: auto;
    @media (min-width: 768px) and (max-width: 960px) {
      display: none;
    }
    @media (min-width: 960px) and (max-width: 1120px) {
      width: 720px;
      bottom: 45px;
      left: calc(50% - 122px);
    }
    @media (min-width: 1120px) and (max-width: 1260px) {
      width: 840px;
      bottom: -10px;
      left: calc(50% - 153px);
    }
    @media (min-width: 1260px) and (max-width: 1330px) {
      width: 960px;
      bottom: -43px;
      left: calc(50% - 205px);
    }
    @media (min-width: 1330px) {
      width: 1080px;
      bottom: -71px;
      left: calc(50% - 277px);
    }
  }
`;

const HeroSection = styled(Section)`
  background-color: #1c1d23;
  min-height: 650px;
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${medium('flex-direction: row;')};
  @media (min-width: 690px) and (max-width: 960px) {
    flex-direction: column;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  ${medium('min-width: 453px;')};
  h2 {
    font-size: 56px;
    line-height: 75px;
    text-align: left;
    color: white;
    opacity: 1;
    margin: 15px 0;
  }
  h4 {
    text-align: left;
    color: white;
    opacity: 0.8;
  }
`;
export default Hero;
