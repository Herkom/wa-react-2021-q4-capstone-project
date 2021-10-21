import styled from 'styled-components';

export const HomePageContainer = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ProductContainer = styled.ul`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, 15rem);
    justify-content: center;
    margin: 0 10vw;
    width: calc( 100% - 20vw );
`;

export const BannerContainer = styled.section`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    overflow: hidden;
    margin-bottom: 3rem;
`;

export const CategoriesContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    li{
        width: 25%;
        min-width: 350px;
        margin: 0.5rem;
    }
`;