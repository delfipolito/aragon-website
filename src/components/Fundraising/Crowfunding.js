import React from 'react';
import Section from '../General/Section';
import DividedSection from '../General/DividedSection';
import styled from 'styled-components';
import image from './assets/crowfunding.svg';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const Crowfunding = () => (
  <Container>
    <DividedSection image={image} imageLeft={true}>
      <h3>
        Crowdfunding <br />
        <span className="orange">reimagined</span>
      </h3>
      <p>
        Fundraising is a radical new way to organize communities around money at
        the speed of software.
      </p>
    </DividedSection>
  </Container>
);

const Container = styled.div`
  .orange {
    background: -webkit-linear-gradient(156.5deg, #FF9372 -36.73%, #FFB471 33.53%, #FFD770 106.77%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  img {
    margin-left: -15%;
    max-width: 130%;
    ${medium('margin-left: 0; max-width: calc(100% + 413px);')};
  }

`;
export default Crowfunding;
