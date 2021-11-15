import styled from 'styled-components'
import { fontTypes } from 'styles/baseFonts'

export const StyledButton = styled.p`
    background-color: ${props => props.disabled ? 'gray' : 'var(--main-color)'};
    border: none;
    color: var(--secondary-color);
    cursor: pointer;
    font-family: var(--secondary-font);
    letter-spacing: 1.5px;
    margin: 2rem 0;
    padding: 1rem 1.5rem;
    text-align: center;
    text-transform: uppercase;
    transition: all .5s ease;
    ${fontTypes.paragraph}

    &:hover{
        background-color: ${props => props.disabled ? 'gray' : 'var(--highlight-color)'};
        cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    }
`
