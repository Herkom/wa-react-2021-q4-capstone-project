import React from 'react';
import styled from 'styled-components';

import FeaturedBannersSlider from '../Components/HomePage/FeaturedBannersSlider';
import FeaturedProductsGrid from '../Components/HomePage/FeaturedProductsGrid';
import ProductCategoriesCarousel from '../Components/HomePage/ProductCategoriesCarousel';

const HomePageContainer = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HomePage = ()=>{
    return(
        <HomePageContainer>
            <FeaturedBannersSlider />
            <ProductCategoriesCarousel/>
            <FeaturedProductsGrid />
        </HomePageContainer>
    );
};

export default HomePage
