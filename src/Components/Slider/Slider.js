import React, { useState, useEffect } from 'react';
import { SliderCSS } from './styled';
import SliderContainer from './SliderContainer';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';

//Thanks to Victor recommendation
//I'm thinking about changing it to just get the width of the parent element
const getWidth = () => window.innerWidth;

/**
 * @function Slider
 */
const Slider = ({width = getWidth(), height, items}) => {
	
	const totalNumberOfSlides = items.length - 1;

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

	return (
		<SliderCSS width={width} height={height}>
			<SliderContainer
				translate={translate}
				transition={transition}
				width={width * items.length}
				className={'SliderContent'}
			>
				{items.map((_slide, i) => {
					return <Slide width={getWidth()} key={`${_slide.id}${i}`} {..._slide} />
				})}
			</SliderContainer>

			<Arrow direction="left" handleClick={prevSlide} />
			<Arrow direction="right" handleClick={nextSlide} />

			{/* Not sure if passing so many props is a good thing */}
			<Dots slides={items} currentSlide={activeSlide} width={width} state={state} slideSetter={setState}/>
			
		</SliderCSS>
	);
};

export default Slider
