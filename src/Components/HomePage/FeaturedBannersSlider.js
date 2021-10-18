import React from 'react';
import styled from 'styled-components';

import APIcall from './APIcall';
import { Slider } from '../Slider/Slider';

const Container = styled.section`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    overflow: hidden;
    margin-bottom: 3rem;
`

const FeaturedBannersSlider = () => {
    const [FetchedData, setFetchedData] = React.useState(null);
    const [error, setError] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false);

    const URL = 'http://localhost:8080/en-us/featured-banners.json';

    React.useEffect(() => {
        setIsLoading(true);
        APIcall(URL, setFetchedData, setError, setIsLoading);
    },[])
    
    return(
        <>
            {   isLoading ? 
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
    )
}

export { FeaturedBannersSlider }