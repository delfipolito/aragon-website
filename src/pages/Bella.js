import React from 'react';
import styled from 'styled-components';
import {Page} from '../components';
import Section from '../components/General/Section';
import backgroundImage from '../components/Bella/assets/hero-background.jpg';
import title from '../components/Bella/assets/hero-title.svg';

import Features from '../components/Bella/Features'
import MoreFeatures from '../components/Bella/MoreFeatures'
import LastFeatures from '../components/Bella/LastFeatures'
import Video from '../components/Bella/Video'
import TryBella from '../components/Bella/TryBella'
import Zoom from 'react-reveal/Fade';

class Bella extends React.Component {

  render() {
    return (
      <Page path="/bella">
        <Hero>
          <Container>
            <Zoom duration={3000}>
              <img src={title} />
            </Zoom>
          </Container>
        </Hero>
        <Features />
        <Video />
        <MoreFeatures />
        <LastFeatures />
        <TryBella />
      </Page>
    );
  }
}

const Hero = styled(Section)`
  height: 685px;
  background-color: #0d5c76;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    max-width: 90%;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Bella;
