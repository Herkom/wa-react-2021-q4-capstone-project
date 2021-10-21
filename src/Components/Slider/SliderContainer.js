import React from 'react'
import { Container } from './styled';

const SliderContainer = (props) => {
    return (
        <Container width={props.width} translate={props.translate} transition={props.transition}>
            {props.children}
        </Container>
    );
};

export default SliderContainer
