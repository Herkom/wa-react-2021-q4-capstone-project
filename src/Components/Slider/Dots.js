import PropTypes from 'prop-types';
import { DotContainer, Dot} from './styled';

const Dots = ({ slides, currentSlide, width, state, slideSetter }) => {

  const handleDotClick = (i) =>{
    slideSetter({
      ...state,
      translate: width * i,
      activeSlide: i
    });
  };

  return (
    <DotContainer>
      {slides.map((slide, i) => (
        <Dot key={i} active={currentSlide === i} onClick={()=>handleDotClick(i)} />
      ))}
    </DotContainer>
  );
};

Dots.propTypes = {
  slides: PropTypes.array,
  currentSlide: PropTypes.number,
  width: PropTypes.number,
  state: PropTypes.object,
  slideSetter: PropTypes.func
};

export default Dots;
