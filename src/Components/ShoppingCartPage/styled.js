import styled from 'styled-components'
import { fontTypes } from 'styles/baseFonts'

export const ShoppingCartSection = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`

export const ShoppingCartHeader = styled.h1`
    ${fontTypes.subtitleDesktop}
    font-family: var(--main-font);
    margin-bottom: 2rem;
`

export const ShoppingCartTable = styled.table`
    width: 100%;
`

export const ShoppingCartRow = styled.tr`
    vertical-align: middle;

    &:hover{
        background-color: #eee;
    }
`

export const ShoppingCartTableHeader = styled.th`
    ${fontTypes.paragraphBold}
    font-family: var(--secondary-font);
    height: 3rem;
    width: 10rem;
`

export const ShoppingCartDataCell = styled.td`
    border-bottom: 1px solid #ddd;
    font-family: var(--secondary-font);
    height: 3rem;
    text-align: center;
    ${fontTypes.paragraph}
    vertical-align: middle;
    width: 10rem;
`

export const ShoppingCartProdImage = styled.img`
    width: 100px;
`

export const ShoppingCartRemoveArticle = styled.img`
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    height: 30px;
    width: 30px;
`
