import React from 'react';
import styled from 'styled-components';

const DotContainer = styled.div`
    position: absolute;
    bottom: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Dot = styled.span`
    padding: 10px;
    margin-right: 5px;
    cursor: pointer;
    border-radius: 50%;
    background: ${props => props.active ? 'black' : 'white'};
`;

const Dots = ({ slides, activeSlide }) => {
  return (
    <DotContainer>
      {slides.map((slide, i) => (
        <Dot key={i} active={activeSlide === i} />
      ))}
    </DotContainer>
  );
};

export default Dots
