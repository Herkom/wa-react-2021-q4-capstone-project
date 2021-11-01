import React from 'react';

import { HomePageContainer, BannerContainer } from 'Components/HomePage/styled';
import Slider from 'Components/Slider/Slider';
import ElementsContainer from 'Components/HomePage/ElementsContainer';

//import BannersMock from 'mocks/en-us/featured-banners.json';
import { useFeaturedBanners } from 'utils/hooks/useFeaturedBanners';

const HomePage = ()=>{
    const { data, isLoading } = useFeaturedBanners('banner', 5);

    return(
        <HomePageContainer>
            {
                !isLoading ?
                    <BannerContainer >
                        <Slider items={data.results} />
                    </BannerContainer>
                : <div>Loading...</div>
            }

            <ElementsContainer type={'category'} pageSize='30' />
            <ElementsContainer type={'product'} pageSize='16' optional={'featured'} />
        </HomePageContainer>
    );
};

export default HomePage
