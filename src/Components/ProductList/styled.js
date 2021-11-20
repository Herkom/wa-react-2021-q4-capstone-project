import styled from 'styled-components'

export const H1Header = styled.h1`
    font-size: 2rem;
    margin: 2rem 0;
    text-align: center;
`
export const ProductContainer = styled.ul`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, 15rem);
    justify-content: center;
    margin: 0 auto;
    width: calc( 100% - 20vw );

    @media(max-width:600px){
        grid-template-columns: repeat(auto-fit, 25rem);
        width: calc( 90% );

        li{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`
export const ProductListSection = styled.section`
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`
export const CategoriesContainer = styled.form`
    border: 1px solid grey;
    font-size: 1.5rem;
    margin: 2rem 0 2rem 3rem;
    padding: 1rem;

    @media(max-width: 600px){
        font-size: 1.5rem;
        border: none;
        margin: 2rem;
        padding: 0;
    }
    h2{
        font-size: 24px;
    }

    ul{
        font: 400 0.8rem/1.5rem 'Mulish',sans-serif;
        margin-left: 0.5rem;
        margin-top: 0.8rem;

        @media(max-width: 600px){
            font-size: 1rem;
            margin-left: 1rem;
        }
    }

    label{
        align-items: center;
        display: flex;

        @media(max-width: 600px){
            margin: 1rem 0;
        }
    }

    input[type='checkbox']{
        height: 20px;
        margin-right: 0.5rem;
        width: 20px;

        @media(max-width: 600px){
            height: 25px;
            width: 25px;
        }
    }
`

export const PaginatorContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    width: 100%;

    img{
        background-color: grey;
        border-radius: 50%;
        cursor: pointer;
        height: 35px;
        padding: 10px 5px;
        width: 35px;
    }
    ul{
        display: flex;
        margin: 0 1rem;

        @media( max-width:600px ){
            margin: 0 0.5rem;
        }
    }
    li{
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        font: 400 0.8rem/1.5rem 'Mulish',sans-serif;
        height: 2rem;
        justify-content: center;
        margin: 0 0.5rem;
        width: 2rem;

        @media( max-width:600px ){
            margin: 0 0.3rem;
        }
    }
`

export const SkeletonContainer = styled.div`
    border: 1px rgba(0, 0, 0, 0.2) solid;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    
    height: 23rem;
    width: 15rem;

    @media(max-width: 600px){
        margin: 0 auto;
    }
`
export const SkeletonAnimation = styled.div`
    animation: skeletonAnimation 1s ease-in-out infinite;
    background: rgba(0, 0, 0, 0.11);

    @keyframes skeletonAnimation {
        0% {
            opacity:1;
        }
        50% {
            opacity:0.4;
        }
        100% {
            opacity:1;
        }
    }

`
export const SkeletonText = styled(SkeletonAnimation)`
    height: 1rem;
    margin: 1rem auto;
`
export const SkeletonImg = styled(SkeletonAnimation)`
    height: 10rem;
    margin: 1rem;
`
export const SkeletonCategory = styled(SkeletonText)`
    width: 50%;
`
export const SkeletonName = styled(SkeletonText)`
    width: 90%;
`
export const SkeletonSKU = styled(SkeletonText)`
    width: 30%;
`
export const SkeletonPrice = styled(SkeletonText)`
    width: 25%;
`
