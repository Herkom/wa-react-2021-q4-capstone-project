import styled from 'styled-components'
import { fontTypes } from 'styles/baseFonts'

export const StyledFooter = styled.footer`
    background-color: #666666;
    color: white;
    display: flex;
    font-family: var(--secondary-font);
    justify-content: center;
    margin-top: 2rem;
    padding: 2rem 0;
    ${fontTypes.paragraph}

    @media (max-width: 600px){
        flex-direction: column;
        align-items: center;
        font-size: 0.8rem;
        padding: 1rem 0;
    }
`

export const LogoImage = styled.img`
    height: 30px;
    margin: 0 1rem;

    @media (max-width: 600px){
        margin: 0.5rem 0;
    }
`
