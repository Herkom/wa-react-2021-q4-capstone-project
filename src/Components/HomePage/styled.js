import styled from 'styled-components';
import { fontTypes } from "styles/baseFonts";

export const HomePageContainer = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProductContainer = styled.ul`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, 15rem);
    justify-content: center;
    margin: 0 10vw;
    width: calc( 100% - 20vw );
`;

export const BannerContainer = styled.article`
    ${props => props.width ? 'width: '+ props.width+'px;': `width: 100%;`}
    height: 90vh;
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

export const SectionHeader = styled.h4`
    font-family: var(--secondary-font);
    text-transform: uppercase;
    ${fontTypes.sectionHeader}
    margin: 1rem 0 0.7rem 10vw;
    align-self: start;
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

        color: black;
        text-decoration: none;
        letter-spacing: 1px;
`;