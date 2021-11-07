import styled from 'styled-components';
import { fontTypes } from "styles/baseFonts";

export const HomePageContainer = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BannerContainer = styled.article`
    ${props => props.width ? 'width: '+ props.width +'px;': 'width: 100%;'}
    ${props => props.height ? 'height:'+ props.height +'px;' : 'height: calc(100vh - 6rem);'}
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    overflow: hidden;
    margin-bottom: 3rem;
    
    @media(max-width:600px){
        height: 70vh;
    }
`;

export const CategoriesContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    li{
        width: 25%;
        min-width: 350px;
        margin: 0.5rem;
    }
`;

export const ProductContainer = styled.ul`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, 15rem);
    justify-content: center;
    margin: 0 10vw;
    width: calc( 100% - 20vw );
`;

export const SectionHeader = styled.h4`
    font-family: var(--secondary-font);
    text-transform: uppercase;
    ${fontTypes.subtitleDesktop}
    margin: 1rem 0 0.7rem 10vw;
    align-self: start;

    @media(max-width:600px){
        ${fontTypes.subtitleMobile}
    }
`
export const CategoryArticle = styled.article`
    position: relative;
    overflow: hidden;

    &:hover div img{
        transform: scale(1.1);
    }
    &:hover div:after{
        opacity: 1;
    }
    &:hover h3{
        color: #e4986a;
    }
`;

export const CategoryImageLink = styled.div`
    position: relative;
    overflow: hidden;
    display: block;

    &:after {
        content: '';
        position: absolute;
        background: rgba(0,0,0,0.4);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        transition: all 400ms ease-in-out 0s;
    }

    img{
        max-width: 100%;
        height: auto;
        transition: all 0.4s ease-in-out;
    }
`;

export const CategoryTitle = styled.h3`
    position: absolute;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.7);
    margin: 1rem;
    bottom: 0;
    right: 0;
    font-family: var(--main-font);
    ${fontTypes.subtitle2Desktop}
        color: black;
        text-decoration: none;
        letter-spacing: 1px;
`;

export const ProductHoverButton = styled.div`
    height: 0%;
    width: 0%;
    background-color: rgba(100, 255, 255, 0.7);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    max-width: 20rem;
    margin: 1rem;
    position: relative;

    @media(max-width: 600px){
        border: 1px solid #d0caca;
        padding: 1rem;
    }

    &:hover ${ProductHoverButton}{
        height: 100%;
        width: 100%;
    }
`;

export const Text = styled.p`
    font-family: var(--main-font);
    ${fontTypes.paragraph}
`;

export const Name = styled.h4`
    font-family: var(--secondary-font);
    ${fontTypes.paragraph}
    text-align: center;
    color: #666666;
`;

export const SKU = styled.p`
    margin: 0.5rem 0 1rem 0;
    font-family: var(--secondary-font);
    ${fontTypes.caption}
`;

export const ImageContainer = styled.div`
    width: 100%;
    max-height: 15rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
    }
    @media(max-width: 600px){
        width: 80%;
        margin-top: 1rem;
    }
`;