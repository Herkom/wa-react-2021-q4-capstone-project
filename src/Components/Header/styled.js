import styled from 'styled-components';
import { fontTypes } from "styles/baseFonts";

export const HeaderStyles = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;

    @media (max-width: 600px){
        flex-direction: column;
    }

    a{
        text-decoration: none;
    }

    div{
        display: flex;
        align-items: center;
    }
`;

export const LogoContainer = styled.div`
    text-transform: uppercase;
    font-family: var(--secondary-font);
    color: black;
    display: flex;
    align-items: center;
    cursor: pointer;
    ${ fontTypes.brandName }

    img {
        width: 60px; 
    }
    h1{
        margin-left: 1rem;
    }

    @media (max-width: 600px){
        h1{
            display: none;
        }
    }
`;

export const Cart = styled.img`
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
    margin-left: 1rem;
`;