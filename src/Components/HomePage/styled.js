import styled from 'styled-components'
import { fontTypes } from 'styles/baseFonts'

export const HomePageContainer = styled.section`
    align-items: center;
    display:flex;
    flex-direction: column;
    justify-content: center;
`

export const BannerContainer = styled.article`
    ${props => props.width ? 'width: ' + props.width + 'px;' : 'width: 100%;'}
    ${props => props.height ? 'height:' + props.height + 'px;' : 'height: calc(100vh - 6rem);'}
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 3rem;
    overflow: hidden;
    
    @media(max-width:600px){
        height: 70vh;
    }
`

export const CategoriesContainer = styled.ul`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;

    li{
        margin: 0.5rem;
        min-width: 350px;
        width: 25%;
    }
`

export const ProductContainer = styled.ul`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, 15rem);
    justify-content: center;
    margin: 0 10vw;
    width: calc( 100% - 20vw );
`

export const SectionHeader = styled.h4`
    align-self: start;
    font-family: var(--secondary-font);
    ${fontTypes.subtitleDesktop}
    margin: 1rem 0 0.7rem 10vw;
    text-transform: uppercase;

    @media(max-width:600px){
        ${fontTypes.subtitleMobile}
    }
`
export const CategoryArticle = styled.article`
    overflow: hidden;
    position: relative;

    &:hover div img{
        transform: scale(1.1);
    }
    &:hover div:after{
        opacity: 1;
    }
    &:hover h3{
        color: #e4986a;
    }
`

export const CategoryImageLink = styled.div`
    display: block;
    overflow: hidden;
    position: relative;

    &:after {
        background: rgba(0,0,0,0.4);
        bottom: 0;
        content: '';
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: all 400ms ease-in-out 0s;
    }

    img{
        height: auto;
        max-width: 100%;
        transition: all 0.4s ease-in-out;
    }
`

export const CategoryTitle = styled.h3`
    background: rgba(255, 255, 255, 0.7);
    bottom: 0;
    color: black;
    font-family: var(--main-font);
    letter-spacing: 1px;
    margin: 1rem;
    padding: 1rem 2rem;
    position: absolute;
    right: 0;
    text-decoration: none;
    ${fontTypes.subtitle2Desktop}
`

export const ProductHoverButton = styled.div`
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    height: 0%;
    justify-content: center;
    opacity: 0;
    position: absolute;
    transition: all 0.5s ease;
    width: 100%;
`

export const Article = styled.article`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-items: center;
    margin: 1rem;
    max-width: 20rem;
    position: relative;

    @media(max-width: 600px){
        border: 1px solid #d0caca;
        padding: 1rem;
    }

    &:hover ${ProductHoverButton}{
        height: 100%;
        opacity: 1;
    }
`

export const Text = styled.p`
    font-family: var(--main-font);
    ${fontTypes.paragraph}
`

export const Name = styled.h4`
    color: #666666;
    ${fontTypes.paragraph}
    font-family: var(--secondary-font);
    text-align: center;
`

export const SKU = styled.p`
    font-family: var(--secondary-font);
    margin: 0.5rem 0 1rem 0;
    ${fontTypes.caption}
`

export const ImageContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    max-height: 15rem;
    overflow: hidden;
    width: 100%;

    img {
        max-width: 100%;
    }
    @media(max-width: 600px){
        width: 80%;
        margin-top: 1rem;
    }
`
