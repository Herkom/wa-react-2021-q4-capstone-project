import PropTypes from 'prop-types';

import { SVG } from './styled';

import rightArrow from 'assets/svgs/right-arrow.svg' ;
import leftArrow from 'assets/svgs/left-arrow.svg';

const Arrow = ({direction, handleClick}) => {
    
    const arrowDirection = direction === 'right' ? rightArrow : leftArrow;

    return(
        <SVG direction={direction} onClick={handleClick} >
            <img alt={`${arrowDirection}`} src={arrowDirection} />
        </SVG>
    );
};

Arrow.propTypes = {
    direction: PropTypes.string,
    handleClick: PropTypes.func
}

export default Arrow
