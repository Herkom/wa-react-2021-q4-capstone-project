import React, { useState, useEffect } from 'react';
import { SliderCSS, DotContainer, Dot } from './styled';
import SliderContainer from './SliderContainer';
import Slide from './Slide';
import Arrow from './Arrow';

const getWidth = () => window.innerWidth;

/**
 * @function Slider
 */
const Slider = ({width = getWidth(), items}) => {
	
	const slides = items.map(i => i);
	const totalNumberOfSlides = slides.length - 1;

	const [state, setState] = useState({
		activeSlide: 0,
		translate: 0,
		transition: 0.45
	});

	const { activeSlide, translate, transition } = state;

	useEffect(() => {
		if (transition === 0) setState({ ...state, transition: 0.45 });
	}, [transition, state]);

	const nextSlide = () => {
		setState({
			...state,

			//If last slide
			//translate to first slide,
			//otherwise next slide.
			translate: activeSlide === totalNumberOfSlides ? 0 : translate + width,
			activeSlide: activeSlide === totalNumberOfSlides ? 0 : activeSlide + 1
		});
	};

	const prevSlide = () => {
		setState({
			...state,

			//If first slide
			//translate to last slide,
			//otherwise previous slide.
			translate: activeSlide === 0 ? width * totalNumberOfSlides : translate - width,
			activeSlide: activeSlide === 0 ? totalNumberOfSlides : activeSlide - 1
		});
	};

	const handleDotClick = (event) => {
		const slideNumber = parseInt(event.target.id);

		setState({
			...state,
			translate: width * slideNumber,
		  	activeSlide: slideNumber
		})
	}

	return (
		<SliderCSS width={width}>
			<SliderContainer
				translate={translate}
				transition={transition}
				width={width * slides.length}
				className={'SliderContent'}
			>
				{slides.map((_slide, i) => {
					return <Slide width={getWidth()} key={`${_slide.id}${i}`} {..._slide} />
				})}
			</SliderContainer>

			<Arrow direction="left" handleClick={prevSlide} />
			<Arrow direction="right" handleClick={nextSlide} />
			
			<DotContainer>
				{slides.map((slide, i) => (
					<Dot key={i} id={i} active={activeSlide === i} onClick={handleDotClick} />
				))}
			</DotContainer>
		</SliderCSS>
	);
};

export default Slider
