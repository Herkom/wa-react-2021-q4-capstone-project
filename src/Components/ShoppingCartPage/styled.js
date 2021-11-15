import styled from "styled-components";
import { fontTypes } from "styles/baseFonts";

export const ShoppingCartSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
`;

export const ShoppingCartHeader = styled.h1`
    ${fontTypes.subtitleDesktop}
    font-family: var(--main-font);
    margin-bottom: 2rem;
`;

export const ShoppingCartTable = styled.table`
    width: 100%;
`;

export const ShoppingCartRow = styled.tr`
    vertical-align: middle;

    &:hover{
        background-color: #eee;
    }
`;

export const ShoppingCartTableHeader = styled.th`
    ${fontTypes.paragraphBold}
    font-family: var(--secondary-font);
    width: 10rem;
    height: 3rem;
`;

export const ShoppingCartDataCell = styled.td`
    text-align: center;
    height: 3rem;
    width: 10rem;
    vertical-align: middle;
    ${fontTypes.paragraph}
    font-family: var(--secondary-font);
    border-bottom: 1px solid #ddd;
`;

export const ShoppingCartProdImage = styled.img`
    width: 100px;
`;

export const ShoppingCartRemoveArticle = styled.img`
    width: 30px;
    height: 30px;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`;