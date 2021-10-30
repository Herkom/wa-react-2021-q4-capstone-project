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
    padding: 5px;
    margin-right: 15px;
    cursor: pointer;
    border-radius: 50%;
    background: ${props => props.active ? 'black' : 'white'};
`;

const Dots = ({ slides, currentSlide, setter }) => {

  const handleClick = (i) =>{
    setter({
      activeSlide: i
    })
  }

  return (
    <DotContainer>
      {slides.map((slide, i) => (
        <Dot key={i} active={currentSlide === i} onClick={handleClick(i)} />
      ))}
    </DotContainer>
  );
};

export default Dots
