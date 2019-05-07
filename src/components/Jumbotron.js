import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import miami from '../assets/miami.jpg';

const Styles = styled.div`
  .jumbo {
    background: url(${miami}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 250px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome to Real Countdown</h1>
        <p>The marketplace for Agents, Buyers and Sellers</p>
      </Container>
    </Jumbo>
  </Styles>
)
