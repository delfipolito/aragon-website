import React from 'react';
import PropTypes from 'prop-types';
import Section from '../General/Section';
import styled from 'styled-components';
import {breakpoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);
const large = css => breakpoint('large', css);
import {Link} from 'react-static';

class Card extends React.Component {
  static propTypes = {
    image: PropTypes.node,
  };
  static defaultProps = {};

  render() {
    const {
      title,
      content,
      imageUrl,
      linkTo,
      gradient,
      background,
      imageBig,
      colorWhite,
      children,
    } = this.props;
    return (
      <SmallCard
        target="_blank"
        colorWhite={colorWhite}
        background={background ? require(`../${background}`) : ''}
        gradient={gradient ? gradient : ''}
        imageBig={imageBig ? imageBig : ''}>
        <img src={require(`../${imageUrl}.svg`)} />
        <h1>{title}</h1>
        <h1>{content}</h1>
      </SmallCard>
    );
  }
}

const SmallCard = styled.div`
  border-radius: 12px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.07);
  background-color: #f9fafc;
  ${props =>
    props.background &&
    'background-image: url(' + props.background + ');'} ${props =>
    props.gradient &&
    'background-image:' + props.gradient + ';'}
  background-size: 108% 108%;
  background-position: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  height: 100%;
  transition: all 0.25s ease-in-out;
  ${medium('padding: 30px 60px;')};
  img {
    height: 130px;
    width: 130px;
    ${props => props.imageBig && 'height: auto;'} ${props =>
      props.imageBig && 'width: 100%;'};
  }
  p {
    text-align: center;
    color: ${props => (props.colorWhite ? '#b4b5cc' : '#7f8198')};
  }
  h1 {
    font-family: 'FontLight', sans-serif;
    font-size: 30px;
    width: inherit;
    ${medium('font-size: 36px; width: calc(100% + 110px);')};
    ${large('width: inherit; font-size: 46px;')};
    font-weight: 300;
    line-height: 1.35;
    text-align: center;
    color: #2d4051;
    margin: 15px 0 0 0;
    color: ${props => (props.colorWhite ? 'white' : '#2d4051')};
  }
  &:hover {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.07);
  }
`;

export default Card;
