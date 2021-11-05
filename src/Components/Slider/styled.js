import styled from 'styled-components';
import { fontTypes } from "styles/baseFonts";

export const Container = styled.ul`
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    height: 100%;
    width: ${props => props.width}px;
    display: flex;
`;

export const SVG = styled.div`
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
    }
    &:focus {
        outline: 0;
    }

    @media(max-width: 600px){
        top: calc( 50% - 30px );
        height: 50px;
        width: 50px;
    }
`;

export const SlideItem = styled.li`
    height: 100%;
    width: ${props => props.width}px;
    background-image: url('${props => props.content}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
`;
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 25%;
    left: 10%;

    @media(max-width:600px){
        left: 0%;
        bottom: 70px;
        width: 100%;
        background-color: white;
    }
`;
export const Header = styled.h2`
    font-family: var(--main-font);
    text-transform: capitalize;
    ${fontTypes.slideTitle};
    padding: 2rem;
    padding-bottom:1rem;
    background: white;

    @media(max-width:600px){
        font-size: 2rem;
        line-height: 30px;
        padding: 1.3rem 2rem 0.5rem;
        white-space: normal;
    }
`;
export const Description = styled.p`
    font-family: var(--secondary-font);
    text-transform: capitalize;
    ${fontTypes.slideDescription};
    padding: 0 2rem 2rem 2rem;
    background: white;

    @media(max-width:600px){
        padding-bottom: 1.3rem;
    }
`;

export const SliderCSS = styled.div`
    position: relative;
    width: ${props => props.width}px;
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
`;
export const DotContainer = styled.div`
    position: absolute;
    bottom: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Dot = styled.span`
    padding: 5px;
    margin-right: 15px;
    cursor: pointer;
    border-radius: 50%;
    background: ${props => props.active ? 'black' : 'white'};

    @media (max-width: 600px){
        padding: 10px;
        margin: 0 10px;
    }
`;
