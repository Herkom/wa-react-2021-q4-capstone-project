import styled from "styled-components";
import { fontTypes } from "styles/baseFonts";

export const StyledButton = styled.button`
    padding: 1rem 1.5rem;
    background-color: var(--main-color);
    color: var(--secondary-color);
    border: none;
    text-align: center;
    margin: 2rem 0;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    transition: all .5s ease;
    font-family: var(--secondary-font);
    ${ fontTypes.paragraph }

    &:hover{
        background-color: var(--highlight-color);
    }
`;