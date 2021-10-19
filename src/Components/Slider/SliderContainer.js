import React from 'react'
import styled from 'styled-components';

const Container = styled.ul`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 100%;
    width: ${props => props.width}px;
    display: flex;
`

const SliderContainer = (props) => {
    return (
        <Container width={props.width} translate={props.translate} transition={props.transition}>
            {props.children}
        </Container>
    )
}

export { SliderContainer }