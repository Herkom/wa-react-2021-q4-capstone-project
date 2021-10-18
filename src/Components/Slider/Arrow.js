import React from 'react';
import styled from 'styled-components';

import rightArrow from '../../assets/svgs/right-arrow.svg';
import leftArrow from '../../assets/svgs/left-arrow.svg';

const SVG = styled.div`
    display: flex;
    position: absolute;
    top: calc( 50% - 65px );
    ${props => props.direction === 'right' ? `right: 25px` : `left: 25px`};
    height: 65px;
    width: 65px;
    justify-content: center;
    background: none;
    border: 2px solid white;
    border-radius: 50%;
    cursor: pointer;
    align-items: center;
    transition: all ease-in 0.1s;

    &:hover {
        transform: scale(1.1);
        background: #e4986a;
        border: 2px solid #e4986a;
    }

    img {
        transform: translateX(${props => props.direction === 'left' ? '-2' : '2'}px);

    &:focus {
        outline: 0;
    }
`

const Arrow = ({direction, handleClick}) => {
    return(
        <SVG direction={direction} onClick={handleClick} >
            {direction === 'right' ? <img alt={`${rightArrow}`} src={rightArrow} /> : <img alt={`${leftArrow}`} src={leftArrow} />}
        </SVG>
    )
}

export { Arrow }