import styled from "styled-components";
import { fontTypes } from "styles/baseFonts";

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    margin-top: 2rem;
    color: white;
    background-color: #666666;
    font-family: var(--secondary-font);
    ${ fontTypes.footerText }

    img{
        height: 30px;
        margin: 0 1rem;
    }

    @media (max-width: 600px){
        flex-direction: column;
        align-items: center;
        font-size: 0.8rem;
        padding: 1rem 0;

        img{
            margin: 0.5rem 0;
        }
    }
`;