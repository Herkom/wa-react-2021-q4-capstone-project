import styled from 'styled-components'
import { fontTypes } from 'styles/baseFonts'

export const SliderCSS = styled.div`
    height: ${props => props.height ? `${props.height}px` : '100%'};
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    width: ${props => props.width}px;
`

export const Container = styled.ul`
    display: flex;
    height: 100%;
    transform: translateX(-${props => props.translate}px);
    transition: transform ease-out ${props => props.transition}s;
    width: ${props => props.width}px;
`

export const SlideItem = styled.li`
    height: 100%;
    position: relative;
    width: ${props => props.width}px;

    img{
        width: 100%;
    }
`

export const InfoContainer = styled.div`
    bottom: 25%;
    display: flex;
    flex-direction: column;
    left: 10%;
    position: absolute;

    @media(max-width:600px){
        left: 0%;
        bottom: 70px;
        width: 100%;
        background-color: white;
    }
`

export const Header = styled.h2`
    background: white;
    font-family: var(--main-font);
    ${fontTypes.titleDesktop};
    padding: 2rem;
    padding-bottom:1rem;
    text-transform: capitalize;

    @media(max-width:600px){
        ${fontTypes.titleMobile};
        padding: 1.3rem 2rem 0.5rem;
        white-space: normal;
    }
`

export const Description = styled.p`
    background: white;
    font-family: var(--secondary-font);
    ${fontTypes.paragraph};
    padding: 0 2rem 2rem 2rem;
    text-transform: capitalize;

    @media(max-width:600px){
        padding-bottom: 1.3rem;
    }
`

export const SVG = styled.div`
    align-items: center;
    background: none;
    border: 2px solid white;
    ${props => props.direction === 'right' ? 'right: 25px' : 'left: 25px'};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 65px;
    justify-content: center;
    position: absolute;
    top: calc( 50% - 65px );
    transition: all ease-in 0.1s;
    width: 65px;

    &:hover {
        background: #e4986a;
        border: 2px solid #e4986a;
        transform: scale(1.1);
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
`

export const DotContainer = styled.div`
    align-items: center;
    bottom: 25px;
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
`

export const Dot = styled.span`
    background: ${props => props.active ? 'black' : 'white'};
    border-radius: 50%;
    box-shadow: 0px 1px 1px gray;
    cursor: pointer;
    margin-right: 15px;
    padding: 5px;

    @media (max-width: 600px){
        padding: 10px;
        margin: 0 10px;
    }
`
