import React from 'react';
import { FeaturedBannersSlider } from '../Components/HomePage/FeaturedBannersSlider';
import { FeaturedProductsGrid } from '../Components/HomePage/FeaturedProductsGrid';
import { ProductCategoriesCarousel } from '../Components/HomePage/ProductCategoriesCarousel';

const HomePage = ()=>{
    return(
        <section>
            <FeaturedBannersSlider />
            <ProductCategoriesCarousel/>
            <FeaturedProductsGrid />
        </section>
    )
}

export { HomePage }