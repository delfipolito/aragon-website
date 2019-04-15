import React from 'react';
import Section from '../General/Section';
import LongCard from '../General/LongCard';
import Card from '../General/Card';
import styled from 'styled-components';
import {Link} from 'react-static';
import Fade from 'react-reveal/Fade';

import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const feature1 = (
  <span>
    <p>
      A few years ago, could you ever imagine running a company from your phone?
 Vote, check finances and always be informed about your organizations.
      Anywhere, just a tap away.
    </p>
  </span>
);
const feature2 = (
  <span>
    <p>
      Thanks to the new App Center, you can seamlessly upgrade apps in your
      organization. Enhancements and security fixes constantly make your
      organization better.
    </p>
  </span>
);
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

const Features = () => (
  <Section>
    <Container>
      <LongCard
        gradient="linear-gradient(335.08deg, #95BBCE -0.56%, #C5D0E6 46.04%, #E7E4F6 100%)"
        image={'Bella/assets/4.svg'}
        textAlign="right"
        label="new"
        bottom={true}
        title="Aragon goes mobile"
        content={feature1}
        className="first-feature"
      />
      <LongCard
        gradient="linear-gradient(24.28deg, #C3E4DF 0%, #EDFAF2 100.94%)"
        image={'Bella/assets/5.svg'}
        textAlign="right"
        label="new"
        title="Always evolving, constantly improving"
        content={feature2}
      />
      <Fade delay={100}>
        <Card
          gradient="linear-gradient(261.3deg, #FBF2E8 0%, #FFEDD9 99.84%)"
          imageUrl={'Bella/assets/6'}
          imageBig="true"
          label="new"
          textAlign="left"
          height="700px"
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
          height="700px"
          content={feature4}
        />
      </Fade>
    </Container>
  </Section>
);

const Container = styled.div`
  display: grid;
  ${medium(
    'grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-template-rows: 500px 500px 700px'
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

export default Features;
