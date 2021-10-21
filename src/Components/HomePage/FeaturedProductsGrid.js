import React from 'react';
import styled from 'styled-components';

//import APIcall from '../../utils/APIcall';
//import APICallHandler from 'utils/APICallHandler';
import ProductElement from './ProductElement';
import Button from 'Components/Button';

import ProductsMock from 'mocks/en-us/featured-products.json';

const Container = styled.ul`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, 15rem);
    justify-content: center;
    margin: 0 10vw;
    width: calc( 100% - 20vw );
`;

const FeaturedProductsGrid = () => {
    const [FetchedData, setFetchedData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    //const URL = 'https://raw.githubusercontent.com/Herkom/wa-react-2021-q4-capstone-project/feat/deliverable1/mocks/en-us/featured-products.json';

    /* React.useEffect(() => {
        setIsLoading(true);
        
        APIcall(URL)
        .then(response => APICallHandler(setError, setFetchedData, setIsLoading, response)) 

    },[setIsLoading, URL]); */

    React.useEffect(() => {
        setIsLoading(true);
        
        setFetchedData(ProductsMock.results);
        setError(null);
        setIsLoading(false);
    },[]);
    
    return(
        <>
            {   isLoading ? 
                    ('Here should be a skeleton')
                : error ?
                    ('Here should be an apologize and a refresh page button')
                : FetchedData ?
                    <Container>
                        {FetchedData.map(item => (
                            <li key={item.id} id={item.id}>
                                <ProductElement {...item} />
                            </li>
                        ))}
                    </Container>
                : null 
            }
            <Button>
                View all products
            </Button>
        </>
    );
};

export default FeaturedProductsGrid
