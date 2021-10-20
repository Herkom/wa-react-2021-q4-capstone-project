import React from 'react';
import styled from 'styled-components';

const SlideItem = styled.li`
    height: 100%;
    width: ${props => props.width}px;
    background-image: url('${props => props.content}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom 25%;
    left: 10%;
`;
const Header = styled.h2`
    font-family: 'DM Serif Display', serif;
    text-transform: capitalize;
    font-size: 47px;
    line-height: 49px;
    padding: 2rem;
    padding-bottom:1rem;
    background: white;
`;
const Description = styled.p`
    font-family: 'Mulish', sans-serif;
    text-transform: capitalize;
    font-weight: 500;
    padding: 0 2rem 2rem 2rem;
    background: white;
`;

const Slide = ({ width, ...props }) => {

    const {
        title,
        description:[
            {text: productDescription}
        ],
        main_image:{
            url: imageURL
        }
    } = props.data;

    return (
        <SlideItem width={width} content={imageURL}>
            <InfoContainer>
                <Header>{title.toLowerCase()}</Header>
                <Description>{productDescription.length > 30 ? '': productDescription}</Description>
            </InfoContainer>
            
        </SlideItem>
    );
};

export default Slide
