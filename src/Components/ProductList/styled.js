import styled from 'styled-components';

export const H1Header = styled.h1`
    font-size: 2rem;
    text-align: center;
    margin: 2rem 0;
`;
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
`;
export const ProductListSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`;
export const CategoriesContainer = styled.form`
    margin: 2rem 0 2rem 3rem;
    padding: 1rem;
    border: 1px solid grey;
    font-size: 1.5rem;

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
        display: flex;
        align-items: center;

        @media(max-width: 600px){
            margin: 1rem 0;
        }
    }

    input[type='checkbox']{
        height: 20px;
        width: 20px;
        margin-right: 0.5rem;

        @media(max-width: 600px){
            height: 25px;
            width: 25px;
        }
    }
`;

export const PaginatorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2rem;

    img{
        height: 35px;
        width: 35px;
        background-color: grey;
        border-radius: 50%;
        padding: 10px 5px;
        cursor: pointer;
    }
    ul{
        display: flex;
        margin: 0 1rem;

        @media( max-width:600px ){
            margin: 0 0.5rem;
        }
    }
    li{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0.5rem;
        border-radius: 50%;
        border: 1px solid #ccc;
        width: 2rem;
        height: 2rem;
        font: 400 0.8rem/1.5rem 'Mulish',sans-serif;

        @media( max-width:600px ){
            margin: 0 0.3rem;
        }
    }
`;

export const SkeletonContainer = styled.div`
    width: 15rem;
    height: 23rem;
    border-radius: 15px;
    border: 1px rgba(0, 0, 0, 0.2) solid;
    
    display: flex;
    flex-direction: column;

    @media(max-width: 600px){
        margin: 0 auto;
    }
`;
export const SkeletonAnimation = styled.div`
    background: rgba(0, 0, 0, 0.11);
    animation: skeletonAnimation 1s ease-in-out infinite;

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

`;
export const SkeletonText = styled(SkeletonAnimation)`
    height: 1rem;
    margin: 1rem auto;
`;
export const SkeletonImg = styled(SkeletonAnimation)`
    margin: 1rem;
    height: 10rem;
`;
export const SkeletonCategory = styled(SkeletonText)`
    width: 50%;
`;
export const SkeletonName = styled(SkeletonText)`
    width: 90%;
`;
export const SkeletonSKU = styled(SkeletonText)`
    width: 30%;
`;
export const SkeletonPrice = styled(SkeletonText)`
    width: 25%;
`;
