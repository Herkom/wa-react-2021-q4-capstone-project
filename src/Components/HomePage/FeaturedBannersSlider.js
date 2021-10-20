import React from 'react';
import styled from 'styled-components';

//import APIcall from '../../utils/APIcall';
//import APICallHandler from 'utils/APICallHandler';
import Slider from '../Slider/Slider';

import BannersMock from 'mocks/en-us/featured-banners.json';

const Container = styled.section`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    overflow: hidden;
    margin-bottom: 3rem;
`;

const FeaturedBannersSlider = () => {
    const [FetchedData, setFetchedData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    //const URL = BannersMock;

    /* React.useEffect(() => {
        setIsLoading(true);
        
        APIcall(URL)
        .then(response => APICallHandler(setError, setFetchedData, setIsLoading, response)) 

    },[setIsLoading, URL]); */

    React.useEffect(() => {
        setIsLoading(true);
        
        setFetchedData(BannersMock.results);
        setIsLoading(false);
    },[]);
    
    return(
        <>
            {   
                isLoading ? 
                    ('Here should be a skeleton')
                : error ?
                    ('Here should be an apologize and a refresh page button')
                : FetchedData ?
                    <Container>
                        <Slider {...FetchedData} />
                    </Container>
                : null 
            }
        </>
    );
};

export default FeaturedBannersSlider
