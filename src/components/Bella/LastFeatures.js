import React from 'react';
import Section from '../General/Section';
import LongCard from '../General/LongCard';
import Card from '../General/Card';
import styled from 'styled-components';
import {Link} from 'react-static';
import Fade from 'react-reveal/Fade';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const feature3 = (
  <span>
    <p>
      Keep your accountants happy with regular exports using a standard data
      format.
    </p>
  </span>
);
const feature4 = (
  <span>
    <p>
      All your saved names stay only on your device. App upgrades are always
      opt-in. Aragon organizations are sovereign, and we want them to stay that
      way.
    </p>
  </span>
);

const LastFeatures = () => (
  <Section>
    <Container>
      <Fade delay={100}>
        <Card
          gradient="linear-gradient(261.3deg, #FBF2E8 0%, #FFEDD9 99.84%)"
          imageUrl={'Bella/assets/6'}
          imageBig="true"
          label="new"
          textAlign="left"
          cardHeight="700px"
          title="Export your finances in one click"
          content={feature3}
        />
      </Fade>
      <Fade delay={200}>
        <Card
          background={'Bella/assets/bg_2.png'}
          imageUrl={'Bella/assets/8'}
          imageBig="true"
          textAlign="left"
          title="Private and secure"
          colorWhite="true"
          cardHeight="700px"
          content={feature4}
        />
      </Fade>
    </Container>
  </Section>
);

const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 700px'
  )};
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  .first-feature .image-container {
    ${medium('margin-bottom: 2px !important;')};
    img {
      height: 502px;
      width: 502px;
    }
  }
  .label {
    display: flex;
    p {
      background: #ffffff80;
      mix-blend-mode: normal;
      border-radius: 100px;
      padding: 0 15px;
      text-transform: uppercase;
      font-family: 'FontBold';
      font-size: 10px;
      color: #8fb5c8;
    }
  }
`;

export default LastFeatures;
