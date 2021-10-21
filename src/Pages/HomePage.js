import React from 'react';
import { HomePageContainer } from 'Components/HomePage/styled';

import ElementsContainer from 'Components/HomePage/ElementsContainer';

import BannersMock from 'mocks/en-us/featured-banners.json';
import ProductsMock from 'mocks/en-us/featured-products.json';
import CategoriesMock from 'mocks/en-us/product-categories.json';

const HomePage = ()=>{
    return(
        <HomePageContainer>
            <ElementsContainer type={'Banner'} source={BannersMock}/>
            <ElementsContainer type={'Categories'} source={CategoriesMock}/>
            <ElementsContainer type={'Products'} source={ProductsMock}/>
        </HomePageContainer>
    );
};

export default HomePage
