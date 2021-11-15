import styled from 'styled-components'
import { fontTypes } from 'styles/baseFonts'

export const ProductDetailPageContainer = styled.section`
    align-items: center;
    display: flex;
    justify-content: center;
`

export const DetailsContainer = styled.article`
    display: flex;
    flex-direction: column;
    max-width: 35vw;
`
export const MainDetails = styled.div`
    margin:1rem 0;
`
export const ProductName = styled.h1`
    font-family: var(--main-font);
    ${fontTypes.titleDesktop}
`
export const ProductPrice = styled.h2`
    font-family: var(--secondary-font);
    ${fontTypes.subtitle2Desktop}
`
export const ProductSKU = styled.p`
    font-family: var(--secondary-font);
    ${fontTypes.caption}
`
export const ProductCategory = styled.p`
    font-family: var(--secondary-font);
    ${fontTypes.paragraph}
`
export const ProductTags = styled.div`
    display: flex;
    font-family: var(--secondary-font);
    ${fontTypes.paragraph}

    label{
        margin: 0 5px;
    }
`
export const ProductDescription = styled(ProductSKU)`
    margin: 10px 0;
    width: 80%;
`
export const AddToCartContainer = styled.div`
    display: flex;
    margin: 1rem 0;


    div{
        margin: 0 1rem 0 0;
    }
`
export const QtyInputContainer = styled.div`
    display: flex;
    height: 3rem;
    position: relative;
    width: 3.5rem;

    span{
        display: flex;
        flex-direction: column;
        height: 3rem;
        margin-right: 0px;
        position: absolute;
        right: 0;
    }
`

export const QtyInput = styled.input`
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
    appearance: textfield;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    color: #232323;
    height: 3rem;
    padding: 0.175rem 0.5rem;
    width: 3rem;
    
    &::-webkit-outer-spin-button{
        -webkit-appearance: none;
    }

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    &:focus-visible{
        border: 1px solid rgba(0, 0, 0, 0.1);
        outline: none;
    }
`

export const QtyButton = styled.p`
    align-items: center;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: none;
    box-sizing: border-box;
    display:flex;
    height: 50%;
    justify-content: center;
    width: 1.5rem;
`

export const QtyIcon = styled.img`
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    height: 1rem;
    width: 1rem;
`

export const ProductStock = styled(ProductCategory)``

export const Specs = styled.table`
    margin-top: 1rem;
    width: 80%;
`

export const SpecsTitle = styled.th`
    font-family: var(--secondary-font);
    ${fontTypes.subtitle2Desktop}
`

export const Spec = styled.td`
    font-family: var(--secondary-font);
    ${fontTypes.paragraphBold}
`
export const SpecValue = styled.td`
    font-family: var(--secondary-font);
    ${fontTypes.paragraph}
`
