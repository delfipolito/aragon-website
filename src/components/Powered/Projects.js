import React from 'react';
import styled from 'styled-components';
import pando from './assets/pando.svg';
import althea from './assets/althea.svg';
import dapp from './assets/dapp.svg';
import melonport from './assets/melonport.svg';

import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);

const Projects = () => (
  <ProjectsSection>
    <Container>
      <a target="_blank" href="https://google.com"><img src={althea}/></a>
      <a target="_blank" href="https://google.com"><img src={dapp}/></a>
      <a target="_blank" href="https://google.com"><img src={melonport}/></a>
      <a target="_blank" href="https://google.com"><img src={pando}/></a>
    </Container>
  </ProjectsSection>
);

const ProjectsSection = styled.section`
  height: auto;
  background-color: #019FE3;
  padding: 100px 0 0 0;
  margin-bottom: -3px;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;

`;
export default Projects;
