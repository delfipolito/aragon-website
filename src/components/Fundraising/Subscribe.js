import React from 'react';
import Section from '../General/Section';
import styled from 'styled-components';
import {Link} from 'react-static';
import {breakpoint, BreakPoint} from '@aragon/ui';
const medium = css => breakpoint('medium', css);

const Subscribe = () => (
  <SubscribeSection>
    <Container>
      <div>
        <h3>Want to start your own fundraising campaign using Aragon?</h3>
        <p>
          Enter your email address and one of our team members will be in touch:
        </p>
        <form
          action="https://one.us15.list-manage.com/subscribe/post?u=a590aa3843a54b079d48e6e18&amp;id=e81a44c4bd"
          method="post"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate>
          <div className="email-field">
            <input
              type="email"
              name="EMAIL"
              placeholder="Your email address..."
              className="required email"
              id="mce-EMAIL"
            />
            <div
              aria-hidden="true"
              style={{position: 'absolute', left: '-5000px'}}>
              <input
                type="text"
                name="b_a590aa3843a54b079d48e6e18_e81a44c4bd"
                tabIndex="-1"
              />
            </div>
            <div className="button-div">
              <button
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  </SubscribeSection>
);

const SubscribeSection = styled(Section)`
  padding: 114px 15px;
  z-index: 3;
  background: #6190ea;
  .email-field {
        display: inline-flex;
  }
  input {
    height: 54px;
    width: 404px;
    padding: 12px 20px;
    background: #ffffff;
    border-radius: 8px 0 0 8px;
    border: solid white;
    outline: none;
  }
  .button-div {
    height: 54px;
    background: white;
    border-radius: 0 8px 8px 0;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    button {
      background: #6190ea;
      opacity: 0.4;
      border-radius: 8px;
      color: white;
      height: 44px;
      width: 140px;
    }
    button:hover {
      opacity: 1;
    }
  }
`;
const Container = styled.div`
  text-align: center;
  p {
    font-weight: normal;
    font-size: 21px;
    line-height: 35px;
    text-align: center;
    margin: 0 auto 50px;
    font-family: 'FontRegular';
    color: #ffffff;
  }
  h3 {
    font-weight: 600;
    font-size: 38px;
    line-height: 52px;
    letter-spacing: -0.447059px;
    color: #ffffff;
    text-align: center;
    margin: 50px auto 15px;
    font-family: 'FontSemiBold', sans-serif;
    display: block;
  }
`;

export default Subscribe;
