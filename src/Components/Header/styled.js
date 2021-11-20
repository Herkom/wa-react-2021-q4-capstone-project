import styled from 'styled-components'
import { fontTypes } from 'styles/baseFonts'

export const HeaderStyles = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;

    @media (max-width: 600px){
        flex-direction: column;
    }
`

export const LogoContainer = styled.div`
    align-items: center;
    color: black;
    cursor: pointer;
    display: flex;
    font-family: var(--secondary-font);
    text-transform: uppercase;
    ${fontTypes.brandName}
`

export const BrandName = styled.h1`
    margin-left: 1rem;
    
    @media (max-width: 600px){
        display: none;
    }
`

export const LogoImage = styled.img`
    width: 60px;
`

export const CartContainer = styled.div`
    align-items: center;
    display: flex;
    height: 30px;
    position: relative;
    width: 30px;
`

export const CartImage = styled.img`
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    height: 30px;
    width: 30px;
`

export const CartBadge = styled.p`
    align-items: center;
    background-color: var(--highlight-color);
    border-radius: 50%;
    color: var(--secondary-color);
    display: none;
    font-family: var(--secondary-font);
    height: 20px;
    justify-content: center;
    position: absolute;
    ${fontTypes.caption}
    right: -5px;
    top: -5px;
    width: 20px;
`
