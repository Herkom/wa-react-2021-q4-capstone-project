import React from 'react';
import { SVG } from './styled'

import rightArrow from 'assets/svgs/right-arrow.svg' ;
import leftArrow from 'assets/svgs/left-arrow.svg';

const Arrow = ({direction, handleClick}) => {
    return(
        <SVG direction={direction} onClick={handleClick} >
            {direction === 'right' ? <img alt={`${rightArrow}`} src={rightArrow} /> : <img alt={`${leftArrow}`} src={leftArrow} />}
        </SVG>
    );
};

export default Arrow
